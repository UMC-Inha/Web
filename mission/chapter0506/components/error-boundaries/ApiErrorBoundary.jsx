import React from "react";

export default class ApiErrorBoundary extends React.Component{
	constructor(props) {
		super(props);
		this.state = { hasError: false }; 
	}

	static getDerivedStateFromError(error) {
        return { hasError: true };
	}

	render() {
		if(this.state.hasError) {
            return <h1>에러 발생!</h1>;
        }

		return this.props.children;
	}
}
