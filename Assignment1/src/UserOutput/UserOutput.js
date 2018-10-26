import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return ( 
        <div className="user-output">
            <h1>{props.username}</h1>
            <p>{props.text.text1}</p>
            <p>{props.text.text2}</p>
        </div>
    );
}

export default userOutput;

