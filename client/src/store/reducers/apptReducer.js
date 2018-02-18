import * as actionTypes from '../actions/actionTypes';

const initialState = {
	appts: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE APPT-----------------------------
		case actionTypes.CREATE_APPT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_APPT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_APPT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_APPT:
			const newAppt = action.apptData
			return Object.assign({}, state, {
				appts: state.appts.concat(newAppt)
			})


		//-----FETCH APPTS-----------------------------
		case actionTypes.FETCH_APPTS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_APPTS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_APPTS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_APPTS:
			const appts = action.apptsList
			return Object.assign({}, state, {
				appts: appts
			})


		//-----UPDATE APPT-----------------------------
		case actionTypes.UPDATE_APPT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_APPT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_APPT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_APPT:
			const updatedApptsArray = state.appts.map(appt => appt.id === action.updatedApptData.id ? action.updatedApptData : appt)
			return Object.assign({}, state, { appts: updatedApptsArray })


		//-----DELETE APPT-----------------------------
		case actionTypes.DELETE_APPT_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_APPT_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_APPT_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_APPT:
			const updatedAppts = state.appts.filter(appt => appt.id !== action.id);
			return Object.assign({}, state, {
				appts: updatedAppts
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
