import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './MainNav.css'
// import Logo from '../Logo/Logo.svg'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown
} from 'reactstrap'

class MainNav extends Component {
	render() {
		return (
			<div>
				<Navbar dark className="MainNav">
					<Collapse>
						<NavbarBrand>
							<NavItem to="/" id="BrandText">SmithPiano</NavItem>
						</NavbarBrand>
						<NavbarToggler />
					</Collapse>
					<Nav>
						<NavItem>
							<Link to='/customers' className="Item">customers</Link>
						</NavItem>
						<NavItem>
							<Link to='/assets' className="Item">assets</Link>
						</NavItem>
						<NavItem>
							<Link to='/appts' className="Item">appts</Link>
						</NavItem>
						<NavItem>
							<Link to='/inspection' className="Item">inspection</Link>
						</NavItem>
						<NavItem>
							<Link to='/techbio' className="Item">tech bio</Link>
						</NavItem>
						<NavItem>
							<Link to='/music' className="Item">music</Link>
						</NavItem>
						<NavItem>
							<Link to='/lessons' className="Item">lessons</Link>
						</NavItem>
						<NavItem>
							<Link to='/contact' className="Item">contact</Link>
						</NavItem>
						<NavItem>
							<Link to='/appquest' className="Item">appquest</Link>
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
			</div>
		)
	}
}

export default MainNav
