// @flow

import React, { Component, createContext, type Node } from 'react';
import throttled from '../utilities/raf-throttled';

type ContainerState = {
	innerHeight: number,
	innerWidth: number,
};

type ContainerProps = {
	children: Node,
};

const initialState: ContainerState = {
	innerHeight: window.innerHeight,
	innerWidth: window.innerWidth,
};

const { Provider, Consumer } = createContext(initialState);

export class WindowProvider extends Component<ContainerProps, ContainerState> {
	state = initialState;

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = throttled(
		e =>
			new Promise(resolve => {
				this.setState(
					{
						innerHeight: window.innerHeight,
						innerWidth: window.innerWidth,
					},
					resolve,
				);
			}),
	);

	render() {
		const { children } = this.props;

		return <Provider value={this.state}>{children}</Provider>;
	}
}

export const WindowConsumer = Consumer;
