import React from 'react';
import { deleteBlog } from '../../flux/actions/blogActions';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Card,Button } from 'react-bootstrap';

const Blog = ({ blog,deleteBlog }) => {
    const handleDelete = () => {
        deleteBlog(blog._id);
    }

    return (
        <Card className='blog-card'>
            <Card.Header>{blog.title}</Card.Header>
            <Card.Body>
                <Card.Title>{blog.name}</Card.Title>
                <Card.Text>
                    {blog.message}
                </Card.Text>
                <Button variant="primary" onClick={handleDelete}>Delete Blog</Button>
            </Card.Body>
        </Card>
    )
}

const enhance = compose(
    connect(
        state => ({}),
        dispatch => ({
            deleteBlog: id => dispatch(deleteBlog(id))
        })
    )
)

export default enhance(Blog);