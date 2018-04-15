import React from 'react';
import { Provider } from 'react-redux';
import Panel from './Panel';
import Triangle from './Triangle';
import WindowWatcher from './WindowWatcher';
import store from '../state/store';

import '../../scss/main.scss';

function App() {
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

export default App;
