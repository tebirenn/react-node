import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'
import {BASE_URL} from '../../config/baseurl';

function* registerUser(data){
    try{
        const user = yield axios.post(`${BASE_URL}/api/user` , data).then(res => res.data);
        yield put({type:types.RECIEVED_REGISTER_USER , payload : user})
    }catch(e){
        yield put({type: types.FAILURE_REGISTER_USER , errors: e})
    }
}

export function* usersSagas(){
    yield all([
        yield takeLatest(types.REGISTER_USER, registerUser),
    ])
}