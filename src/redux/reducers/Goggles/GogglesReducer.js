
const gogglesReducer = (state = 0, action) => {
    switch(action.type){
        case 'Test': return state + 1;
        default: return state
    }
}

export default gogglesReducer;