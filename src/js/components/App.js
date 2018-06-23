// @flow

import React from 'react';
import Panel from './Panel';
import Triangle from './Triangle';
import { WindowProvider, WindowConsumer } from './WindowContainer';
import store from '../state/store';

import '../../scss/main.scss';

function App() {
	return (
		<WindowProvider>
			<div className="container">
				<WindowConsumer>
					{windowState => <Triangle {...windowState} />}
				</WindowConsumer>
				<Panel />
			</div>
		</WindowProvider>
	);
}

export default App;
