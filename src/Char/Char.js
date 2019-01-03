import React from 'react';
import './Char.css';

const Char = (props) => {

    return (
        <button className="char" onClick={props.click}>
            {props.character}
        </button>        
    )
} 

export default Char;