import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './MainNav.css'
import Logo from '../Logo/Logo.svg'
import { Grid, Collapse, Navbar, Nav } from 'react-bootstrap'


<Navbar>
	<Navbar.Header>
		<Navbar.Brand>
			<a href="/">React-Bootstrap</a>
		</Navbar.Brand>
	</Navbar.Header>
	<Nav>
		<NavItem eventKey={1} href="#">
			Link
    </NavItem>
		<NavItem eventKey={2} href="#">
			Link
    </NavItem>
		<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			<MenuItem eventKey={3.1}>Action</MenuItem>
			<MenuItem eventKey={3.2}>Another action</MenuItem>
			<MenuItem eventKey={3.3}>Something else here</MenuItem>
			<MenuItem divider />
			<MenuItem eventKey={3.4}>Separated link</MenuItem>
		</NavDropdown>
	</Nav>
</Navbar>;


class MainNav extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<Grid>
				<div className="logo-home">
					<Link to='/'>SmithPiano</Link>
				</div>
				<Navbar className="MainNav" light expand="md">
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<Link to='/customers' className="Item">customers</Link>
							<Link to='/assets' className="Item">assets</Link>
							<Link to='/appts' className="Item">appts</Link>
							<Link to='/services' className="Item">svcs</Link>
						</Nav>
					</Collapse>
				</Navbar >
				<div>
					<Route path="/" exact render={() => (
						<div>
							<div className="Center">
								<div>
								</div>
								<br />
								<h5>Smith Piano Services</h5>
								<h5>Tuning, Teaching, Performing</h5>
								<img src={Logo} height="150px" className="Logo" alt=" app-logo" /> <br />
								<h3>II III II III II III II III II III II III II</h3>
							</div>
						</div>
					)} />
				</div>

			</Grid >
		)
	}
}

export default MainNav
