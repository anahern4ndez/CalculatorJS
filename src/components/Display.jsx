import React from 'react';

function Display(props) {
  const { text } = props;
  return (
    <div className="display">{ text }</div>
  );
}

export default Display;
