// @flow

import React, { Component, createContext, type Node } from 'react';

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

	raf: ?number;

	handleResize = () => {
		this.raf =
			this.raf ||
			window.requestAnimationFrame(() => {
				this.setState(
					{
						innerHeight: window.innerHeight,
						innerWidth: window.innerWidth,
					},
					() => {
						this.raf = null;
					},
				);
			});
	};

	render() {
		const { children } = this.props;

		return <Provider value={this.state}>{children}</Provider>;
	}
}

export const WindowConsumer = Consumer;
