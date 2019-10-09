import React from "react";

function Number(props) {
    const { nvalue, handleClick } = props;
    if(nvalue ===0){
        return (
            <div className="btn" onClick={handleClick} double-col="1">
                <button type="button" value={nvalue}>{ nvalue }</button>
            </div>
        );
    }
    else{
        return (
            <div className="btn" onClick={handleClick} double-col="0">
                <button type="button" value={nvalue}>{ nvalue }</button>
            </div>
        );
    }
}

export default Number;
