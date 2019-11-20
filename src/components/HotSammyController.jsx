import React from 'react';
import HotIcon from './HotIcon';
import HotButton from './HotButton';
import NotIcon from './NotIcon';

class HotSammyController extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   like: 0,
   notLikes:0
  };
  this.handleIncrementLikes=this.handleIncrementLikes.bind(this);  
  this.handleIncrementNotLikes=this.handleIncrementNotLikes.bind(this); 
  this.renderHotIcons=this.renderHotIcons.bind(this);
 }
  
 handleIncrementLikes(){
  var currentLikes= this.state.like;
  currentLikes+=1;
  this.setState({like: currentLikes})
  console.log(this.state.like);
 }
 handleIncrementNotLikes(){
  var currentNotlikes=this.state.notLikes;
  currentNotlikes+=1;
  this.setState({notLikes:currentNotlikes});
  console.log(this.state.notLikes);
 }
 renderHotIcons(){
   let arrayIcons=[];
   for(var i=0; i<this.state.like; i++){
     arrayIcons.push(<HotIcon/>);
    }
    return arrayIcons;
  }
  renderNotHotIcons(){
    let arrayIcons=[];
    for(var i=0; i<this.state.notLikes; i++){
      arrayIcons.push(<NotIcon/>);
     }
     return arrayIcons;
   }
    

 render(){
  return(
   <div>
    <HotButton onHotClick={this.handleIncrementLikes} 
     onNotHotClick={this.handleIncrementNotLikes}/>
    {this.renderHotIcons()}
    <hr/>
    {this.renderNotHotIcons()}


      
      
   </div>
  );}
}

export default HotSammyController;