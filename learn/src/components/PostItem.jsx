import React, {useState} from 'react'

const PostItem = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Javascript',
      body: 'Description',
    },
    {
      id: 2,
      title: 'PHP',
      body: 'Description',
    },
    {
      id: 3,
      title: 'React ',
      body: 'Description',
    }
  ])

  return (
  posts.map(post =>
    <div className="post" key={post.id} id={post.id}>
        <div className="post__content">
          <strong>{post.id} {post.title}</strong>
          <div>
           {post.body}
          </div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
  )
  )
}

export default PostItem