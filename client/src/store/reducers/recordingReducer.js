import * as actionTypes from '../actions/actionTypes';

const initialState = {
	recordings: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----FETCH RECORDINGS-----------------------------
		case actionTypes.FETCH_RECORDINGS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_RECORDINGS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_RECORDINGS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_RECORDINGS:
			const recordings = action.recordingsList
			return Object.assign({}, state, {
				recordings: recordings
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
