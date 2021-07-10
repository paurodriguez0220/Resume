import { GOGGLESCONST } from "../../../constants";

const gogglesReducer = (state = 0, action) => {
    switch(action.type){
        case GOGGLESCONST.NAVIGATE_TO_OUTSIDE: return state
        default: return state
    }
}

export default gogglesReducer;