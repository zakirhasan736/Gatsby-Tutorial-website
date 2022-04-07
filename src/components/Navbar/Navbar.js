import React , {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { AiOutlineClose } from "react-icons/ai";
import {Topnavdata,Middlenavdata} from '../../constants/data';
import {images} from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSideBarMenu, setToggleSideBarMenu] = useState(false);
  return (
<>

<header className="AppHeader__section">
  
<div className="AppHeader_wrapperBox">
{/* header TopNavbar */}
<div className="header__TopNavbar">

<nav className="app__navbar">

  <div className="navLink__ContentBox">
  <div className="app__navbar-logo">
     <a href='/' >
     <img src={images.logo} alt='logo' />
     </a>
      </div>
 
      <ul className="app__navbar-links">
{Topnavdata.map(({id,name,path})=>(
<li key={id} className="NavItem">
    <a className='navs__link' href={path}>{name}</a>
</li>
))}
</ul>
  </div>
  <div className="app__navbar-login">
        <a href="#login" className="NavItem-loginBtn">登录</a>
        <a href="/" className="NavItem-signUpBtn">注册</a>
      </div>
      <div className="app__navbar-smallscreen">
       <div className="humbergerMenu">
       <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        </div> 
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-left">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
{Topnavdata.map(({id,name,path})=>(
<li key={id} className="NavItem">
<a className='navs__link' href={path} onClick={() => setToggleMenu(false)}>{name}</a>
</li>
))}
</ul>
          </div>
        )}
      </div>

    </nav>
</div>

{/* AppHeader__subNavLinks */}
<div className="AppHeader__subNavLinks">
  <div className="nav">
  <nav className="app__navbar">
      <ul className="app__navbar-links">
      {Middlenavdata.map(({id,name,path})=>(
<li key={id} className="NavItem">
    <a className='navs__link' href={path}>{name}</a>
</li>
))}
      </ul>

      <div className="app__navbar-smallscreen">
      <div className="humbergerMenu">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleSideBarMenu(true)} />
        </div>
        {toggleSideBarMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-right">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleSideBarMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            {Middlenavdata.map(({id,name,path})=>(
<li key={id} className="NavItem">
<a className='navs__link' href={path} onClick={() => setToggleMenu(false)}>{name}</a>
</li>
))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  </div>
</div>

</div>

</header>

    </>
  );
};

export default Navbar;
