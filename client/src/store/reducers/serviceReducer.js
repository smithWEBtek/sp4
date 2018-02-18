import * as actionTypes from '../actions/actionTypes';

const initialState = {
	services: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE SERVICE-----------------------------
		case actionTypes.CREATE_SERVICE_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_SERVICE_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_SERVICE_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_SERVICE:
			const newService = action.serviceData
			return Object.assign({}, state, {
				services: state.services.concat(newService)
			})


		//-----FETCH SERVICES-----------------------------
		case actionTypes.FETCH_SERVICES_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_SERVICES_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_SERVICES_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_SERVICES:
			const services = action.servicesList
			return Object.assign({}, state, {
				services: services
			})


		//-----UPDATE SERVICE-----------------------------
		case actionTypes.UPDATE_SERVICE_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_SERVICE_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_SERVICE_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_SERVICE:
			const updatedServicesArray = state.services.map(service => service.id === action.updatedServiceData.id ? action.updatedServiceData : service)
			return Object.assign({}, state, { services: updatedServicesArray })


		//-----DELETE SERVICE-----------------------------
		case actionTypes.DELETE_SERVICE_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_SERVICE_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_SERVICE_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_SERVICE:
			const updatedServices = state.services.filter(service => service.id !== action.id);
			return Object.assign({}, state, {
				services: updatedServices
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
