import React from 'react';
import Panel from './Panel';
import Triangle from './Triangle';
import { Provider as WindowProvider, useWindow } from './WindowContainer';

import '../../scss/main.scss';

function App(): React.ReactElement {
	const windowState = useWindow();

	return (
		<div className="container">
			<Triangle {...windowState} />
			<Panel />
		</div>
	);
}

export default function AppWrapper(): React.ReactElement {
	return (
		<WindowProvider>
			<App />
		</WindowProvider>
	);
}
