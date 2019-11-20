import React from 'react';
import PropTypes from 'prop-types';
import SandwichElement from './SandwichElement';

function CommunitySandwichBoard(props){


 return(
  <div>
        
   {props.sammyList.map(
    (sammyList, index) => 
     <SandwichElement
      name={sammyList.name} 
      location={sammyList.location} 
      price={sammyList.price} 
      ingredients={sammyList.ingredients} 
      key={index}/>
   )}
  </div>
 );
}

export default CommunitySandwichBoard;