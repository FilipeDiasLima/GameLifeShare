import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case '@auth/SIGN_IN_REQUES': {
                draft.loading = true;
                break;
            }
            case '@auth/SIGN_IN_SUCESS': {
                draft.user = action.payload.user;
                draft.signed = true;
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_IN_FAILURE':{
                draft.loading = false;
            }
            default:
        }
    });
}