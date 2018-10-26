import React from 'react';

const userInput = (props) => {
    const style = {
        borderRadius: '5px',
        padding: '10px',
        fontSize: '20px'
    };

    return ( 
        <div>
            <input style={style} type="text" value={props.username} onChange={props.changed}/>
        </div>
    );
}

export default userInput;

