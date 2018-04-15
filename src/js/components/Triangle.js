import React, { Component } from 'react';
import { connect } from 'react-redux';
import fastdom from 'fastdom';

class Triangle extends Component {
    _raf = false;
    _ref;
    _context;
    _position = 0.5;

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMove.bind(this));

        this._ref.width = this.props.innerWidth;
        this._ref.height = this.props.innerHeight;

        fastdom.mutate(() => this.mutate());
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMove);
    }

    measure(e) {
        let rx = 1 - e.clientX / this.props.innerWidth;
        let ry = e.clientY / this.props.innerHeight;
        this._position = rx + ry - 0.5;
    }

    mutate() {
        // Draw BG
        this._context.fillStyle = '#DDD';
        this._context.fillRect(
            0,
            0,
            this.props.innerWidth,
            this.props.innerHeight,
        );

        // Draw Triangle
        this._context.beginPath();
        this._context.fillStyle = '#333';
        this._context.moveTo(
            0,
            (this._position - 0.5) * this.props.innerHeight,
        );
        this._context.lineTo(
            this.props.innerWidth,
            this.props.innerHeight * (this._position + 0.5),
        );
        this._context.lineTo(this.props.innerWidth, 0);
        this._context.lineTo(0, 0);
        this._context.lineTo(
            0,
            (this._position - 0.5) * this.props.innerHeight,
        );
        this._context.fill();
    }

    handleMove(e) {
        this._raf =
            this._raf ||
            window.requestAnimationFrame(() => {
                fastdom.measure(() => this.measure(e));
                fastdom.mutate(() => this.mutate());

                this._raf = false;
            });
    }

    render() {
        return (
            <canvas
                className="triangle"
                ref={ref => {
                    this._ref = ref;
                    this._context = ref.getContext('2d', { alpha: false });
                }}
            />
        );
    }
}

const mapStateToProps = function(state) {
    let {
        window: { innerHeight, innerWidth },
    } = state;
    return {
        innerHeight,
        innerWidth,
        gradient: innerHeight / innerWidth,
    };
};

export default connect(mapStateToProps)(Triangle);
