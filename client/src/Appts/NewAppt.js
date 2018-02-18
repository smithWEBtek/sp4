import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
// import ServicesList from '../Services/ServicesList'

class NewAppt extends Component {
	state = {
		customer: '',
		customer_id: '',
		appt_date: '',
		appt_start: '',
		appt_end: '',
		appt_note: '',
		services: []
	}

	clearState() {
		this.setState({
			customer: '',
			customer_id: '',
			appt_date: '',
			appt_start: '',
			appt_end: '',
			appt_note: '',
			services_ids: []
		})
	}

	componentDidMount() {
		// this.onFetchServices()
		this.clearState()
	}

	addService = (id) => {
		this.setState({
			services_ids: [...this.state.services_ids].concat(id)
		})
	}

	handleCustomerSelect = (event) => {
		this.setState({
			customer: this.props.customers.find(customer => customer.lastname === event.target.value)
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { history } = this.props
		const newApptData = {
			customer_id: this.state.customer_id,
			appt_date: this.state.appt_date,
			appt_start: this.state.appt_start,
			appt_end: this.state.appt_end,
			appt_note: this.state.appt_note,
			services_ids: this.state.services_ids
		}
		this.props.onCreateAppt(newApptData, history)
		this.clearState()
	}

	render() {
		const select_customer = this.props.customers.map((customer, index) => {
			return <option value={customer.lastname} id={index} key={index}>{customer.lastname}</option>
		})

		return (
			<div>
				<p>Complete form and click 'Schedule Appointment'</p>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<p>
						<label>Select Customer</label>
						<select
							value={this.state.customer.lastname}
							onChange={(event) => this.handleCustomerSelect(event)}>
							{select_customer}
						</select>
					</p>
					<p>
						<label>Appointment Date</label>
						<input
							type="date"
							value={this.state.appt_date}
							onChange={(event) => this.setState({ appt_date: event.target.value })}
							placeholder="date"
							required />
					</p>
					<p><label>Start time</label>
						<input
							type="time"
							value={this.state.appt_start}
							onChange={(event) => this.setState({ appt_start: event.target.value })}
							placeholder="start"
							required />
					</p>
					<p><label>End time</label>
						<input
							type="time"
							value={this.state.appt_end}
							onChange={(event) => this.setState({ appt_end: event.target.value })}
							placeholder="start"
							required />
					</p>
					<label>Choose services:</label>
					{/* <ServicesList addService={(id) => this.addService(id)} /> */}

					<button>Schedule Appointment</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		services: state.svc.services,
		appts: state.apt.appts,
		customers: state.cst.customers
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCreateAppt: (data, history) => dispatch(actions.createAppt(data, history)),
		onFetchServices: () => dispatch(actions.fetchServices())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAppt)
