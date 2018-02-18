import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import CustomersList from './CustomersList'
import Customer from './Customer'
import EditCustomer from './EditCustomer'
import NewCustomer from './NewCustomer'
import NewAppt from '../Appts/NewAppt'


class Customers extends Component {

	componentDidMount() {
		this.props.onFetchCustomers()
	}

	render() {
		const { match, customers } = this.props

		let newApptForm = <button><Link to={`/appts/new`}>New Appointment</Link></button>
		let newCustomerForm = <button><Link to={`/customers/new`}>New Customer</Link></button>

		let customersList = <h3>Loading customers ... </h3>
		if (customers) {
			customersList = (
				<CustomersList
					customers={customers} />
			)
		}

		return (
			<div>
				{newCustomerForm}
				{newApptForm}
				<Switch>
					<Route exact path={`${match.url}/:id/edit`} component={EditCustomer} />
					<Route exact path={`${match.url}/new`} component={NewCustomer} />
					<Route exact path={`${match.url}/:id`} component={Customer} />
					<Route exact path={match.url} />
					<Route exact path={`/appts/new`} component={NewAppt} />
				</Switch>
				{customersList}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		customers: state.cst.customers
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchCustomers: () => dispatch(actions.fetchCustomers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers)) 