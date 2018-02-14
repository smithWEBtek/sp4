const API_URL = process.env.REACT_APP_API_URL || "https://music-studio.herokuapp.com/api"

const apiservice = {
	createStudent(student) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ student: student }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/students`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][createStudent] ERROR: ', error)
			})
	},
	fetchStudents() {
		return fetch(`${API_URL}/students`)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][fetchStudents] ERROR: ', error)
			})
	},
	updateStudent(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ student: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/students/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][updateStudent] ERROR: ', error)
			})
	},
	deleteStudent(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/students/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][deleteStudent] ERROR: ', error)
			})
	}
}

export default apiservice;
