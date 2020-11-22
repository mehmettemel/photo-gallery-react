import React, { useEffect, useContext } from 'react'
import BlogContext from '../context/blogContext'
import { Link, useParams } from 'react-router-dom'

function Post() {
  const blogContext = useContext(BlogContext)
  const { getPostById, currentBlogPost } = blogContext
  //! :postId is useParam
  let { postId } = useParams()

  useEffect(() => {
    getPostById(postId)
  }, [])

  // console.log(currentBlogPost)
  return (
    <div>
      <div className='post'>
        {currentBlogPost ? (
          <>
            <div
              className='post-image'
              style={{
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%  ',
                height: '100%',
                backgroundImage: `url("${currentBlogPost.download_url}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            ></div>
          </>
        ) : (
          <h1>...loading</h1>
        )}

        <Link to='/' style={{ marginTop: '130px', color: 'gray' }}>
          back to home
        </Link>
      </div>
    </div>
  )
}

export default Post
