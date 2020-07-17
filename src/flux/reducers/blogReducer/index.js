const initialState = {
    blogs: [],
    loading: false
}

const blogReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'ADD_BLOG': return {...state,blogs: [action.payload,...state.blogs]};
        case 'GET_BLOGS': return {...state,blogs: action.payload,loading: false};
        case 'DELETE_BLOG': return {...state,blogs: state.blogs.filter(blog => blog._id !== action.payload)};
        case 'BLOGS_LOADING': return {...state,loading: true};
        default: return state;
    }
}

export default blogReducer;