import React from 'react';
import Logo from '../../Assets/images/logo.png';
import './header.css';
import RouMenuIcon from '../../Assets/images/menu-round-icon.png';
import Search from '../../Assets/images/Search.png';
import RoundIcon2 from '../../Assets/images/round-icon-hole.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="first-navbar">
            <a href="#" className="logo">
                <img src={Logo} alt="" />
            </a>
            
            <div className="category-links">
                <a href="#" className="category-link_items">Movies</a>
                <a href="#" className="category-link_items">TV shows</a>
                <a href="#" className="category-link_items">Animations</a>
            </div>
            </div>
            
            <div className="action-links">
                <div  className="action-link-first">
                    <img src={Search} alt="" />
                </div>
                <div className="action-link-first">
                    <img src={RoundIcon2} alt="" />
                </div>
                <div  className="action-link-first menu-rounds">
                    <img src={RouMenuIcon} alt="" />
                    <img src={RouMenuIcon} alt="" />
                    <img src={RouMenuIcon} alt="" />
                    <img src={RouMenuIcon} alt="" />
                </div>
                
            </div>
            
        </div>
    )
}


export default Header;