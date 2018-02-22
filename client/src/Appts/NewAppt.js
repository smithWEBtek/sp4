import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import './Appts.css'

class NewAppt extends Component {
	state = {
		customer: '',
		customer_id: '',
		appt_date: '',
		appt_start: '',
		appt_end: '',
		appt_note: '',
		service_id: '',
		service: '',
		appt_times: [
			'08:00 AM',
			'08:30 AM',
			'09:00 AM',
			'09:30 AM',
			'10:00 AM',
			'10:30 AM',
			'11:00 AM',
			'01:00 PM',
			'01:30 PM',
			'02:00 PM',
			'02:30 PM',
			'03:00 PM',
			'03:30 PM',
			'04:00 PM',
			'04:30 PM'
		]
	}

	clearState() {
		this.setState({
			customer: '',
			customer_id: '',
			appt_date: '',
			appt_start: '',
			appt_end: '',
			appt_note: 'new appointment',
			service_id: ''
		})
	}

	componentDidMount() {
		this.props.onFetchServices()
		this.props.onFetchCustomers()
		this.clearState()
	}

	addService = (id) => {
		this.setState({
			service_id: id
		})
	}

	handleCustomerSelect = (event) => {
		this.setState({
			customer_id: this.props.customers.find(customer => customer.lastname === event.target.value).id,
			customer: this.props.customers.find(customer => customer.lastname === event.target.value)
		})
	}

	handleApptTimeSelect = (event) => {
		this.setState({
			appt_start: event.target.value
		})
	}

	handleServiceSelect = (event) => {
		this.setState({
			service: event.target.value
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
			appt_note: this.state.appt_note
			// service_id: this.state.service_id
		}
		this.props.onCreateAppt(newApptData, history)
		this.clearState()
	}

	render() {

		const select_customer = this.props.customers.map(customer => {
			return <option value={customer.lastname} id={customer.id} key={customer.id}>{customer.lastname}</option>
		})

		const select_appt_time = this.state.appt_times.map(appt => {
			return <option value={appt} id={appt.id} key={appt.id} >{appt}</option>
		})

		const select_service = this.props.services.map(svc => {
			return <option value={svc.title} id={svc.id} key={svc.months_since_last_svc}>{svc.title}:  {svc.months_since_last_svc} months since last svc:  estimate ${svc.cost}</option>
		})

		return (
			<div className="NewAppt" >
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
						<label>Select Date</label>
						<input
							type="date"
							value={this.state.appt_date}
							onChange={(event) => this.setState({ appt_date: event.target.value })}
							placeholder="date"
							required />
					</p>
					<p><label>Select Time</label>
						<select
							value={this.state.appt_start}
							onChange={(event) => this.handleApptTimeSelect(event)}>
							{select_appt_time}
						</select>
					</p>
					<p><label>Select Service</label>
						<select
							value={this.state.service}
							onChange={(event) => this.handleServiceSelect(event)}>
							{select_service}
						</select>
					</p>
					<p><label>Note(optional)</label>
						<input
							type="textarea"
							value={this.state.appt_note}
							onChange={(event) => this.setState({ appt_note: event.target.value })}
							placeholder="Note" />
					</p>
					<button id='scheduleAppt'>Schedule Appointment</button>
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
		onFetchServices: () => dispatch(actions.fetchServices()),
		onFetchCustomers: () => dispatch(actions.fetchCustomers())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAppt)
