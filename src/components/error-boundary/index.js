import React from 'react';

// ====

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: info.componentStack
        });
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return(
                <h1>Something went wrong!</h1>
            )
        }

        return this.props.children;
    }
};

// ====

export default ErrorBoundary;
