import * as actionTypes from './actionTypes'
import CustomerService from '../services/CustomerService'

//-----CREATE CUSTOMER ACTIONS-----------------------------
export const createCustomerStart = () => {
	return { type: actionTypes.CREATE_CUSTOMER_START }
}
export const createCustomerSuccess = () => {
	return { type: actionTypes.CREATE_CUSTOMER_SUCCESS }
}
export const createCustomerFail = (error) => {
	return { type: actionTypes.CREATE_CUSTOMER_FAIL, error: error }
}
export const createCustomer = (data, history) => {
	return dispatch => {
		dispatch(createCustomerStart())
		CustomerService.createCustomer(data)
			.then(response => {
				dispatch({ type: actionTypes.CREATE_CUSTOMER, customerData: response })
				history.push(`/customers/${response.id}`)
				dispatch(createCustomerSuccess())
			})
			.catch(error => {
				dispatch(createCustomerFail(error))
			})
	}
}


//-----FETCH CUSTOMERS ACTIONS-----------------------------
export const fetchCustomersStart = () => {
	return { type: actionTypes.FETCH_CUSTOMERS_START }
}
export const fetchCustomersSuccess = (customers) => {
	return { type: actionTypes.FETCH_CUSTOMERS_SUCCESS, customersList: customers }
}
export const fetchCustomersFail = (error) => {
	return { type: actionTypes.FETCH_CUSTOMERS_FAIL, error: error }
}
export const fetchCustomers = () => {
	return dispatch => {
		dispatch(fetchCustomersStart())
		CustomerService.fetchCustomers()
			.then(response => {

				dispatch({ type: actionTypes.FETCH_CUSTOMERS, customersList: response })
				dispatch(fetchCustomersSuccess())
			})
			.catch(error => {
				dispatch(fetchCustomersFail(error))
			})
	}
}


//-----UPDATE CUSTOMER ACTIONS-----------------------------
export const updateCustomerStart = () => {
	return { type: actionTypes.UPDATE_CUSTOMER_START }
}
export const updateCustomerSuccess = () => {
	return { type: actionTypes.UPDATE_CUSTOMER_SUCCESS }
}
export const updateCustomerFail = (error) => {
	return { type: actionTypes.UPDATE_CUSTOMER_FAIL, error: error }
}
export const updateCustomer = (data, history) => {
	return dispatch => {
		dispatch(updateCustomerStart())
		CustomerService.updateCustomer(data)
			.then(response => {
				dispatch({ type: actionTypes.UPDATE_CUSTOMER, updatedCustomerData: response })
				history.goBack()
				dispatch(updateCustomerSuccess())
			})
			.catch(error => {
				dispatch(updateCustomerFail(error))
			})
	}
}

//-----DELETE CUSTOMER ACTIONS-----------------------------
export const deleteCustomerStart = () => {
	return { type: actionTypes.DELETE_CUSTOMER_START }
}
export const deleteCustomerSuccess = () => {
	return { type: actionTypes.DELETE_CUSTOMER_SUCCESS }
}
export const deleteCustomerFail = (error) => {
	return { type: actionTypes.DELETE_CUSTOMER_FAIL, error: error }
}
export const deleteCustomer = (id, history) => {
	return dispatch => {
		dispatch(deleteCustomerStart())
		CustomerService.deleteCustomer(id)
			.then(response => {
				dispatch({ type: actionTypes.DELETE_CUSTOMER, id: id })
				dispatch(deleteCustomerSuccess())
				history.push('/customers')
			})
			.catch(error => {
				dispatch(deleteCustomerFail(error))
			})
	}
}
