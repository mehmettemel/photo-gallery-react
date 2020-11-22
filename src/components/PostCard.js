import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ image, author, id }) {
  return (
    <Link to={`/${id}`}>
      <div
        className='card'
        style={{
          display: 'grid',
          placeItems: 'center',
          color: '#f3f3f4',
          width: '100%',
          height: '200px',
          backgroundImage: `url("${image}")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
          borderTopRightRadius: '2px',
          borderTopLeftRadius: '2px',
        }}
      >
        <h2>{author}</h2>
      </div>
    </Link>
  )
}

export default PostCard
