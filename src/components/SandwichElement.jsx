import React from 'react';
import PropTypes from 'prop-types';
import HotSammyController from './HotSammyController';

function SandwichElement(props){
 return(
  <div>
   <h2>{props.name}</h2>
   <h2>{props.location}</h2>
   <h2>{props.price}</h2>
   <h2>{props.ingredients}</h2>
   <HotSammyController/>
  </div>
 );
}
SandwichElement.propTypes = {
 name: PropTypes.string.isRequired,
 location: PropTypes.string.isRequired,
 price: PropTypes.string,
 ingredients: PropTypes.string
};

export default SandwichElement;