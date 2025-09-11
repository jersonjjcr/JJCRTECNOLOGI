import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'animate' : ''}`}>
          <h1>
            Transformamos tus ideas en{' '}
            <span className="highlight">soluciones de ingeniería</span>
          </h1>
          <p>
            Somos JJCR Tecnologi, especialistas en ingeniería electrónica y desarrollo full stack. 
            Creamos soluciones integrales desde sistemas embebidos hasta aplicaciones web, 
            domótica, energías renovables y automatización inteligente.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contacto')}
            >
              Comenzar Proyecto
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('servicios')}
            >
              Ver Servicios
            </button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'animate' : ''}`}>
          <div className="floating-card card-1">
            <i className="fas fa-microchip"></i>
            <h3>Sistemas Electrónicos</h3>
          </div>
          <div className="floating-card card-2">
            <i className="fas fa-laptop-code"></i>
            <h3>Desarrollo Full Stack</h3>
          </div>
          <div className="floating-card card-3">
            <i className="fas fa-solar-panel"></i>
            <h3>Energías Renovables</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
