import 'main.scss';

import React, { Component } from 'react';
import Geo from 'components/Geo';
import Panel from 'components/Panel';

class App extends Component {

    render() {
        return (
            <div>
                <Geo />
                <Panel />
            </div>
        );
    }
}

export default App;