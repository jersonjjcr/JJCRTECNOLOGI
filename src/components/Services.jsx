import { useEffect, useRef, useState } from 'react'

const Services = () => {
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

  const services = [
    {
      icon: 'fas fa-handshake',
      title: 'Consultoría Técnica',
      description: 'Asesoramiento especializado en proyectos de ingeniería electrónica y desarrollo de software.',
      technologies: ['Análisis técnico', 'Arquitectura de sistemas', 'Optimización de procesos']
    },
    {
      icon: 'fas fa-globe',
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y responsivas con las últimas tecnologías del mercado.',
      technologies: ['React, Vue, Angular', 'Node.js, Python, PHP', 'Diseño responsive']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Desarrollo Móvil',
      description: 'Apps nativas y multiplataforma para iOS y Android con experiencia de usuario excepcional.',
      technologies: ['React Native', 'Flutter', 'iOS/Android nativo']
    },
    {
      icon: 'fas fa-desktop',
      title: 'Desarrollo de Escritorio',
      description: 'Aplicaciones de escritorio robustas y eficientes para Windows, Mac y Linux.',
      technologies: ['Electron', '.NET, C#', 'Python, Java']
    },
    {
      icon: 'fas fa-microchip',
      title: 'Sistemas Electrónicos',
      description: 'Diseño y desarrollo de circuitos electrónicos, PCBs y sistemas embebidos.',
      technologies: ['Diseño de PCB', 'Microcontroladores', 'Sistemas embebidos']
    },
    {
      icon: 'fas fa-home',
      title: 'Domótica',
      description: 'Automatización inteligente del hogar con control remoto y gestión energética.',
      technologies: ['Home Assistant', 'Zigbee, WiFi', 'Control por app']
    },
    {
      icon: 'fas fa-solar-panel',
      title: 'Energías Renovables',
      description: 'Sistemas fotovoltaicos y eólicos con monitoreo inteligente y optimización.',
      technologies: ['Paneles solares', 'Turbinas eólicas', 'Sistemas de monitoreo']
    },
    {
      icon: 'fas fa-seedling',
      title: 'Electrónica Agrícola',
      description: 'Soluciones tecnológicas para agricultura de precisión y automatización agrícola.',
      technologies: ['Sensores ambientales', 'Riego automático', 'Monitoreo de cultivos']
    },
    {
      icon: 'fas fa-wifi',
      title: 'Internet de las Cosas',
      description: 'Dispositivos IoT conectados con análisis de datos en tiempo real.',
      technologies: ['ESP32, Arduino', 'MQTT, LoRaWAN', 'Análisis de datos']
    }
  ]

  return (
    <section id="servicios" className="services" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2>Nuestros Servicios</h2>
          <p>Soluciones integrales de ingeniería electrónica y desarrollo de software para impulsar tu proyecto</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
