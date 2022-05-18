import React, { useState } from 'react';
import '../assets/styles/Dropdown.css';
import headphones from '../assets/images/jewl.svg';


const Dropdown = () => {
  const [categories, setCategory] = useState('');
  const [products, setProducts] = useState('');


  const menuItems = [
    {
      category: 'Earrings',
      products: ['Hoop Earrings', 'Small Earrings']
    },
    {
      category: 'Bracelets',
      products: ['Chain Bracelets', 'Steel Bracelets']
    }
  ]


  console.log(menuItems)
  return (
    <div className="dropdown">
      <img src={headphones} />
      <div className="dropdown-inner">
        <div className="cat-block">
          <h3 className="cat-name">Category Name</h3>
          <ul className="products">
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">Category Name</h3>
          <ul className="products">
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">Category Name</h3>
          <ul className="products">
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">Category Name</h3>
          <ul className="products">
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">Category Name</h3>
          <ul className="products">
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">Category Name</h3>
          <ul className="products">
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
            <li>Product Name</li>
          </ul>
        </div>
      </div>

    </div>

  )

}

export default Dropdown

