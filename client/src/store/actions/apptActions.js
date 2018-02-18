import * as actionTypes from './actionTypes'
import ApptService from '../services/ApptService'

//-----CREATE APPT ACTIONS-----------------------------
export const createApptStart = () => {
	return { type: actionTypes.CREATE_APPT_START }
}
export const createApptSuccess = () => {
	return { type: actionTypes.CREATE_APPT_SUCCESS }
}
export const createApptFail = (error) => {
	return { type: actionTypes.CREATE_APPT_FAIL, error: error }
}
export const createAppt = (data, history) => {
	console.log('[apptActions][createAppt] data: ', data)
	return dispatch => {
		dispatch(createApptStart())
		ApptService.createAppt(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_APPT, apptData: response })
				history.push(`/appts/${response.id}`)
				dispatch(createApptSuccess())
			})
			.catch(error => {
				dispatch(createApptFail(error))
			})
	}
}


//-----FETCH APPTS ACTIONS-----------------------------
export const fetchApptsStart = () => {
	return { type: actionTypes.FETCH_APPTS_START }
}
export const fetchApptsSuccess = (appts) => {
	return { type: actionTypes.FETCH_APPTS_SUCCESS, apptsList: appts }
}
export const fetchApptsFail = (error) => {
	return { type: actionTypes.FETCH_APPTS_FAIL, error: error }
}
export const fetchAppts = () => {
	return dispatch => {
		dispatch(fetchApptsStart())
		ApptService.fetchAppts()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_APPTS, apptsList: response })
				dispatch(fetchApptsSuccess())
			})
			.catch(error => {
				dispatch(fetchApptsFail(error))
			})
	}
}


//-----UPDATE APPT ACTIONS-----------------------------
export const updateApptStart = () => {
	return { type: actionTypes.UPDATE_APPT_START }
}
export const updateApptSuccess = () => {
	return { type: actionTypes.UPDATE_APPT_SUCCESS }
}
export const updateApptFail = (error) => {
	return { type: actionTypes.UPDATE_APPT_FAIL, error: error }
}
export const updateAppt = (data, history) => {
	return dispatch => {
		dispatch(updateApptStart())
		ApptService.updateAppt(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_APPT, updatedApptData: response })
				history.goBack()
				dispatch(updateApptSuccess())
			})
			.catch(error => {
				dispatch(updateApptFail(error))
			})
	}
}

//-----DELETE APPT ACTIONS-----------------------------
export const deleteApptStart = () => {
	return { type: actionTypes.DELETE_APPT_START }
}
export const deleteApptSuccess = () => {
	return { type: actionTypes.DELETE_APPT_SUCCESS }
}
export const deleteApptFail = (error) => {
	return { type: actionTypes.DELETE_APPT_FAIL, error: error }
}
export const deleteAppt = (id, history) => {
	return dispatch => {
		dispatch(deleteApptStart())
		ApptService.deleteAppt(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_APPT, id: id })
				dispatch(deleteApptSuccess())
				history.push('/appts')
			})
			.catch(error => {
				dispatch(deleteApptFail(error))
			})
	}
}
