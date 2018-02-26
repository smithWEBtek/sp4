// const API_URL = 'http://127.0.0.1:3001/api' || 'https://swt-sp4.herokuapp.com/api'
const API_URL = 'https://swt-sp4.herokuapp.com/api'

const RecordingService = {
	fetchRecordings() {
		return fetch(`${API_URL}/recordings`)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][fetchRecordings] ERROR: ', error)
			})
	}
}

export default RecordingService