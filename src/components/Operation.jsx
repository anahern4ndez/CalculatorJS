import React from 'react';

function Operation(props){
    const { value, handleClick, number } = props
    return(
        <div className="btn">
            <button value={value} onClick={handleClick}>{ value }</button>
        </div>
    )
}

export default Operation;