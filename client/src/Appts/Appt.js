import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import ApptServicesList from './ApptServicesList'
import Aux from '../hoc/Aux'

const Appt = (props) => {

	const appt = props.appts.find(apt => apt.id === +props.match.params.id)
	let apptMain = <tr><td>Appointment is loading...</td></tr>
	let renderApptServices = <h5>No services assigned</h5>

	if (appt) {
		apptMain = (
			<tr>
				<td>{appt.customer.firstname} {appt.customer.lastname}</td>
				<td>Date:<strong>{appt.appt_date}</strong></td>
				<td>Start: <strong>{appt.appt_start}</strong></td>
				<td>End: <strong>{appt.appt_end}</strong></td>
				<td>Notes: <strong>{appt.appt_note}</strong></td>
			</tr>
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
