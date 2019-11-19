import React from 'react';


function AddSandwich(props){
  let _name = null;
  let _location = null;
  let _price = null;
  let _ingredients = null;

  function handleNewSandwichSubmission(event) {
    event.preventDefault();
    props.onAddingNewSandwich({name: _name.value, location: _location.value, price: _price.value, ingredients: _ingredients.value})
     _name = '';
     _location = '';
     _price = '';
     _ingredients = '';
  }
  return(
    <div>
      <form onSubmit={handleNewSandwichSubmission}>
      <input
              type='text'
              id='name'
              placeholder='Name'
              ref={(input) => {_name = input;}}/>
      <input
              type='text'
              id='location'
              placeholder='Location'
              ref={(input) => {_location = input;}}/>
      <input
              type='text'
              id='price'
              placeholder='Price'
              ref={(input) => {_price = input;}}/>
      <input
              type='text'
              id='ingredients'
              placeholder='Ingredients'
              ref={(input) => {_ingredients = input;}}/>
              <button className='btn right' type="submit">PostSammy</button>
      
      </form> 
    </div>
  );
}

export default AddSandwich;