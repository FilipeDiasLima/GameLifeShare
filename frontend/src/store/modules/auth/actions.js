export function signInRequest(username, password){
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { username, password },
    };
}

export function signInSucess(token, user){
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: { token, user },
    }
}

export function signFailure(){
    return {    
        type: '@auth/SIGN_FAILURE',
    }
}
