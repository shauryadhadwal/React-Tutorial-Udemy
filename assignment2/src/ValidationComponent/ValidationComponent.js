import React from 'react';

const validation = (props) => {

    const style = {
        fontWeight: '900',
        fontSize: '25px',
        color: 'red'
    }

    let Message = null;
    
    if (props.text.length <= 5) {
        Message = <div>
            The minimum length to display characters is 5
        </div>
    }
    else {
        Message = <div>
            {props.text.length}
        </div>
    }
    
    return (
        <div style={style}>
            {Message}
        </div>
    )
}

export default validation;