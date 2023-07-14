import React from 'react'
import { Link } from 'react-router-dom'
import img from '../projectImages/logo.jpg'
import './header.css'

function Header() {
    return (
       <div className='header-page'>
            <div className='nav-bar'>
                <div className='logo'><img height={50} style={{borderRadius:"10px"}} src={img} alt='logo' /></div>
                <div className='list'>
                <Link to='/home'>Home</Link>
                <Link to ='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
