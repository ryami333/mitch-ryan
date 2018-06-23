// @flow

import React from 'react';
import { Provider } from 'react-redux';
import Panel from './Panel';
import Triangle from './Triangle';
import { WindowProvider, WindowConsumer } from './WindowContainer';
import store from '../state/store';

import '../../scss/main.scss';

function App() {
	return (
		<WindowProvider>
			<Provider store={store}>
				<div className="container">
					<WindowConsumer>
						{windowState => <Triangle {...windowState} />}
					</WindowConsumer>
					<Panel />
				</div>
			</Provider>
		</WindowProvider>
	);
}

export default App;
