import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
// import ApptsList from './ApptsList'
import Appt from './Appt'
// import EditAppt from './EditAppt'
import NewAppt from './NewAppt'

class Appts extends Component {

	componentDidMount() {
		// this.props.onFetchAppts()
	}

	render() {
		const { match } = this.props

		let newApptForm = <button><Link to={`/appts/new`}>New Appointment</Link></button>

		// let apptsList = <h3>Loading appts ... </h3>
		// if (appts) {
		// 	apptsList = (
		// 		<ApptsList
		// 			appts={appts} />
		// 	)
		// }

		return (
			<div>
				{newApptForm}
				<Switch>
					{/* <Route exact path={`${match.url}/:id/edit`} component={EditAppt} /> */}
					<Route exact path={`${match.url}/new`} component={NewAppt} />
					<Route exact path={`${match.url}/:id`} component={Appt} />
					<Route exact path={match.url} />
				</Switch>
				{/* {apptsList} */}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		appts: state.cst.appts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAppts: () => dispatch(actions.fetchAppts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Appts)) 