import React from 'react';

function Number(props) {
  const { nvalue, handleClick } = props;
  if (nvalue === 0) {
    return (
      <div className="btn" onClick={handleClick} onKeyDown={handleClick} double-col="1" role="button" tabIndex="0">
        <button type="button" value={nvalue}>{ nvalue }</button>
      </div>
    );
  }

  return (
    <div className="btn" onClick={handleClick} onKeyDown={handleClick} double-col="0" role="button" tabIndex="0">
      <button type="button" value={nvalue}>{ nvalue }</button>
    </div>
  );
}

export default Number;
