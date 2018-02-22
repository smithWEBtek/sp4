import React from 'react'
import { Well, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import './Appts.css'

const Appt = (props) => {

	const appt = props.appts.find(apt => apt.id === +props.match.params.id)
	let apptCard = <p>Appointment is loading...</p>
	if (appt) {
		apptCard = (
			<Well>
				<Well bsSize="large">{appt.customer.firstname} {appt.customer.lastname}</Well>
				<Well bsSize="large">{appt.appt_date.split('T')[0].toString()}</Well>
				<Well bsSize="large" > {appt.appt_start.split('T')[1].slice(0, 5).toString()}</Well >
				<Well bsSize="large" > {appt.appt_note}</Well >
				<Button>Download Appt</Button>
			</Well >
		)
	}

	return (
		<div>{apptCard}</div>
	)
}

const mapStateToProps = state => {
	return {
		appts: state.apt.appts
	}
}

export default connect(mapStateToProps)(Appt)
