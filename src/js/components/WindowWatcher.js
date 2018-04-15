// @flow

import { Component } from 'react';
import { connect } from 'react-redux';
import { updateWindowDimensions } from '../state/actions';

type WindowWatcherProps = {
    updateWindowDimensions: Function,
};

class WindowWatcher extends Component<WindowWatcherProps> {
    componentDidMount() {
        window.addEventListener('resize', this.update);
        document.addEventListener('DOMContentLoaded', this.update);
        document.addEventListener('ready', this.update);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.update);
        document.removeEventListener('DOMContentLoaded', this.update);
        document.removeEventListener('ready', this.update);
    }

    update = () => {
        this.props.updateWindowDimensions({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        });
    };

    render() {
        return null;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateWindowDimensions(...args) {
            return dispatch(updateWindowDimensions(...args));
        },
    };
}

export default connect(null, mapDispatchToProps)(WindowWatcher);
