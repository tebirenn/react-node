import * as types from './types';

export function registerUser (data) {
    return {type: types.REGISTER_USER, data};
}
