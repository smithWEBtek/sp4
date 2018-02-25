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
						<button className="Item"><Link to='/appquest' >schedule appt</Link></button>
						<button className="Item"><Link to='/appts' >appts</Link></button>
						<button className="Item"><Link to='/inspection' >inspection</Link></button>
						<button className="Item"><Link to='/techbio' >tech bio</Link></button>
						<button className="Item"><Link to='/music' >music</Link></button>
						<button className="Item"><Link to='/lessons' >lessons</Link></button>
						<button className="Item"><Link to='/contact' >contact</Link></button>
						<button className="Item"><Link to='/customers' >customers</Link></button>
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
