import { useEffect, useRef, useState } from 'react'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      icon: 'fas fa-calculator',
      title: 'NutriLab',
      description: 'Herramienta para calcular necesidades energéticas diarias con fórmulas Harris-Benedict y Mifflin-St Jeor',
      technologies: ['React', 'JavaScript', 'CSS']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'App de Delivery',
      description: 'Aplicación móvil para delivery con geolocalización y pagos online',
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Dashboard Analytics',
      description: 'Panel de control con métricas en tiempo real y reportes avanzados',
      technologies: ['Vue.js', 'Python', 'PostgreSQL']
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Plataforma Educativa',
      description: 'Sistema de gestión de aprendizaje con videoconferencias integradas',
      technologies: ['Angular', 'WebRTC', 'AWS']
    }
  ]

  return (
    <section id="portafolio" className="portfolio" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2>Nuestro Portafolio</h2>
          <p>Algunos de los proyectos en los que hemos trabajado</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`portfolio-item ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <div className="portfolio-placeholder">
                  <i className={project.icon}></i>
                </div>
                <div className="portfolio-overlay">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
