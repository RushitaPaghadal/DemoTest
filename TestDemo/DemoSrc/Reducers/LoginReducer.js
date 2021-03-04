export const SIGNIN_FETCH = 'SIGNIN_FETCH';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

const initialState = {
    isFetching: false,
    signin: '',
    fetchError: false,
    fetchErrorMessage: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_FETCH:
            return {
                ...state,
                isFetching: true,
                fetchError: false,
                fetchErrorMessage: ''
            }
        case SIGNIN_SUCCESS:
            return {
                isFetching: false,
                fetchError: false,
                fetchErrorMessage: '',
                signup: action.data
            }
        case SIGNIN_FAILURE:
            return {
                isFetching: false,
                fetchError: true,
                fetchErrorMessage: action.error,
                signup: ''
            }

        default:
            return state;
    }
}
