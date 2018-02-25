import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap'
import { Route } from 'react-router'
import Aux from '../src/hoc/Aux'
import MainNav from '../src/UI/MainNav/MainNav'

import Customers from '../src/Customers/Customers'
import Appts from '../src/Appts/Appts'
import Services from '../src/Services/Services'
import Inspection from '../src/Inspection/Inspection'
import Lessons from '../src/Lessons/Lessons'
import Music from '../src/Music/Music'
import TechBio from '../src/TechBio/TechBio'
import Contact from '../src/Contact/Contact'
import AppQuest from '../src/Appts/Schedule/AppQuest'

class App extends Component {
	render() {
		return (
			<Container className="App">
				<MainNav />
				<Aux>
					<Route path="/customers" component={Customers} />
					<Route path="/appts" component={Appts} />
					<Route path="/services" component={Services} />
					<Route path="/inspection" component={Inspection} />
					<Route path="/techbio" component={TechBio} />
					<Route path="/music" component={Music} />
					<Route path="/lessons" component={Lessons} />
					<Route path="/contact" component={Contact} />
					<Route path="/appquest" component={AppQuest} />
					<Route path="/customers" component={Customers} />
				</Aux>
				<div className="Center">
					<hr />
					<hr />
					<p>&#169;2018 Smith Piano Services</p>
					<p>Piano technical services in New England since 1982</p>
					<p>II III II III II III II III II III II III II III II III </p>
				</div>
			</Container>
		);
	}
}

export default App;
