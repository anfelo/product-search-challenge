import React, { Component } from 'react';

export default function lazyComponent(getComponent) {
	class LazyComponent extends Component {
		static Component = null;
		state = { Component: LazyComponent.Component };

		componentDidMount() {
			if (!this.state.Component) {
				getComponent().then((Component) => {
					LazyComponent.Component = Component;
					this.setState({ Component });
				});
			}
		}
		render() {
			const { Component } = this.state;
			if (Component) {
				return <Component {...this.props} />;
			}
			return null;
		}
	}
	return LazyComponent;
}
