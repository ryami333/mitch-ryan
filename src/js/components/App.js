import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Geo from './Geo';
import Panel from './Panel';
import Triangle from './Triangle';
import WindowWatcher from './WindowWatcher';
import MouseWatcher from './MouseWatcher';
import store from '../state/store';

import '../../scss/main.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <WindowWatcher />
                    <Triangle />
                    <Panel />
                </div>
            </Provider>
        );
    }
}

export default App;
