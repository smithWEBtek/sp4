import React from 'react'
import { connect } from 'react-redux'

const Customer = (props) => {
	// debugger
	console.log('[Customer]props: ', props)
	// console.log('[Customer]match: ', match)

	let customer = <p>finding customer....</p>
	// let customerId = +props.match.params.id
	let customerId = props.customer.id || +props.match.params.id
	debugger

	customer = props.customers.filter(c => c.id === customerId)[0]

	console.log('[customer] customer: ', customer)
	// if (!props.customer) {
	// 	customer = props.customers.find(c => c.id === +props.match.params.id)
	// }


	return (
		// <div key={props.customer.id}>
		// 	<p>{props.customer.firstname} {props.customer.lastname}, {props.customer.address}, {props.customer.city}, {props.customer.state} {props.customer.zip}<br />
		// 		{props.customer.pno_brand} {props.customer.pno_type} {props.customer.pno_model} {props.customer.pno_serial}<br />
		// 		Last meeting: {props.customer.last_meeting || 'unknown'}</p>
		// 	<hr />
		// </div>
		<div>
			<p>{customer.firstname} {customer.lastname}</p>
			<hr />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		customers: state.cst.customers
	}
}

export default connect(mapStateToProps)(Customer)