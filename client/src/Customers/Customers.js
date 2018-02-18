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
		const { history } = this.props
		this.props.onCreateCustomer(data, history)
	}

	render() {
		const { match } = this.props
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
				<Switch>
					<Route exact path={`${match.url}/:id/edit`} component={EditCustomer} />
					<Route exact path={`${match.url}/new`} component={NewCustomer} />
					<Route exact path={`${match.url}/:id`} component={Customer} />
					<Route exact path={match.url} />
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
		onFetchCustomers: () => dispatch(actions.fetchCustomers()),
		onCreateCustomer: (data, history) => dispatch(actions.createCustomer(data, history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customers)) 