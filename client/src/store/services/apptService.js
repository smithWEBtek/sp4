const API_URL = 'http://127.0.0.1:3001/api' || 'https://swt-sp4.herokuapp.com/api'
// const API_URL = 'https://swt-sp4.herokuapp.com/api'

const ApptService = {
	createAppt(appt) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ appt: appt }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/appts`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][createAppt] ERROR: ', error)
			})
	},
	fetchAppts() {
		return fetch(`${API_URL}/appts`)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][fetchAppts] ERROR: ', error)
			})
	},
	updateAppt(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ appt: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/appts/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][updateAppt] ERROR: ', error)
			})
	},
	deleteAppt(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/appts/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][deleteAppt] ERROR: ', error)
			})
	}
}

export default ApptService;
