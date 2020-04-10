import produce from 'immer';

const INITIAL_STATE = {
    user: null
};

export default function user(state = INITIAL_STATE, action){
    switch(action.type){
        case '@auth/SIGN_IN_SUCESS':
            return produce(state, draft => {
                draft.user = action.payload.user;
                draft.signed = true;
            });
        default:
            return state;
    }
}