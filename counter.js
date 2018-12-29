import * as React from 'react';

class Counter extends React.Component {
	state = {
		counter: 0,
	};

	/**
	 * Increments the counter
	 */
	increment = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}));
	}

	// Renders
	render() {
		return (
			<div>
				<p>Current Count: {this.state.counter}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

// export
export default Counter;