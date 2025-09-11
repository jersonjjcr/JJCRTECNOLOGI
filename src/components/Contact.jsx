import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [notification, setNotification] = useState(null)
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simular envío del formulario
    showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success')
    
    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      info: 'contacto@jjcrtecnologia.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Teléfono',
      info: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      info: 'Ciudad, País'
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-twitter', href: '#' }
  ]

  return (
    <section id="contacto" className="contact" ref={sectionRef}>
      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2>Contáctanos</h2>
          <p>¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte</p>
        </div>
        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate' : ''}`}>
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <i className={item.icon}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <form 
            className={`contact-form ${isVisible ? 'animate' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre completo"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="¿En qué podemos ayudarte?"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
