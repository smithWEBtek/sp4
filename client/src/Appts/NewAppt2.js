import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Table } from 'reactstrap'
import * as actions from '../store/actions/index'
import './Appts.css'
import Available from '../Schedule/Available'

class NewAppt extends Component {
	state = {
		customer: '',
		customer_id: '',
		appt_date: '',
		appt_start: '',
		appt_end: '',
		appt_note: '',
		service_id: ''
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

		return (
			<div>
				<Available />
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
