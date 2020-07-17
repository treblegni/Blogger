import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addBlog } from '../../flux/actions/blogActions';
import { setVisibility } from '../../flux/actions/blogEditorActions';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const BlogEditor = ({ visible,setVisibility,addBlog })=> {
    const [blog, setBlog] = useState({title: "",message: ""})

    const handleClose = () => {
        setBlog({title: "",message: ""});
        setVisibility(visible);
    }

    const handleSubmit = () => {
        addBlog(blog);
        setBlog({title: "",message: ""});
        setVisibility(visible);
    }

    const handleChange = e => {
        const {name,value} = e.target;
        setBlog({...blog,[name]: value});
    }

    return (
        <div>
            <Button variant="primary" onClick={handleClose} className='blog-add-button'>
                Add Blog
            </Button>

            <Modal 
                show={visible} 
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name='title'
                                type="email" 
                                placeholder="Enter post title"
                                onChange={handleChange}/>
                            {/* <Form.Text className="text-muted">
                                Enter post title
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                name='message'
                                as="textarea" 
                                rows="10" 
                                style={{resize: 'none'}}
                                onChange={handleChange}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Blog
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

const enhance = compose(
    connect(
        state => ({
            visible: state.blogEditor.visible 
        }),
        dispatch => ({
            setVisibility: current => dispatch(setVisibility(current)),
            addBlog: blog => dispatch(addBlog(blog))
        })
    )
)

export default enhance(BlogEditor);