  
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import AddSandwich from './AddSandwich';
import CommunitySandwichBoard from './CommunitySandwichBoard';
import ReviewSandwich from './ReviewSandwich';

import SandwichDetailsController from './SandwichDetailsController';
import Error404 from './Error404';


class App extends React.Component {

	render(){
		return(
			<div>
				<Header/>
				<Switch>
					<Route path='/' component={CommunitySandwichBoard}/>
					<Route path='/AddSandwich' component={AddSandwich}/>
					<Route path='/ReviewSandwich' component={ReviewSandwich}/>
					<Route path='/SandwichDetails' component={SandwichDetailsController}/>
					<Route component ={Error404}/>
				</Switch>
			</div>
		);}
}
export default App;