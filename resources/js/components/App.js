import 'main.scss';

import React, { Component } from 'react';
import Geo from 'components/Geo';
import Panel from 'components/Panel';
import Triangle from 'components/Triangle';
import WindowWatcher from 'components/WindowWatcher';
import MouseWatcher from 'components/MouseWatcher';
import { Provider } from 'react-redux';
import store from 'state/store';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <WindowWatcher />
                    <div className="bg" />
                    <Triangle />
                    {/*<Geo />*/}
                    <Panel />
                </div>
            </Provider>
        );
    }
}

export default App;
