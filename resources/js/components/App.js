import "../../scss/main.scss";

import React, { Component } from "react";
import { Provider } from "react-redux";
import Geo from "./Geo";
import Panel from "./Panel";
import Triangle from "./Triangle";
import WindowWatcher from "./WindowWatcher";
import MouseWatcher from "./MouseWatcher";
import store from "../state/store";

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
