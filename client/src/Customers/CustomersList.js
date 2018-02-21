import React from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

// import './CustomersList.css'

const CustomersList = (props) => {

	let sortedCustomers = props.customers.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)
	let list = sortedCustomers.map((customer, index) => {
		return (
			<tr>
				<th scope="row">{customer.id}</th>
				<td>
					<Link
						to={`/customers/${customer.id}`}
						style={{ marginRight: '5px' }}
						key={customer.id}>{customer.lastname}
					</Link>
				</td>
				<td>
					{customer.firstname}
				</td>
				<td>
					{customer.lastname}
				</td>
				<td>
					{customer.city}
				</td>
				<td>
					{customer.state}
				</td>
				<td>
					{customer.brand}
				</td>
			</tr>
		)
	})

	return (
		<div>
			<Table striped size="sm" className="CustomersList">
				<thead>
					<tr>
						<th>ID</th>
						<th>Last</th>
						<th>First</th>
						<th>City</th>
						<th>State</th>
						<th>Brand</th>
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
