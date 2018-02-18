import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import { Route, Switch, withRouter } from 'react-router'
import CustomersList from './CustomersList'
import Customer from './Customer'
import EditCustomer from './EditCustomer'
import NewCustomer from './NewCustomer'

class Customers extends Component {
	state = {
		showNewCustomerForm: false
	}

	componentDidMount() {
		this.props.onFetchCustomers()
	}

	showNewCustomerForm = () => {
		this.setState({ showNewCustomerForm: true })
	}

	handleCreateCustomer = (data) => {
		console.log('[data]', data)
		const { history } = this.props
		this.props.onCreateCustomer(data, history)
	}
	render() {

		const { history, match } = this.props

		let newCustomerForm = <button onClick={this.showNewCustomerForm}>New Customer</button>
		if (this.state.showNewCustomerForm) {
			newCustomerForm = <NewCustomer createCustomer={(data) => this.handleCreateCustomer(data)} />
		}

		let customersList = <h3>Loading customers ... </h3>
		if (this.props.customers) {
			customersList = (
				<CustomersList
					customers={this.props.customers} />
			)
		}

		return (
			<div>
				{newCustomerForm}
				{customersList}
				<Switch>
					<Route exact path={`${match.url}/:id`} exact component={Customer} />
					<Route path={`${match.url}/:id/edit`} exact component={EditCustomer} />
					<Route path={`${match.url}/new`} exact component={NewCustomer} />
					<Route path={match.url} exact />
				</Switch>
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
		onFetchCustomers: () => dispatch(actions.fetchCustomers()),
		onCreateCustomer: (data, history) => dispatch(actions.createCustomer(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers)) 