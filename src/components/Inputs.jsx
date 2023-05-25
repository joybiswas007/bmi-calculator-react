import React from 'react';

function Inputs(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Inputs;
