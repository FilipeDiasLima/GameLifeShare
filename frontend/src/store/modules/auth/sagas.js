import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSucess, signFailure } from './actions';

import api from '../../../services/api';

export function* signIn({ payload }){
    console.log(payload);
    try{
        const { username, password } = payload;

        const response =  yield call(api.post, `login`, {
            username,
            password,
        });

        const { token, user } = response.data;
        yield put(signInSucess(token, user));
    }catch(err){
        yield put(signFailure());
        alert('Falha no login');
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);