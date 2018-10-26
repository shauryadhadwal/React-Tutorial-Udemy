import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '15px',
        border: '1px solid #ccc'
    }
    return (
        <div style={style}>
            {props.value}
        </div>
    )
}

export default charComponent;