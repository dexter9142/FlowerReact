import { createStore } from "redux";

const initialState = {
    user: undefined,
    isModal: false
}

function handleState(state = initialState, action: { type: any; user: any; }) {
switch (action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }

    default:
        return state;
}
}

const store = createStore(handleState)

export default store;