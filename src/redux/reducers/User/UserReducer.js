import { USERCONST } from "../../../constants";

const userDetails = {
    Firstname: 'Paulo',
    Lastname: 'Rodriguez'
}

const userReducer = (state = userDetails, action) => {
    switch(action.type){
        case USERCONST.SET_USER_DETAILS: return state;
        case USERCONST.GET_USER_DETAILS: return state;
        default: return state
    }
}

export default userReducer;