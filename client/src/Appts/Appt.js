import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import ApptServicesList from './ApptServicesList'
import NewAppt from './NewAppt'

const Appt = (props) => {

	console.log('[appt props]', props);

	const appt = props.appts.find(apt => apt.id === +props.match.params.id)
	let apptMain = <div><h5>Appointment is loading...</h5></div>
	let renderApptServices = <div><h5>No services assigned</h5></div>

	if (appt) {
		apptMain = (
			<div>
				<h5>{appt.customer.firstname} {appt.customer.lastname}</h5>
				<p>Date:<strong>{appt.appt_date}</strong></p>
				<p>Start: <strong>{appt.appt_start}</strong></p>
				<p>End: <strong>{appt.appt_end}</strong></p>
				<p>Notes: <strong>{appt.appt_note}</strong></p>
			</div>
		)
	}

	if (appt && appt.services) {
		renderApptServices = (
			<ApptServicesList services={appt.services} />
		)
	}

	return (
		<div>
			<Table striped size="sm" className="CustomersList">
				<thead>
					<tr>
						<th>Customer</th>
						<th>Date</th>
						<th>Start</th>
						<th>End</th>
						<th>Note</th>
					</tr>
				</thead>
				<tbody>
					{apptMain}
				</tbody>
			</Table>
			{renderApptServices}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		appts: state.apt.appts
	}
}

export default connect(mapStateToProps)(Appt)
