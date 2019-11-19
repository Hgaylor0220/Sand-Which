import React from 'react';
import PropTypes from 'prop-types';
import SandwichElement from './SandwichElement';

function CommunitySandwichBoard(props){
  console.log(props.sammyList)

    return(
        <div>
          <p>SHUTUP</p>
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

// CommunitySandwichBoard.PropTypes= {
//     sammyList: PropTypes.array

// };
export default CommunitySandwichBoard;