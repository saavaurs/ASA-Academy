import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo navbar.png" alt="ASA Academy Logo" style={{ height: '50px' }} />
        </div>
        
        <nav className={`nav-links ${click ? "mobile-nav" : ""}`}>
          <ul onClick={() => setClick(false)}>
            <li>
              <NavLink to='/' activeClassName="active">BERANDA</NavLink>  
            </li>
            <li>
              <NavLink to='/about' activeClassName="active">TENTANG</NavLink>
            </li>
            <li>
              <NavLink to='/courses' activeClassName="active">MATERI</NavLink>
            </li>
            <li>
              <NavLink to='/team' activeClassName="active">TIM</NavLink>
            </li>
            <li>
              <NavLink to='/faq' activeClassName="active">FAQ</NavLink>
            </li>
            <li>
              <NavLink to='/journal'activeClassName="active">BLOG</NavLink>
            </li>
            <li>
              <NavLink to='/contact'activeClassName="active">KONTAK</NavLink>
            </li>
          </ul>
        </nav>
        
        <button className='toggle' onClick={() => setClick(!click)}>
          {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
        </button>
      </div>
    </header>
  )
}

export default Header