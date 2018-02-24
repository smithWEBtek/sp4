import React from 'react'
import { Well, Button } from 'reactstrap'
import { connect } from 'react-redux'
import './Appts.css'

const Appt = (props) => {

	const appt = props.appts.find(apt => apt.id === +props.match.params.id)
	let apptCard = <p>Appointment is loading...</p>
	if (appt) {
		apptCard = (
			<Well>
				<Well bsSize="small">
					{appt.customer.firstname} {appt.customer.lastname}<br />
					{appt.appt_date.split('T')[0].toString()}<br />
					{appt.appt_start.split('T')[1].slice(0, 5).toString()}<br />
					{appt.appt_note}<br />
					<Button>Download Appt</Button>
				</Well >
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
