import React from 'react';

function Operation(props) {
  const { value, handleClick } = props;
  return (
    <div className="btn">
      <button type="button" value={value} onClick={handleClick}>{ value }</button>
    </div>
  );
}

export default Operation;
