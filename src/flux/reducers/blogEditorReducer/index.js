const initialState = {
    visible: false
}

const blogReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_VISIBILITY': return {...state,visible: action.payload};
        default: return state;
    }
}

export default blogReducer;