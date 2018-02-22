import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import './Appts.css'

const Appt = (props) => {

	const appt = props.appts.find(apt => apt.id === +props.match.params.id)
	let apptMain = <tr><td>Appointment is loading...</td></tr>


	if (appt) {

		apptMain = (
			<tr className="Appt">
				<td>{appt.customer.firstname} {appt.customer.lastname}</td>
				<td colSpan="2"><strong>{appt.appt_date.split('T')[0]}</strong></td>
				<td><strong>{appt.appt_start.split('T')[1].slice(0, 5)}</strong></td>
				<td><strong>{appt.appt_note}</strong></td>
			</tr>
		)
	}

	return (
		<div>
			{/* <Table striped size="sm" className="CustomersList"> */}
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>Customer</th>
						<th>Date</th>
						<th>Start</th>
						<th>Note</th>
					</tr>
				</thead>
				<tbody>
					{apptMain}
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
