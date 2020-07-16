const initialState = {}

const blogReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'GET_BLOG': return {...state}
        case 'GET_BLOGS': return {...state}
        case 'DELETE_BLOG': return {...state}
        default: return state;
    }
}

export default blogReducer;