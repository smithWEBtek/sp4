import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import { Route, Switch } from 'react-router'
import CustomersList from './CustomersList'
import Customer from './Customer'
import EditCustomer from './EditCustomer'
import NewCustomer from './NewCustomer'

class Customers extends Component {

	componentDidMount() {
		this.props.onFetchCustomers()
	}

	render() {
		const { match } = this.props

		console.log('[Customers match]', match);

		let customersList = <h3>Loading customers ... </h3>
		if (this.props.customers) {
			customersList = (
				<CustomersList
					customers={this.props.customers} />
			)
		}

		return (
			<div>
				<Switch>
					{/* <Route exact path={`${match.url}/:id/edit`} component={EditCustomer} /> */}
					{/* <Route exact path={`${match.url}/new`} component={NewCustomer} /> */}
					<Route exact path={`${match.url}/:id`} component={Customer} />
					{/* <Route exact path={match.url} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Customers) 