import React, { Component } from 'react'
import * as actions from '../store/actions/index'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import Aux from '../hoc/Aux'
import NewAppt from './NewAppt'
import Available from '../Schedule/Available'
import Appt from './Appt'

class Appts extends Component {

	componentDidMount() {
		this.props.onFetchAppts()
	}

	render() {
		const { match } = this.props

		let renderAppts = this.props.appts.map((appt, index) => {
			return (
				<Aux key={index}>
					<tr>
						<td><Link to={`/appts/${appt.id}`}>{appt.customer.lastname}</Link></td>
						<td>{appt.appt_date.split('T')[0]}</td>
						<td>{appt.appt_start.split('T')[0]}</td>
						<td>{appt.appt_note}</td>
					</tr>
				</Aux>
			)
		})

		return (
			<div>
				<button><Link to='/appts/new'>New Appointment</Link></button>
				<Switch>
					{/* <Route path={`${match.url}/:id/edit`} exact component={EditAppt} /> */}
					<Route path={`${match.url}/new`} exact component={NewAppt} />
					<Route path={`${match.url}/available`} exact component={Available} />
					<Route path={`${match.url}/:id`} exact component={Appt} />
					<Route path={match.url} exact />
				</Switch>
				<Table striped size="sm" className="ApptsList">
					<thead>
						<tr>
							<th>Customer</th>
							<th>Date</th>
							<th>Start</th>
							<th>Note</th>
						</tr>
					</thead>
					<tbody>
						{renderAppts}
					</tbody>
				</Table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		appts: state.apt.appts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAppts: () => dispatch(actions.fetchAppts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Appts))
