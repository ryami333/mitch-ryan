import 'main.scss';

import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div>
                <div className="geo">
                    <svg className="geo__svg" viewBox="-10 -10 110 110" preserveAspectRatio="none" vectorEffect="non-scaling-stroke">
                        <polygon className="geo__polygon" points="40 0, 100 20, 80 100, 30 90, 0 50" fill="none" stroke="red" />
                    </svg>
                </div>
                <div className="panel">
                    <div className="panel__inner">
                        <h1>Mitch Ryan</h1>
                        <p>New Zealand based full-stack web developer, specialising in interactive media and particularly interested in projects of social importance.</p>
                        <p>Mitch has experience working with major domestic and international organisations, and his work has been recognised by such reputable institutuions as &ldquo;W3&rdquo;, &ldquo;Awwwards&rdquo;, &ldquo;The FWA&rdquo; and &ldquo;The Webby Awards&rdquo;.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;