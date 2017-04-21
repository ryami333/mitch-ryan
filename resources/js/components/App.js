import 'main.scss';

import React, { Component } from 'react';
import Geo from 'components/Geo';
import Panel from 'components/Panel';
import WindowWatcher from 'components/WindowWatcher';
import MouseWatcher from 'components/MouseWatcher';
import { Provider } from 'react-redux';
import store from 'state/store';

class App extends Component {

    componentDidMount() {
        window.addEventListener('mousemove', function() {

        });
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <WindowWatcher />
                    <MouseWatcher />
                    <Geo />
                    <Panel />
                </div>
            </Provider>
        );
    }
}

export default App;
