// const CLOUD_API_URL = process.env.CLOUD_API_URL
// const CLOUD_API_URL = 'https://777466575657829:g7KcOFtLuC_0ZK5HMKNl3c48AJI@api.cloudinary.com/v1_1/smithwebtek'

const CLOUD_API_URL = 'https://res.cloudinary.com/smithwebtek/image/list/album.json'

const AssetService = {
	createAsset(asset) {
		const request = {
			method: 'POST',
			body: JSON.stringify({ asset: asset }),
			headers: { 'Content-Type': 'application/json' }
		}
		return fetch(`${CLOUD_API_URL}/assets`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][createAsset] ERROR: ', error)
			})
	},
	fetchAssets() {
		return fetch(`${CLOUD_API_URL}`)
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
		return fetch(`${CLOUD_API_URL}/assets/${data.id}`, request)
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
		return fetch(`${CLOUD_API_URL}/assets/${id}`, request)
			.then(response => response.json())
			.catch(error => {
				console.log('[apiservice][deleteAsset] ERROR: ', error)
			})
	}
}

export default AssetService;
