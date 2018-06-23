// @flow

import React, { Component } from 'react';
import fastdom from 'fastdom';

type TriangleProps = {
    innerHeight: number,
    innerWidth: number,
};

class Triangle extends Component<TriangleProps> {
    componentDidMount() {
        window.addEventListener('mousemove', this.handleMove);

        fastdom.mutate(this.mutate);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMove);
    }

    componentDidUpdate() {
        fastdom.mutate(this.mutate);
    }

    ref: ?HTMLCanvasElement;
    context: ?CanvasRenderingContext2D;
    position: number = 0.5;

    measure = (e: SyntheticMouseEvent<*>) => {
        const rx = 1 - e.clientX / this.props.innerWidth;
        const ry = e.clientY / this.props.innerHeight;
        this.position = rx + ry - 0.5;
    };

    mutate = () => {
        if (this.context) {
            const { context, position } = this;
            const { innerHeight, innerWidth } = this.props;

            // Draw BG
            context.fillStyle = '#DDD';
            context.fillRect(0, 0, innerWidth, innerHeight);

            // Draw Triangle
            context.beginPath();
            context.fillStyle = '#333';
            context.moveTo(0, (position - 0.5) * innerHeight);
            context.lineTo(innerWidth, innerHeight * (position + 0.5));
            context.lineTo(innerWidth, 0);
            context.lineTo(0, 0);
            context.lineTo(0, (position - 0.5) * innerHeight);
            context.fill();
        }
    };

    handleMove = (e: SyntheticMouseEvent<*>) => {
        fastdom.measure(() => this.measure(e));
        fastdom.mutate(() => this.mutate());
    };

    render() {
        const { innerWidth, innerHeight } = this.props;

        return (
            <canvas
                width={innerWidth}
                height={innerHeight}
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

export default Triangle;
