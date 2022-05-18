import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Dropdown from './Dropdown';

const Menu = () => {
  return (
    <>
      <div className="main-menu-wrap">
        <TopBar />
        <BottomBar />
        <Dropdown />
      </div>
    </>

  )
}

export default Menu