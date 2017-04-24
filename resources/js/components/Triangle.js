import React, { Component } from 'react';
import { connect } from 'react-redux';
import fastdom from 'fastdom';

class Triangle extends Component {

    _raf = false;
    _ref;

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMove.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMove);
    }

    handleMove(e) {
        this._raf = this._raf || window.requestAnimationFrame(() => {
            let scale;

            fastdom.measure(() => {
                let rx = e.clientX / this.props.innerWidth;
                let ry = e.clientY / this.props.innerHeight;
                scale = 4 * (1 - (rx - ry));
            });

            fastdom.mutate(() => {
                this._ref.style.transform = `scale(${scale})`;
                this._raf = false;                
            });
        });
    }

    render() {
        return (
            <div className="triangle" ref={ref => this._ref = ref}/>
        )
    }
}

const mapStateToProps = function(state) {
    let { window: { innerHeight, innerWidth }} = state;
    return {
        innerHeight,
        innerWidth,
    }
}

export default connect(mapStateToProps)(Triangle);