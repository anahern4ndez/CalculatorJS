import React from 'react';

function Operation(props){
    const { value, handleClick } = props
    return(
        <div>
            <button value={value} onClick={handleClick}>{ value }</button>
        </div>
    )
}

export default Operation;