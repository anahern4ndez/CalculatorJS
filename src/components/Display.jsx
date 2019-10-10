import React from 'react';
import '../styles/style.css';

function Display(props) {
  const { text } = props;
  return (
    <div className="display">{ text }</div>
  );
}

export default Display;
