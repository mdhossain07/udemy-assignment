import React from 'react';
import logo from '../../images/udemy-logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <div className='link'>
                <a href="/category">Categories</a>
            </div>

            <div className='search-box'>
                <input type="text" name="" id="" placeholder='search for anything'/>
            </div>

            <div className='link'>
                <a href="/business">Udemy Business</a>
                <a href="/course">Teach On Udemy</a>
            </div>

            <div className='buttons'>
                <button>Log in</button>
                <button className='black'>Sign up</button>
            </div>
                
        </div>
    );
};

export default Header;