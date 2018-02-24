import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap'
import { Route } from 'react-router'
import Aux from '../src/hoc/Aux'
import MainNav from '../src/UI/MainNav/MainNav'

import Customers from '../src/Customers/Customers'
import Appts from '../src/Appts/Appts'
// import Assets from '../src/Assets/Assets'
import Services from '../src/Services/Services'

class App extends Component {
	render() {
		return (
			<Grid className="App">
				<MainNav />
				<Aux>
					<Route path="/customers" component={Customers} />
					<Route path="/appts" component={Appts} />
					{/* <Route path="/assets/" component={Assets} /> */}
					<Route path="/services" component={Services} />
				</Aux>
				<div>
					<hr />
					<hr />
					<p>&#169;2018 Smith Piano Services</p>
					<p>Piano technical services in New England since 1982</p>
					<p>II III II III II III II III II III II III II III II III </p>
				</div>
			</Grid>
		);
	}
}

export default App;
