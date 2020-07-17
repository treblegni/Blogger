import React, { useEffect } from 'react';
import BlogCard from './blog';
import BlogEditor from './blogEditor';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getBlogs } from '../flux/actions/blogActions';
import { Switch,Route } from 'react-router-dom';



const App = ({ blogs,loading,getBlogs }) => {
  useEffect(() => {
    getBlogs();
  },[getBlogs]);

  if (loading) {
    return <div> loading </div>
  }

  return (
    <div className="App">
      <Navbar bg="dark">
        <Navbar.Brand href="#home" style={{color: 'white'}}>
          Blogger
        </Navbar.Brand>
      </Navbar>
      <div className='blogs-container'>
        <BlogEditor/>
        <div className='blogs-recycler'>
          {blogs.map(blog => <BlogCard key={blog._id} blog={blog}/>)}
        </div>
      </div>
    </div>
  );
}

const enhance = compose(
  connect(
    state => ({
      blogs: state.blogsState.blogs,
      loading: state.blogsState.loading
    }),
    dispatch => ({
      getBlogs: () => dispatch(getBlogs())
    })
  )
)

export default enhance(App);
