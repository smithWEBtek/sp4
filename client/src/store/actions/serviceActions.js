import * as actionTypes from './actionTypes'
import ServiceService from '../services/ServiceService'

//-----CREATE SERVICE ACTIONS-----------------------------
export const createServiceStart = () => {
	return { type: actionTypes.CREATE_SERVICE_START }
}
export const createServiceSuccess = () => {
	return { type: actionTypes.CREATE_SERVICE_SUCCESS }
}
export const createServiceFail = (error) => {
	return { type: actionTypes.CREATE_SERVICE_FAIL, error: error }
}
export const createService = (data, history) => {
	console.log('[serviceActions][createService] data: ', data)
	return dispatch => {
		dispatch(createServiceStart())
		ServiceService.createService(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_SERVICE, serviceData: response })
				history.push(`/services/${response.id}`)
				dispatch(createServiceSuccess())
			})
			.catch(error => {
				dispatch(createServiceFail(error))
			})
	}
}


//-----FETCH SERVICES ACTIONS-----------------------------
export const fetchServicesStart = () => {
	return { type: actionTypes.FETCH_SERVICES_START }
}
export const fetchServicesSuccess = (services) => {
	return { type: actionTypes.FETCH_SERVICES_SUCCESS, servicesList: services }
}
export const fetchServicesFail = (error) => {
	return { type: actionTypes.FETCH_SERVICES_FAIL, error: error }
}
export const fetchServices = () => {
	return dispatch => {
		dispatch(fetchServicesStart())
		ServiceService.fetchServices()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_SERVICES, servicesList: response })
				dispatch(fetchServicesSuccess())
			})
			.catch(error => {
				dispatch(fetchServicesFail(error))
			})
	}
}


//-----UPDATE SERVICE ACTIONS-----------------------------
export const updateServiceStart = () => {
	return { type: actionTypes.UPDATE_SERVICE_START }
}
export const updateServiceSuccess = () => {
	return { type: actionTypes.UPDATE_SERVICE_SUCCESS }
}
export const updateServiceFail = (error) => {
	return { type: actionTypes.UPDATE_SERVICE_FAIL, error: error }
}
export const updateService = (data, history) => {
	return dispatch => {
		dispatch(updateServiceStart())
		ServiceService.updateService(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_SERVICE, updatedServiceData: response })
				history.goBack()
				dispatch(updateServiceSuccess())
			})
			.catch(error => {
				dispatch(updateServiceFail(error))
			})
	}
}

//-----DELETE SERVICE ACTIONS-----------------------------
export const deleteServiceStart = () => {
	return { type: actionTypes.DELETE_SERVICE_START }
}
export const deleteServiceSuccess = () => {
	return { type: actionTypes.DELETE_SERVICE_SUCCESS }
}
export const deleteServiceFail = (error) => {
	return { type: actionTypes.DELETE_SERVICE_FAIL, error: error }
}
export const deleteService = (id, history) => {
	return dispatch => {
		dispatch(deleteServiceStart())
		ServiceService.deleteService(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_SERVICE, id: id })
				dispatch(deleteServiceSuccess())
				history.push('/services')
			})
			.catch(error => {
				dispatch(deleteServiceFail(error))
			})
	}
}
