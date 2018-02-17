import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import { Route, Switch, Link } from 'react-router'
import Customer from './Customer'
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
		let newCustomerForm = <button onClick={this.showNewCustomerForm}>New Customer</button>
		if (this.state.showNewCustomerForm) {
			newCustomerForm = <NewCustomer createCustomer={(data) => this.handleCreateCustomer(data)} />
		}
		let customersList = <h3>Loading customers ... </h3>
		if (this.props.customers) {
			customersList = this.props.customers.map((customer, index) => {
				return (
					<div key={index}>
						<Customer customer={customer} />
					</div>
				)
			})
		}

		return (
			<div>
				<Switch>
					<Route path={`/customers/:id`} component={Customer} />
				</Switch>
				{newCustomerForm}
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
		onFetchCustomers: () => dispatch(actions.fetchCustomers()),
		onCreateCustomer: (data, history) => dispatch(actions.createCustomer(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers) 