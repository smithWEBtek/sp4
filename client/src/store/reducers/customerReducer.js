import * as actionTypes from '../actions/actionTypes';

const initialState = {
	customers: [],
	loading: false,
	error: false,
	message: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		//-----CREATE CUSTOMER-----------------------------
		case actionTypes.CREATE_CUSTOMER_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.CREATE_CUSTOMER_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.CREATE_CUSTOMER_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.CREATE_CUSTOMER:
			const newCustomer = action.customerData
			return Object.assign({}, state, {
				customers: state.customers.concat(newCustomer)
			})


		//-----FETCH CUSTOMERS-----------------------------
		case actionTypes.FETCH_CUSTOMERS_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.FETCH_CUSTOMERS_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.FETCH_CUSTOMERS_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.FETCH_CUSTOMERS:
			const customers = action.customersList
			return Object.assign({}, state, {
				customers: customers
			})


		//-----UPDATE CUSTOMER-----------------------------
		case actionTypes.UPDATE_CUSTOMER_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.UPDATE_CUSTOMER_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.UPDATE_CUSTOMER_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.UPDATE_CUSTOMER:
			//const customerData = action.updatedCustomerData
			//debugger
			//const customerIndex = state.customers.findIndex(customer => customer.id === customerData.id);
			// const stateTemp = {
			//   ...state,
			//   customers: [
			//     ...state.customers.slice(0, customerIndex),
			//     ...state.customers.slice(customerIndex + 1, state.customers.length)
			//   ]
			// };
			const updatedCustomersArray = state.customers.map(customer => customer.id == action.updatedCustomerData.id ? action.updatedCustomerData : customer)
			return Object.assign({}, state, { customers: updatedCustomersArray })


		//-----DELETE CUSTOMER-----------------------------
		case actionTypes.DELETE_CUSTOMER_START:
			return Object.assign({}, state, { loading: true })

		case actionTypes.DELETE_CUSTOMER_SUCCESS:
			return Object.assign({}, state, { loading: false })

		case actionTypes.DELETE_CUSTOMER_FAIL:
			return Object.assign({}, state, {
				error: action.error,
				loading: false,
				message: action.type
			})

		case actionTypes.DELETE_CUSTOMER:
			const updatedCustomers = state.customers.filter(customer => customer.id !== action.id);
			return Object.assign({}, state, {
				customers: updatedCustomers
			})

		//----- DEFAULT --------------------------------
		default:
			return state;
	}
}

export default reducer;
