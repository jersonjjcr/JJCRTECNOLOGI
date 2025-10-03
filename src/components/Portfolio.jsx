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
      icon: 'fas fa-chart-line',
      title: 'FinApp',
      description: 'Aplicación de gestión financiera para el control de flujo de caja y análisis financiero',
      technologies: ['React', 'JavaScript', 'CSS'],
      url: 'https://cashflow-178.preview.emergentagent.com/'
    },
    {
      icon: 'fas fa-calculator',
      title: 'NutriLab',
      description: 'Herramienta para calcular necesidades energéticas diarias con fórmulas Harris-Benedict y Mifflin-St Jeor',
      technologies: ['React', 'JavaScript', 'CSS'],
      url: 'https://nutri-lab-rho.vercel.app/'
    },
    {
      icon: 'fas fa-code',
      title: 'AmbiCode',
      description: 'Plataforma de desarrollo y programación con herramientas avanzadas',
      technologies: ['React', 'Vercel', 'JavaScript'],
      url: 'https://ambicode.vercel.app/'
    },
    {
      icon: 'fas fa-coffee',
      title: 'CafeLado',
      description: 'Sitio web para cafetería con sistema de pedidos y catálogo de productos',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://app.netlify.com/projects/cafelado/overview'
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
                  <div className="portfolio-link">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Ver Proyecto
                    </a>
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
