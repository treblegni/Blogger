import axios from 'axios';

export const addBlog = (blog) => {
    return dispatch => {
        axios
            .post('/api/blogs',blog)
            .then(res =>
                dispatch({
                    type: 'ADD_BLOG',
                    payload: res.data
                })
            )
    }
}

export const getBlogs = () => {
    return dispatch => {
        dispatch(setItemsLoading());
        axios
            .get('/api/blogs')
            .then(res => 
                dispatch({
                    type: 'GET_BLOGS',
                    payload: res.data
                })
            );
    }
}

export const deleteBlog = id => {
    return dispatch => {
        axios
            .delete(`/api/blogs/${id}`)
            .then(res =>
                dispatch({
                    type: 'DELETE_BLOG',
                    payload: id
                })
            );
    }
}

export const setItemsLoading = () => {
    return {
        type: 'BLOGS_LOADING',
    }
}
