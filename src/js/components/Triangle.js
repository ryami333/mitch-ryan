// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fastdom from 'fastdom';

type TriangleProps = {
    innerHeight: number,
    innerWidth: number,
};

class Triangle extends Component<TriangleProps> {
    componentDidMount() {
        window.addEventListener('mousemove', this.handleMove);

        if (this.ref) {
            this.ref.width = this.props.innerWidth;
            this.ref.height = this.props.innerHeight;
        }

        fastdom.mutate(() => this.mutate());
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMove);
    }

    raf: ?Function;
    ref: ?HTMLCanvasElement;
    context: ?CanvasRenderingContext2D;
    position: number = 0.5;

    measure(e) {
        const rx = 1 - e.clientX / this.props.innerWidth;
        const ry = e.clientY / this.props.innerHeight;
        this.position = rx + ry - 0.5;
    }

    mutate() {
        if (this.context) {
            const { context } = this;

            // Draw BG
            context.fillStyle = '#DDD';
            context.fillRect(
                0,
                0,
                this.props.innerWidth,
                this.props.innerHeight,
            );
            // Draw Triangle
            context.beginPath();
            context.fillStyle = '#333';
            context.moveTo(0, (this.position - 0.5) * this.props.innerHeight);
            context.lineTo(
                this.props.innerWidth,
                this.props.innerHeight * (this.position + 0.5),
            );
            context.lineTo(this.props.innerWidth, 0);
            context.lineTo(0, 0);
            context.lineTo(0, (this.position - 0.5) * this.props.innerHeight);
            context.fill();
        }
    }

    handleMove = e => {
        this.raf =
            this.raf ||
            window.requestAnimationFrame(() => {
                fastdom.measure(() => this.measure(e));
                fastdom.mutate(() => this.mutate());

                this.raf = null;
            });
    };

    render() {
        return (
            <canvas
                className="triangle"
                ref={ref => {
                    this.ref = ref;
                    this.context = ref
                        ? ref.getContext('2d', { alpha: false })
                        : null;
                }}
            />
        );
    }
}

function mapStateToProps(state) {
    const {
        window: { innerHeight, innerWidth },
    } = state;
    return {
        innerHeight,
        innerWidth,
        gradient: innerHeight / innerWidth,
    };
}

export default connect(mapStateToProps)(Triangle);
