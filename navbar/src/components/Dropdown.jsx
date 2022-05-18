import React, { useState } from 'react';
import '../assets/styles/Dropdown.css';
import headphones from '../assets/images/jewl.svg';


const Dropdown = () => {
  const [categories, setCategory] = useState('Category Name');
  const [products, setProducts] = useState('Product Name');


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






  return (
    <div className="dropdown">
      <img src={headphones} />
      <div className="dropdown-inner">
        <div className="cat-block">
          <h3 className="cat-name">{categories}</h3>
          <ul className="products">
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">{categories}</h3>
          <ul className="products">
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">{categories}</h3>
          <ul className="products">
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">{categories}e</h3>
          <ul className="products">
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">{categories}</h3>
          <ul className="products">
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
          </ul>
        </div>
        <div className="cat-block">
          <h3 className="cat-name">{categories}</h3>
          <ul className="products">
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
            <li>{products}</li>
          </ul>
        </div>
      </div>

    </div>

  )

}

export default Dropdown

