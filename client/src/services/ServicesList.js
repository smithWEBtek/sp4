import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import * as actions from '../store/actions/index'

class ServicesList extends Component {
	state = {
		customer_id: '',
		service_id: ''
	}

	componentDidMount() {
		this.props.onFetchServices()
	}


	render() {
		let renderServices = this.props.services.map((service, index) => {
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
				<Table striped size="sm" className="ServicesList">
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
}

const mapStateToProps = state => {
	return {
		services: state.svc.services
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateService: (id) => dispatch(actions.createService(id)),
		onFetchServices: (id) => dispatch(actions.fetchServices(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList)