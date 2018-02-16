import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'

import Customer from './Customer'

class Customers extends Component {

	componentDidMount() {
		this.props.onFetchCustomers()

	}

	render() {
		let customersList = <h3>Loading customers ... </h3>
		if (this.props.customers) {
			customersList = this.props.customers.map(customer => {

				return (
					<Customer customer={customer} />
				)
			})
		}

		return (
			<div>
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