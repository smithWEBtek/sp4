import React from 'react'
import CustomerRow from './CustomerRow'
import { Table } from 'reactstrap'
// import './CustomersList.css'

const CustomersList = (props) => {

	let sortedCustomers = props.customers.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)
	let renderCustomers = sortedCustomers.map((customer, index) => {
		return (
			<CustomerRow
				key={index}
				customer={customer}
			/>
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
					</tr>
				</thead>
				<tbody>
					{renderCustomers}
				</tbody>
			</Table>
		</div>
	)
}

export default CustomersList
