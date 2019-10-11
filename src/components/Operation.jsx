import React from 'react'

function Operation(props) {
  const { value, handleClick } = props
  return (
    <div className="btn" onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex="0">
      <button type="button" value={value}>{ value }</button>
    </div>
  )
}

export default Operation
