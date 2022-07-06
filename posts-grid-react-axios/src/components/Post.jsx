import React, { useState, useEffect } from 'react';
import axios from 'axios';


const jsonURL = "https://jsonplaceholder.typicode.com/posts/";

const Post = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(jsonURL).then((res) => {
      setPost(res.data)
      console.log(res)
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