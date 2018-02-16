import React from 'react'

const Customer = (props) => {
	return (
		<div>
			<p>{props.customer.firstname} {props.customer.lastname}</p>
			<p>{props.customer.address}, {props.customer.city}, {props.customer.state} {props.customer.zip}</p>
			<p>{props.customer.pno_brand} {props.customer.pno_type} {props.customer.pno_model} {props.customer.pno_serial}</p>
			<p>Last meeting: {props.customer.last_meeting || 'unknown'}</p>
			<hr />
		</div>
	)
}

export default Customer