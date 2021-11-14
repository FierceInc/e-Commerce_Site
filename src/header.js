/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-links">
            <ul id="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Deals</a></li>
                <form action="#" autoComplete="off" id="search-form">
                 <input type="text" name="search" id="search" placeholder="Search" />
                 <button id="search-btn"><i class="fas fa-search "></i></button>
                 </form>
                
            </ul>
            <ul id="menu">
                <li id="search-icon"><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-user-circle"></i></a></li>
                <li><a href="#"><i class="fas fa-heart"></i></a></li>
                <li><a href="#"><i class="fas fa-cart-plus"></i></a></li>
            </ul>
            </div>
           
        <div>
      
        </div>
        </div>
    );
}

export default Header;
