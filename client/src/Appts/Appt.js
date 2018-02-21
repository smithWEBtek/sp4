import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import ApptServicesList from './ApptServicesList'
import Aux from '../hoc/Aux'
import './Appts.css'

const Appt = (props) => {

	const appt = props.appts.find(apt => apt.id === +props.match.params.id)
	let apptMain = <tr><td>Appointment is loading...</td></tr>
	let renderApptServices = <h5>No services assigned</h5>

	if (appt) {
		apptMain = (
			<tr className="Appt">
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
			<tr><td><ApptServicesList services={appt.services} /></td></tr>
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
					{renderApptServices}
				</tbody>
			</Table>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		appts: state.apt.appts
	}
}

export default connect(mapStateToProps)(Appt)
