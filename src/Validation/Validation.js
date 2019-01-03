import React from 'react';

const Validation = (props) => {
    let validationMessage;

    if (props.inputLength < 6) {
        validationMessage = 'Text too short';
    } else {
        validationMessage = 'Text long enough';
    }

    return (
        <div>
            {validationMessage}
        </div>
        
    )
} 

export default Validation;