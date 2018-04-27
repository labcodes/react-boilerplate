import React from 'react';

import Exceptions from 'helpers/exceptions';

// ====

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };

        this.exception = new Exceptions('https://684fd202de044572adc1ba2b7bc14a41@sentry.io/1197780');
    }

    componentDidMount() {
        this.exception.install();
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: info.componentStack
        });

        this.exception.report(info.componentStack);
        this.exception.reportMessage(error);
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
