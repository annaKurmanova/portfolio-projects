import React from 'react';
import '../assets/styles/BottomBar.css';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )
}

export default BottomBar