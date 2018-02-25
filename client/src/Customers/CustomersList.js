import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Aux from '../hoc/Aux'

// import './CustomersList.css'

const CustomersList = (props) => {

	let sortedCustomers = props.customers.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)
	let list = sortedCustomers.map((customer, index) => {
		return (
			<Aux key={index}>
				<tr>
					<th scope="row">{customer.id}</th>
					<td>
						<Link
							to={`/customers/${customer.id}`}
							style={{ marginRight: '5px' }}
							key={customer.id}>{customer.fullname}
						</Link>
					</td>
					<td>
						{customer.city}
					</td>
					<td>
						{customer.state}
					</td>
					<td>
						{customer.email}
					</td>
					<td>
						{customer.last_meeting}
					</td>
					<td>
						{customer.last_reminder}
					</td>
					<td>
						{customer.about}
					</td>
				</tr>
			</Aux>
		)
	})

	return (
		<div>
			<Table striped size="sm" className="CustomersList">
				<thead>
					<tr>
						<th>Fullname</th>
						<th>City</th>
						<th>State</th>
						<th>Meeting</th>
						<th>Reminder</th>
						<th>About</th>
					</tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</Table>
		</div>
	)
}

export default CustomersList
