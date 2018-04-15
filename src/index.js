// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';

const rootEl = document.querySelector('[data-root]');

if (rootEl) {
    ReactDOM.render(<App />, rootEl);

    if (module !== undefined && module.hot !== undefined) {
        module.hot.accept('./js/components/App', () => {
            // eslint-disable-next-line global-require
            const NextApp = require('./js/components/App').default;
            ReactDOM.render(<NextApp />, rootEl);
        });
    }
}
