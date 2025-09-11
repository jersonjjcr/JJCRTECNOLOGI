import { useState } from 'react'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <img src="/logo.png" alt="JJCR Tecnología" className="logo" />
            <span className="brand-text">JJCR TECNOLOGI</span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#inicio" onClick={() => scrollToSection('inicio')}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={() => scrollToSection('servicios')}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" onClick={() => scrollToSection('nosotros')}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#portafolio" onClick={() => scrollToSection('portafolio')}>
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => scrollToSection('contacto')}>
                Contacto
              </a>
            </li>
          </ul>
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
