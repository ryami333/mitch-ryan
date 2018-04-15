import React, { Component } from 'react';
import { connect } from 'react-redux';

const MAGNITUDE = 30;

class Geo extends Component {
    _raf;
    _ref;

    componentDidUpdate() {
        this._raf =
            this._raf ||
            window.requestAnimationFrame(() => {
                let rotation = {
                    x: 2 * (this.props.x / this.props.innerWidth - 0.5),
                    y: 2 * (this.props.y / this.props.innerHeight - 0.5),
                };

                let style = {
                    transform: `rotate3d(${rotation.x}, ${
                        rotation.y
                    }, 0, ${MAGNITUDE}deg)`,
                };

                Object.assign(this._ref.style, style);
                this._raf = false;
            });
    }

    render() {
        return (
            <div
                className="geo"
                ref={ref => {
                    this._ref = ref;
                }}
            >
                <svg
                    className="geo__svg"
                    viewBox="-10 -10 110 110"
                    preserveAspectRatio="none"
                    vectorEffect="non-scaling-stroke"
                >
                    <polygon
                        className="geo__polygon"
                        points="40 0, 100 20, 80 100, 30 90, 0 50"
                        fill="none"
                        stroke="red"
                    />
                </svg>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    let {
        mouse: { x, y },
        window: { innerWidth, innerHeight },
    } = state;
    return {
        x,
        y,
        innerWidth,
        innerHeight,
    };
};

export default connect(mapStateToProps)(Geo);
