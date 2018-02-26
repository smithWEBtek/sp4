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
import Assets from '../src/Assets/Assets'


class App extends Component {
	render() {
		return (
			<Container className="App">
				<MainNav />
				<Aux>
					<Route exact path="/customers" component={Customers} />
					<Route exact path="/appts" component={Appts} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/inspection" component={Inspection} />
					<Route exact path="/techbio" component={TechBio} />
					<Route exact path="/music" component={Music} />
					<Route exact path="/lessons" component={Lessons} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/appquest" component={AppQuest} />
					<Route exact path="/assets" component={Assets} />
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
