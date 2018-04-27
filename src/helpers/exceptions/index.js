import Raven from 'raven-js';

// ====

class Exceptions {
    constructor(url = '') {
        this.service_url = url;
        this.raven = Raven;
    }

    install() {
        this.raven.config(this.service_url).install();
    }

    reportMessage(message) {
        this.raven.captureMessage(message);
    }

    report(error) {
        this.raven.captureException(
            new Error(error)
        );
    }
}

// ====

export default Exceptions;
