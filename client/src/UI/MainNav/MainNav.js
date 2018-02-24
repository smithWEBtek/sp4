import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './MainNav.css'
import { Container, Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap'

class MainNav extends Component {

	render() {
		return (
			<div>
				<Navbar className="MainNav" light expand="md">
					<div className="logo-home">
						<Link to='/'>SmithPiano</Link>
					</div>
					<Nav navbar>
						<Link to='/assets' className="Item">assets</Link>
						<Link to='/appts' className="Item">appts</Link>
						<Link to='/inspection' className="Item">inspection</Link>
						<Link to='/techbio' className="Item">tech bio</Link>
						<Link to='/music' className="Item">music</Link>
						<Link to='/lessons' className="Item">lessons</Link>
						<Link to='/contact' className="Item">contact</Link>
						<Link to='/appquest' className="Item">appquest</Link>
					</Nav>
				</Navbar >
				<div>
					<Route path="/" exact render={() => (
						<div>
							<div className="Left">
								<br />
								<h5>Smith Piano Services</h5>
								<h5>Tuning, Teaching, Live Performance</h5>
								<h3>II III II III II III II III II III II III II</h3>
							</div>
						</div>
					)} />
				</div>
			</div>
		)
	}
}

export default MainNav
