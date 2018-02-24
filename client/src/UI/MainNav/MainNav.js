import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './MainNav.css'
import Logo from '../Logo/Logo.svg'
import { Grid, Collapse, Navbar, NavItem, Nav } from 'react-bootstrap'

class MainNav extends Component {


	render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect className="MainNav">
					<Navbar.Collapse>
						<Navbar.Header>
							<Navbar.Brand>
								<Link to="/" id="BrandText">SmithPiano</Link>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
					</Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1}>
							<Link to='/customers' className="Item">customers</Link>
						</NavItem>
						<NavItem eventKey={2}>
							<Link to='/assets' className="Item">assets</Link>
						</NavItem>
						<NavItem eventKey={3}>
							<Link to='/appts' className="Item">appts</Link>
						</NavItem>
						<NavItem eventKey={4}>
							<Link to='/services' className="Item">tech bio</Link>
						</NavItem>
						<NavItem eventKey={4}>
							<Link to='/services' className="Item">music</Link>
						</NavItem>
						<NavItem eventKey={4}>
							<Link to='/services' className="Item">lessons</Link>
						</NavItem>
						<NavItem eventKey={4}>
							<Link to='/services' className="Item">contact</Link>
						</NavItem>
						<NavItem eventKey={4}>
							<Link to='/services' className="Item">login/schedule</Link>
						</NavItem>
					</Nav>
				</Navbar>

				<div>
					<Route path="/" exact render={() => (
						<div className="Center">
							<br />
							<h5>Smith Piano Services</h5>
							<h5>Tuning, Teaching, Live Performance</h5>

							<h3>II III II III II III II III II III II III II</h3>
						</div>
					)} />
				</div>
			</div >
		)
	}
}

export default MainNav
