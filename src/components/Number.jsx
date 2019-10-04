import React from "react";

function Number(props) {
    const { nvalue, handleClick } = props;
    return (
        <div className="numberButton" onClick={handleClick}>
            <button type="button" value={nvalue}>{ nvalue }</button>
        </div>
    );
}

export default Number;
