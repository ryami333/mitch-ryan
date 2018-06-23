// @flow

import React, { Component, createContext, type Node } from 'react';
import throttle from 'lodash/throttle';

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

	handleResize = throttle(() =>
		this.setState({
			innerHeight: window.innerHeight,
			innerWidth: window.innerWidth,
		}),
	);

	render() {
		const { children } = this.props;

		return <Provider value={this.state}>{children}</Provider>;
	}
}

export const WindowConsumer = Consumer;
