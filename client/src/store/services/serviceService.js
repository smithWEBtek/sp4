// const API_URL = 'http://127.0.0.1:3001/api' || 'https://swt-sp4.herokuapp.com/api'
const API_URL = 'http://127.0.0.1:3001/api'
// const API_URL = 'https://swt-sp4.herokuapp.com/api'

const ServiceService = {
	createService(service) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ service: service }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/services`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][createService] ERROR: ', error)
			})
	},
	fetchServices() {
		return fetch(`${API_URL}/services`)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][fetchServices] ERROR: ', error)
			})
	},
	updateService(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ service: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/services/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[ServiceService][updateService] ERROR: ', error)
			})
	},
	deleteService(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/services/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][deleteService] ERROR: ', error)
			})
	}
}

export default ServiceService;
