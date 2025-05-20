import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">Academy</div>
        
        <nav className={`nav-links ${click ? "mobile-nav" : ""}`}>
          <ul onClick={() => setClick(false)}>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/courses'>COURSE</Link>
            </li>
            <li>
              <Link to='/team'>TEAM</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/journal'>ARTICLE</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
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