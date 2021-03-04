import { SIGNIN_FAILURE, SIGNIN_FETCH, SIGNIN_SUCCESS } from '../Reducers/LoginReducer';


function signupFatch() {
    return {
        type: SIGNIN_FETCH
    }
}

function signupSuccess(data) {
    return {
        type: SIGNIN_SUCCESS,
        data,
    }
}

function signupFailure(data) {
    return {
        type: SIGNIN_FAILURE,
        error: data
    }
}



export function Signin(Id, Password) {
    console.log("IDDDD", Id, Password);
    return (dispatch) => {
        dispatch(signupFatch());
        var data = {
            Id : Id, 
            Password : Password
        }
        dispatch(signupSuccess(data));
        
    }
}
