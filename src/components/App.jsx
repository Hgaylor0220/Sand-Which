import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import AddSandwich from './AddSandwich';
import CommunitySandwichBoard from './CommunitySandwichBoard';
import ReviewSandwich from './ReviewSandwich';
import SandwichDetailsController from './SandwichDetailsController';
import Error404 from './Error404';


class App extends React.Component {
 constructor(props) {
  super(props);
  this.state={
   masterSammyList: []
  };
  this.handleAddingNewSammyToList=this.handleAddingNewSammyToList.bind(this);
 }
 handleAddingNewSammyToList(newPost){
  var newMasterSammyList= this.state.masterSammyList.slice();
  newMasterSammyList.push(newPost);
  this.setState({masterSammyList: newMasterSammyList});
 }
 render(){
  return(
   <div>
    <Header/>
    <Switch>
     <Route exact path='/' render={() =><CommunitySandwichBoard sammyList={this.state.masterSammyList}/>}/> 
     <Route path='/AddSandwich' render= {() =><AddSandwich onAddingNewSandwich={this.handleAddingNewSammyToList}/>}/>
     <Route path='/ReviewSandwich' component={ReviewSandwich}/>
     <Route path='/SandwichDetails' component={SandwichDetailsController}/>
     <Route component ={Error404}/>
    </Switch>
   </div>
  );}
}
export default App;