import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/blogContext'
import PostCard from './PostCard'

function PostList() {
  const blogContext = useContext(BlogContext)
  //!we are getting these 3 value from BlogContext.Provider
  const { getPosts, blogPosts, loading } = blogContext
  useEffect(() => {
    getPosts()
  }, [])
  console.log(blogPosts)
  return (
    <div className='posts'>
      <div className='container'>
        <h2>Posts</h2>
        {!loading ? (
          <div className='posts-grid-container'>
            {blogPosts.map((post, i) => {
              return (
                <PostCard
                  key={post.id}
                  image={post.download_url}
                  author={post.author}
                  id={post.id}
                ></PostCard>
              )
            })}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  )
}

export default PostList
