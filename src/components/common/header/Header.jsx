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
              <Link to='/about'>TENTANG</Link>
            </li>
            <li>
              <Link to='/courses'>TOPIK</Link>
            </li>
            <li>
              <Link to='/team'>KONTAK</Link>
            </li>
            <li>
              <Link to='/pricing'>JURNAL</Link>
            </li>
            <li>
              <Link to='/journal'>JOURNAL</Link>
            </li>
            <li>
              <Link to='/contact'>FAQ</Link>
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