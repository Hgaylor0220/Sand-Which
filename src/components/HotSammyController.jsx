import React from 'react';
import HotIcon from './HotIcon';
import HotButton from './HotButton';

class HotSammyController extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   like: 0,
   notLikes:0
  };
  this.handleIncrementLikes=this.handleIncrementLikes.bind(this);  
  this.handleIncrementNotLikes=this.handleIncrementNotLikes.bind(this); 
 }
  
 handleIncrementLikes(){
  var currentLikes= this.state.like;
  currentLikes+=1;
  this.setState({like: currentLikes});
 }
 renderHotIcons(){
  let arrayIcons=[];
  for(var i=0; i<this.state.like; i++){
   arrayIcons.push(<HotIcon/>);
  }
  return arrayIcons;
 }
 handleIncrementNotLikes(){
  var currentNotlikes=this.state.notLikes;
  currentNotlikes+=1;
  this.setState({notLikes:currentNotlikes});
 }


 render(){
  return(
   <div>
    <HotButton onHotClick={this.handleIncrementLikes} 
     onNotHotClick={this.handleIncrementNotLikes}/>
    {this.renderHotIcons}


      
      
   </div>
  );}
}

export default HotSammyController;