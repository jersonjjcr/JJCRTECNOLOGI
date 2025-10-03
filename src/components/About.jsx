import { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countersAnimated, setCountersAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!countersAnimated) {
            animateCounters()
            setCountersAnimated(true)
          }
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [countersAnimated])

  const animateCounters = () => {
    const counters = [
      { target: 30, suffix: '+' },
      { target: 2, suffix: '+' },
      { target: 100, suffix: '%' }
    ]

    counters.forEach((counter, index) => {
      let current = 0
      const increment = counter.target / 50
      const timer = setInterval(() => {
        current += increment
        const element = document.querySelector(`.stat:nth-child(${index + 1}) h3`)
        if (element) {
          if (current >= counter.target) {
            element.textContent = counter.target + counter.suffix
            clearInterval(timer)
          } else {
            element.textContent = Math.floor(current) + counter.suffix
          }
        }
      }, 50)
    })
  }

  const features = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Ingeniería Electrónica',
      description: 'Formación y experiencia en ingeniería electrónica para proyectos de hardware y sistemas embebidos.'
    },
    {
      icon: 'fas fa-code',
      title: 'Desarrollo Full Stack',
      description: 'Dominio completo del desarrollo web y móvil, desde frontend hasta backend y bases de datos.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Soluciones Innovadoras',
      description: 'Combinamos hardware y software para crear soluciones tecnológicas únicas y eficientes.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Tecnología Sostenible',
      description: 'Enfoque en energías renovables y tecnologías que contribuyen al desarrollo sostenible.'
    }
  ]

  return (
    <section id="nosotros" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate' : ''}`}>
            <h2>Sobre JJCR Tecnologi</h2>
            <p>
              Somos una empresa de ingeniería electrónica y desarrollo de software especializada 
              en crear soluciones tecnológicas innovadoras. Combinamos experiencia en ingeniería 
              electrónica con desarrollo full stack para ofrecer proyectos integrales que van 
              desde sistemas embebidos hasta aplicaciones web modernas, energías renovables y 
              automatización inteligente.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>0+</h3>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat">
                <h3>0+</h3>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat">
                <h3>0%</h3>
                <p>Clientes Satisfechos</p>
              </div>
            </div>
          </div>
          <div className={`about-features ${isVisible ? 'animate' : ''}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <i className={feature.icon}></i>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
