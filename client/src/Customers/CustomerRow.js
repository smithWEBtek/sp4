import React from 'react'
// import './CustomerRow.css'
import { Route, Link, withRouter } from 'react-router-dom'
import Aux from '../hoc/Aux'
import Customer from './Customer'

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
			<Route exact path='/customers/:id' component={Customer} />
		</Aux>
	)
}

export default withRouter(CustomerRow)
