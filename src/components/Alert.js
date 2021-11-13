/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, success }) => {
    if (!message) return null;
    // if statement evaluates as truthy, component renders null 
    // if false, component renders as below

    return (
        <div className={`Alert alert-${success ? 'success' : 'error'}`}>
            {message}
        </div>
    );
    // presentational component
    // passing the argument 'message' i.e. props object
    // destructure props object to access the message prop, which is rendered inside the <div>

    // added success prop
    // changed className to JSX expression with template literal string 
    // className is Alert, and ternary operator will determine whether success prop is truthy or not and display class .alert-success or alert.error
};

Alert.propTypes = {
    //propTypes is an object appended to Alert
    //propTypes object comprises two key/value pairs
    //keys are the props passed to the component
    // values are the types that the PropTypes package exposes
    message: PropTypes.string.isRequired,
    //message prop is required for component to render properly
    success: PropTypes.bool,
    //success is optional, bc only used for success messages
    // bc success prop is not required, need to add a defaultProps property to Alert
}

Alert.defaultProps = {
    success: false,
}
//the default value of success prop is assigned as false
//default value is used when success is not passed into the component
// absence of a prop is equivalent to prop={false}

export default Alert;