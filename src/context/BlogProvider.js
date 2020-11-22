import React, { useReducer } from 'react'
import BlogContext from './blogContext'
import blogReducer from './blogReducer'

const BlogProvider = (props) => {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(blogReducer, initialState)

  const getPosts = async () => {
    try {
      dispatch({
        type: 'SENDING_REQUEST',
      })
      const res = await fetch('https://picsum.photos/v2/list?page=2&limit=6')
      const data = await res.json()
      dispatch({
        type: 'REQUEST_FINISHED',
      })
      dispatch({ type: 'SET_POSTS', payload: data })
    } catch (error) {
      console.log(error)
    }
  }

  const getPostById = async (id) => {
    try {
      dispatch({
        type: 'SENDING_REQUEST',
      })
      const res = await fetch(`https://picsum.photos/id/${id}/info`)
      const data = await res.json()
      console.log(data)
      dispatch({
        type: 'REQUEST_FINISHED',
      })
      dispatch({ type: 'SET_POST', payload: data })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BlogContext.Provider
      value={{
        blogPosts: state.blogPosts,
        currentBlogPost: state.currentBlogPost,
        loading: state.loading,
        getPosts: getPosts,
        getPostById: getPostById,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
