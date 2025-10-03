const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Servicios',
      links: [
        'Desarrollo Web',
        'Aplicaciones Móviles',
        'Backend & APIs',
        'Cloud Solutions'
      ]
    },
    {
      title: 'Empresa',
      links: [
        'Sobre Nosotros',
        'Portafolio',
        'Blog',
        'Contacto'
      ]
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/jjcrtecnologi/' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img src="/logo.png" alt="JJCR Tecnología" className="footer-logo" />
              <span className="footer-brand-text">JJCR TECNOLOGI</span>
            </div>
            <p>
              Especialistas en ingeniería electrónica y desarrollo full stack. 
              Creamos soluciones integrales desde hardware hasta software para 
              impulsar tu proyecto tecnológico.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  target={link.href !== '#' ? '_blank' : '_self'}
                  rel={link.href !== '#' ? 'noopener noreferrer' : ''}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} JJCR Tecnología. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
