import React from 'react'
import { connect } from 'react-redux'

const Customer = (props) => {
	const customer = props.customers.find(customer => customer.id === +props.match.params.id)
	let customerCard = <div><p>Customer component is loading ... </p></div>
	if (customer) {
		customerCard = (
			<div>
				<h3>{customer.firstname} {customer.lastname}</h3>
				<p>{customer.firstname} {customer.lastname}, {customer.address}, {customer.city}, {customer.state} {customer.zip}<br />
					{customer.pno_brand} {customer.pno_type} {customer.pno_model} {customer.pno_serial}<br />
					Last meeting: {customer.last_meeting || 'unknown'}</p>
				<hr />
				<hr />
			</div>
		)
	}

	return (
		<div>
			{customerCard}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		customers: state.cst.customers
	}
}

export default connect(mapStateToProps)(Customer)
