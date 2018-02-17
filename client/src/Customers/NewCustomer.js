import React, { Component } from 'react'

class NewCustomer extends Component {
	state = {
		pno_types: [],
		firstname: '',
		lastname: '',
		email: '',
		phone1: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		pno_brand: '',
		pno_type: '',
		pno_model: '',
		pno_serial: '',
		about: ''
	}

	clearState() {
		this.setState({
			firstname: '',
			lastname: '',
			email: '',
			phone1: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			about: ''
		})
	}

	componentDidMount() {
		this.clearState()
	}


	// handlePnoBrandSelect = (brand) => {
	// 	this.setState({
	// 		pno_brand: brand
	// 	})
	// }

	handlePnoTypeSelect = (e) => {
		console.log(e.target.value)
		this.setState({
			pno_type: e.target.value
		})
	}

	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		const data = this.state
		this.props.createCustomer(data)
		this.clearState()
	}

	render() {
		// const pno_brand_options = this.props.brands.map((brand, index) => {
		// 	return <option value={brand} id={index} key={index}>{brand}</option>
		// })

		const pno_type_options = (
			[
				<option value='Spinet upright' id='1' key='1'>Spinet upright</option>,
				<option value='Console upright' id='2' key='2'>Console upright</option>,
				<option value='Studio upright' id='3' key='3'>Studio upright</option>,
				<option value='Baby Grand' id='4' key='4'>Baby Grand</option>,
				<option value='Grand' id='5' key='5'>Grand</option>
			]
		)

		return (
			<div><h3>New Customer Form</h3>
				<hr />
				<hr />
				<form>

					<p>About you: </p>
					<p><input
						value={this.state.firstname}
						name='firstname'
						placeholder='firstname'
						required
						onChange={(e) => this.handleOnChange(e)} />
						<input
							value={this.state.lastname}
							name='lastname'
							placeholder='lastname'
							required
							onChange={(e) => this.handleOnChange(e)} /></p>
					<p><input
						value={this.state.email}
						name='email'
						placeholder='email'
						required
						onChange={(e) => this.handleOnChange(e)} />
						<input
							value={this.state.phone1}
							name='phone1'
							placeholder='phone1'
							required
							onChange={(e) => this.handleOnChange(e)} /></p>
					<p><input
						value={this.state.address}
						name='address'
						placeholder='address'
						required
						onChange={(e) => this.handleOnChange(e)} />
						<input
							value={this.state.city}
							name='city'
							placeholder='city'
							required
							onChange={(e) => this.handleOnChange(e)} /></p>
					<p><input
						value={this.state.state}
						name='state'
						placeholder='state'
						required
						onChange={(e) => this.handleOnChange(e)} />
						<input
							value={this.state.zip}
							name='zip'
							placeholder='zip'
							required
							onChange={(e) => this.handleOnChange(e)} /></p>

					<p>About your piano:</p>
					<p><input
						value={this.state.pno_brand}
						name='pno_brand'
						placeholder='brand'
						required
						onChange={(e) => this.handleOnChange(e)} />

						<select
							value={this.state.pno_type}
							onChange={(event) => this.handlePnoTypeSelect(event)}>
							{pno_type_options}
						</select>
					</p>

					<p><input
						value={this.state.pno_model}
						name='pno_model'
						placeholder='piano model(optional)'
						required
						onChange={(e) => this.handleOnChange(e)} />
						<input
							value={this.state.pno_serial}
							name='pno_serial'
							placeholder='piano serial(optional)'
							required
							onChange={(e) => this.handleOnChange(e)} /></p>
					<p><input
						type='textarea' className="form-control" rows="6"
						width='150'
						value={this.state.about}
						name='about'
						placeholder='about'
						required
						onChange={(e) => this.handleOnChange(e)} /></p>
					<p>
						<button
							type='button'
							onClick={() => this.handleSubmit()}>Submit</button></p>
				</form>
				<hr />
				<hr />
			</div >
		)
	}
}

export default NewCustomer