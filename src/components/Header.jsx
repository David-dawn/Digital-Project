import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'

function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Digital-logo" />
      </div>

      <nav className="navbar desktop-nav">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Main</Link>
        <Link className={location.pathname === '/gallery' ? 'active' : ''} to="/gallery">Gallery</Link>
        <Link className={location.pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link>
        <a href="#">Certifications</a>
        <a href="#">Contacts</a>
      </nav>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${isOpen ? 'show' : ''}`}>
        <Link onClick={toggleMenu} to="/">Main</Link>
        <Link onClick={toggleMenu} to="/gallery">Gallery</Link>
        <Link onClick={toggleMenu} to="/projects">Projects</Link>
        <a onClick={toggleMenu} href="#">Certifications</a>
        <a onClick={toggleMenu} href="#">Contacts</a>
      </nav>
    </header>
  )
}

export default Header
