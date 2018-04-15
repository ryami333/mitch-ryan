// @flow

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const rootEl = document.querySelector("[data-root]");

if (rootEl) {
	ReactDOM.render(<App />, rootEl);

	if (module !== undefined && module.hot !== undefined) {
		module.hot.accept("./components/App", () => {
			// eslint-disable-next-line global-require
			const NextApp = require("./components/App").default;
			ReactDOM.render(<NextApp />, rootEl);
		});
	}
}
