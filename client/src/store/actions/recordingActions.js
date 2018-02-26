import * as actionTypes from './actionTypes'
import RecordingService from '../services/RecordingService'


//-----FETCH RECORDINGS ACTIONS-----------------------------
export const fetchRecordingsStart = () => {
	return { type: actionTypes.FETCH_RECORDINGS_START }
}
export const fetchRecordingsSuccess = (recordings) => {
	return { type: actionTypes.FETCH_RECORDINGS_SUCCESS, recordingsList: recordings }
}
export const fetchRecordingsFail = (error) => {
	return { type: actionTypes.FETCH_RECORDINGS_FAIL, error: error }
}

export const fetchRecordings = () => {
	return dispatch => {
		dispatch(fetchRecordingsStart())
		RecordingService.fetchRecordings()
			.then(response => {
				dispatch({ type: actionTypes.FETCH_RECORDINGS, recordingsList: response })
				dispatch(fetchRecordingsSuccess())
			})
			.catch(error => {
				dispatch(fetchRecordingsFail(error))
			})
	}
}
