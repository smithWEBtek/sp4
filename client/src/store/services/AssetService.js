const API_URL = 'https://api.cloudinary.com/v1_1/smithwebtek'

const AssetService = {
	createAsset(asset) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ asset: asset }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/assets`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][createAsset] ERROR: ', error)
			})
	},
	fetchAssets() {
		return fetch(`${API_URL}/resources/image`)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][fetchAssets] ERROR: ', error)
			})
	},
	updateAsset(data) {
		const request = {
			method: 'PATCH',
			body: JSON.stringify({ asset: data }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/assets/${data.id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][updateAsset] ERROR: ', error)
			})
	},
	deleteAsset(id) {
		const request = {
			method: 'DELETE',
			body: JSON.stringify({ id: id }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${API_URL}/assets/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][deleteAsset] ERROR: ', error)
			})
	}
}

export default AssetService;
