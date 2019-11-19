import React from 'react';

function SandwichElement(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.location}</h2>
      <h2>{props.price}</h2>
      <h2>{props.ingredients}</h2>
    </div>
  );
}

export default SandwichElement;