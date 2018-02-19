import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './MainNav.css'
import Logo from '../Logo/Logo.svg'
import { Container, Collapse, Navbar, Nav } from 'reactstrap'

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
			<Container>
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

			</Container >
		)
	}
}

export default MainNav
