// @flow

import React, {
	Component,
	createContext,
	type Node,
	type Context,
} from 'react';

type ContainerState = {
	innerHeight: number,
	innerWidth: number,
};

type ContainerProps = {
	children: ContainerState => Node,
};

const initialState = {
	innerHeight: window.innerHeight,
	innerWidth: window.innerWidth,
};

const { Provider, Consumer }: Context<ContainerState> = createContext(
	initialState,
);

export class WindowProvider extends Component<ContainerProps, ContainerState> {
	state = initialState;

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize = () => {
		this.setState({
			innerHeight: window.innerHeight,
			innerWidth: window.innerWidth,
		});
	};

	render() {
		const { children } = this.props;

		return <Provider value={this.state}>{children}</Provider>;
	}
}

export const WindowConsumer = Consumer;
