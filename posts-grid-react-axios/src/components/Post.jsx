import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPost] = useState([]);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
      setPost(res.data)
    });
  }, []);


  return (
    <>
      {
        posts.map(post =>
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>

        )
      }
    </>
  )
}

export default Post