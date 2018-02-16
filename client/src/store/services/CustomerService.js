// const API_URL = process.env.API_URL || "https://music-studio.herokuapp.com/swt-sp4"
const API_URL = 'http://127.0.0.1:3001/api'

const CustomerService = {
	createCustomer(customer) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ customer: customer }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/customers`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][createCustomer] ERROR: ', error)
			})
	},
	fetchCustomers() {
		return fetch(`${API_URL}/customers`)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][fetchCustomers] ERROR: ', error)
			})
	},
	updateCustomer(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ customer: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/customers/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][updateCustomer] ERROR: ', error)
			})
	},
	deleteCustomer(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/customers/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][deleteCustomer] ERROR: ', error)
			})
	}
}

export default CustomerService;
