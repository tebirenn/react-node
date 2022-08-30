// import * as types from '../actions/types';

// const initialState = {
//     users: []
// }


// export default function usersReducers(state=initialState, action) {
//     switch(action.type) {
//         case types.RECIEVED_REGISTER_USER: 
//             return {...state, users: action.payload};
//         case types.FAILURE_REGISTER_USER:
//             alert("Ведутся технические работы, по пробуйте позже!");
//             return state;
//         default:
//             return state;
//     }
// }


const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state=defaultState, action) {
    switch (action.type) {

        default:
            return defaultState;
    }
}