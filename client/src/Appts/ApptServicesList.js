import React from 'react'
import { Table } from 'reactstrap'

const ApptServicesList = (props) => {

	let renderServices = props.services.map((service, index) => {
		return (
			<tr key={index}>
				<td>{service.title}</td>
				<td>{service.description}</td>
				<td>{service.cost}</td>
				<td>{service.duration}</td>
			</tr>
		)
	})

	return (
		<div>
			<Table striped size="sm" className="ApptServicesList">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Cost</th>
						<th>Duration</th>
					</tr>
				</thead>
				<tbody>
					{renderServices}
				</tbody>
			</Table>
		</div>
	)
}

export default ApptServicesList
