import * as actionTypes from './actionTypes'
import AssetService from '../services/AssetService'

//-----CREATE ASSET ACTIONS-----------------------------
export const createAssetStart = () => {
	return { type: actionTypes.CREATE_ASSET_START }
}
export const createAssetSuccess = () => {
	return { type: actionTypes.CREATE_ASSET_SUCCESS }
}
export const createAssetFail = (error) => {
	return { type: actionTypes.CREATE_ASSET_FAIL, error: error }
}
export const createAsset = (data, history) => {
	console.log('[assetActions][createAsset] data: ', data)
	return dispatch => {
		dispatch(createAssetStart())
		AssetService.createAsset(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_ASSET, assetData: response })
				history.push(`/assets/${response.id}`)
				dispatch(createAssetSuccess())
			})
			.catch(error => {
				dispatch(createAssetFail(error))
			})
	}
}


//-----FETCH ASSETS ACTIONS-----------------------------
export const fetchAssetsStart = () => {
	return { type: actionTypes.FETCH_ASSETS_START }
}
export const fetchAssetsSuccess = (assets) => {
	return { type: actionTypes.FETCH_ASSETS_SUCCESS, assetsList: assets }
}
export const fetchAssetsFail = (error) => {
	return { type: actionTypes.FETCH_ASSETS_FAIL, error: error }
}

// export const syncDatabaseAssets = (assets) => {
// 	return { type: actionTypes.SYNC_DB_ASSETS, assetsList: assets }
// }

export const fetchAssets = () => {
	return dispatch => {
		dispatch(fetchAssetsStart())
		AssetService.fetchAssets()
			.then(response => {
				dispatch({ type: actionTypes.FETCH_ASSETS, assetsList: response.resources })
				// dispatch(syncDatabaseAssets())
				dispatch(fetchAssetsSuccess())
			})
			.catch(error => {
				dispatch(fetchAssetsFail(error))
			})
	}
}


//-----UPDATE ASSET ACTIONS-----------------------------
export const updateAssetStart = () => {
	return { type: actionTypes.UPDATE_ASSET_START }
}
export const updateAssetSuccess = () => {
	return { type: actionTypes.UPDATE_ASSET_SUCCESS }
}
export const updateAssetFail = (error) => {
	return { type: actionTypes.UPDATE_ASSET_FAIL, error: error }
}
export const updateAsset = (data, history) => {
	return dispatch => {
		dispatch(updateAssetStart())
		AssetService.updateAsset(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_ASSET, updatedAssetData: response })
				history.goBack()
				dispatch(updateAssetSuccess())
			})
			.catch(error => {
				dispatch(updateAssetFail(error))
			})
	}
}

//-----DELETE ASSET ACTIONS-----------------------------
export const deleteAssetStart = () => {
	return { type: actionTypes.DELETE_ASSET_START }
}
export const deleteAssetSuccess = () => {
	return { type: actionTypes.DELETE_ASSET_SUCCESS }
}
export const deleteAssetFail = (error) => {
	return { type: actionTypes.DELETE_ASSET_FAIL, error: error }
}
export const deleteAsset = (id, history) => {
	return dispatch => {
		dispatch(deleteAssetStart())
		AssetService.deleteAsset(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_ASSET, id: id })
				dispatch(deleteAssetSuccess())
				history.push('/assets')
			})
			.catch(error => {
				dispatch(deleteAssetFail(error))
			})
	}
}
