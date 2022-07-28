import React from 'react'
import FeatherIcon from 'feather-icons-react';
export default function Navbar() {

  return (
    <div className="nav-container">
    <nav className='container'>
      <div className='meal-navbar'>
        <div className="left">
          ReactMeals
        </div>
        <div className="right">
          <div className="icon">
            <FeatherIcon icon="shopping-cart" size="18" />
            <span>Your Cart</span>
          </div>
          <div className="quantity">
            0
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
