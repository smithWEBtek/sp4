import * as actionTypes from '../actions/actionTypes';

const initialState = {
	assets: [],
	loading: false,
	syncing: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE ASSET-----------------------------
		case actionTypes.CREATE_ASSET_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_ASSET_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_ASSET_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_ASSET:
			const newAsset = action.assetData
			return Object.assign({}, state, {
				assets: state.assets.concat(newAsset)
			})


		//-----FETCH ASSETS-----------------------------
		case actionTypes.FETCH_ASSETS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_ASSETS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_ASSETS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_ASSETS:
			const assets = action.assetsList
			return Object.assign({}, state, {
				assets: assets
			})

		//-----UPDATE ASSET-----------------------------
		case actionTypes.UPDATE_ASSET_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_ASSET_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_ASSET_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_ASSET:
			const updatedAssetsArray = state.assets.map(asset => asset.id === action.updatedAssetData.id ? action.updatedAssetData : asset)
			return Object.assign({}, state, { assets: updatedAssetsArray })


		//-----DELETE ASSET-----------------------------
		case actionTypes.DELETE_ASSET_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_ASSET_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_ASSET_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_ASSET:
			const updatedAssets = state.assets.filter(asset => asset.id !== action.id);
			return Object.assign({}, state, {
				assets: updatedAssets
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
