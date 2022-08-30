import {all} from 'redux-saga/effects';

import { usersSagas } from './userSagas';

export default function* rootSaga(){
    yield all([
        usersSagas(),
    ])
}