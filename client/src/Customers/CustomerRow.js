import React from 'react'
// import './CustomerRow.css'
import { Link, withRouter } from 'react-router-dom'
import Aux from '../hoc/Aux'

const CustomerRow = (props) => {

	return (
		<Aux>
			<tr>
				<th scope="row">{props.customer.id}</th>

				<td>
					<Link
						to={`/customers/${props.customer.id}`}
						style={{ marginRight: '5px' }}
						key={props.customer.id}>{props.customer.lastname}
					</Link>
				</td>
				<td>
					{props.customer.firstname}
				</td>
				<td>
					{props.customer.lastname}
				</td>
			</tr>
		</Aux>
	)
}

export default withRouter(CustomerRow)
