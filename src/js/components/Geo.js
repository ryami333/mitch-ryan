// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

const MAGNITUDE = 30;

type GeoProps = {
    x: number,
    y: number,
    innerWidth: number,
    innerHeight: number,
};

class Geo extends Component<GeoProps> {
    componentDidUpdate() {
        this.raf =
            this.raf ||
            window.requestAnimationFrame(() => {
                const rotation = {
                    x: 2 * (this.props.x / this.props.innerWidth - 0.5),
                    y: 2 * (this.props.y / this.props.innerHeight - 0.5),
                };

                const style = {
                    transform: `rotate3d(${rotation.x}, ${
                        rotation.y
                    }, 0, ${MAGNITUDE}deg)`,
                };

                Object.assign(this.ref ? this.ref.style : {}, style);
                this.raf = false;
            });
    }

    raf;
    ref: ?HTMLElement;

    render() {
        return (
            <div
                className="geo"
                ref={ref => {
                    this.ref = ref;
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

function mapStateToProps(state) {
    const {
        mouse: { x, y },
        window: { innerWidth, innerHeight },
    } = state;
    return {
        x,
        y,
        innerWidth,
        innerHeight,
    };
}

export default connect(mapStateToProps)(Geo);
