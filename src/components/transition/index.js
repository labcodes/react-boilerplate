import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

// ====

const transitionConfig = {
    delay: 150,

    defaultStyle: {
        transition: `opacity 150ms ease-in-out`,
        opacity: 0
    },

    transitionStyles: {
        entering: { opacity: 0 },
        entered: { opacity: 1 }
    }
};

const TransitionComponent = (props) => {
    const { customClass, transitionIn, children: childrenComponent } = props;
    const { delay, defaultStyle, transitionStyles } = transitionConfig;

    let sectionClass = 'page-wrapper ';

    if (customClass) {
        sectionClass += customClass;
    }

    return(
        <Transition in={transitionIn} timeout={delay}>
            {(state) => (
                <section className={sectionClass}
                    style={{ ...defaultStyle, ...transitionStyles[state] }}>

                    {childrenComponent}
                </section>
            )}
        </Transition>
    );
};

// ====

TransitionComponent.defaultProps = {
    transitionIn: false
};

TransitionComponent.propTypes = {
    customClass: PropTypes.string,
    transitionIn: PropTypes.bool.isRequired
};

// ====

export default TransitionComponent;
