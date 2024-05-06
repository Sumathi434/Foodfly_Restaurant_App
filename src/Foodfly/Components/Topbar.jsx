import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUtensils, faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };




  return (
    <>
      <div className='navbarSection'>
       <Link to = '/' className='logolink'> <div className='logo'>
          <h2><FontAwesomeIcon icon={faUtensils} /> Foodfly</h2>
        </div>
        </Link>

        <div className='search-bar'>
          <form className='search'>
            <input type='search' placeholder='Search...' />
            <button> <FontAwesomeIcon icon={faSearch} /></button>
          </form>
        </div>

        <div className='userAuth'>
          <p>Login</p>
          <p>SignUp</p>
        </div>

        {/* Add to cart */}
         
         <div className='cart'>
          <b><FontAwesomeIcon icon={faShoppingCart}/>Cart</b>
         </div>


        {/* Hamburger Menu Icon */}
        <div className='menu-icon' onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='mobile-menu'>
          <p>Login</p>
          <p>SignUp</p>
          <p><FontAwesomeIcon icon={faShoppingCart}/>Cart</p>
        </div>
      )}
    </>
  );
}

export default Topbar;
