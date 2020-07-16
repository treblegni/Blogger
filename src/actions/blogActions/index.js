export const getBlog = id => {
    return {
        type: GET_BLOG
    }
}

export const getBlogs = () => {
    return {
        type: GET_BLOGS
    }
}

export const deleteBlog = id => {
    return {
        type: DELETE_BLOG
    }
}
