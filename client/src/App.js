import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router'
import Aux from '../src/hoc/Aux'
import MainNav from '../src/UI/MainNav/MainNav'
import Customers from '../src/Customers/Customers'
import NewCustomer from '../src/Customers/NewCustomer'
import Appts from '../src/Appts/Appts'
import NewAppt from '../src/Appts/NewAppt'
// import Assets from '../src/Assets/Assets'
// import Services from '../src/Services/Services'

class App extends Component {
	render() {
		return (
			<div>
				<MainNav />
				<Aux>
					<Route exact path="/customers" component={Customers} />
					<Route exact path="/customers/new" component={NewCustomer} />
					<Route exact path="/appts" component={Appts} />
					<Route exact path="/appts/new" component={NewAppt} />
					{/* <Route path="/assets/" component={Assets} /> */}
					{/* <Route path="/services" component={Services} /> */}
				</Aux>
			</div>
		);
	}
}

export default App;
