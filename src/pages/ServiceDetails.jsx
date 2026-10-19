import PageTitle from '../components/PageTitle.jsx'

const features = [
  {
    icon: 'bi bi-layers',
    title: 'Modern Architecture',
    text: 'Scalable, maintainable code structure using the latest web technologies and best practices for long-term success.',
  },
  {
    icon: 'bi bi-speedometer2',
    title: 'Lightning Fast',
    text: 'Optimized performance with lazy loading, code splitting, and CDN integration for instant page loads.',
  },
  {
    icon: 'bi bi-phone-landscape',
    title: 'Responsive Design',
    text: 'Pixel-perfect layouts that adapt seamlessly across all devices, from mobile phones to large desktop screens.',
  },
  {
    icon: 'bi bi-graph-up',
    title: 'SEO Optimized',
    text: 'Search engine friendly structure with semantic HTML, meta tags, and performance optimizations built in.',
  },
]

const workflow = [
  {
    title: 'Strategy & Planning',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    duration: '1 week',
  },
  {
    title: 'Design & Prototyping',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.',
    duration: '1-2 weeks',
  },
  {
    title: 'Development & Testing',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    duration: '2-3 weeks',
  },
  {
    title: 'Launch & Optimization',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.',
    duration: '1 week',
  },
]

const techCategories = [
  { title: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS'] },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'REST API'],
  },
  { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
]

export default function ServiceDetails() {
  return (
    <>
      <PageTitle current="Service Details" />

      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4 order-lg-2">
              <div className="sticky-sidebar">
                <div className="service-card" data-aos="fade-left" data-aos-delay="200">
                  <div className="card-header">
                    <div className="service-icon">
                      <i className="bi bi-code-square"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p className="service-tagline">Full-Stack Solutions</p>
                  </div>
                  <div className="card-body">
                    <div className="price-tag">
                      <span className="label">Starting at</span>
                      <span className="price">$2,500</span>
                    </div>
                    <ul className="quick-info">
                      <li>
                        <i className="bi bi-clock"></i>
                        <span>4-6 weeks delivery</span>
                      </li>
                      <li>
                        <i className="bi bi-arrow-repeat"></i>
                        <span>Unlimited revisions</span>
                      </li>
                      <li>
                        <i className="bi bi-shield-check"></i>
                        <span>60 days support</span>
                      </li>
                    </ul>
                    <div className="cta-buttons">
                      <a href="#" className="btn-primary">
                        Start Project
                      </a>
                      <a href="#" className="btn-secondary">
                        Schedule Call
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-card" data-aos="fade-left" data-aos-delay="300">
                  <h4>Have Questions?</h4>
                  <p>Let's discuss your project requirements and how I can help.</p>
                  <div className="contact-methods">
                    <a href="mailto:hello@example.com" className="contact-item">
                      <i className="bi bi-envelope"></i>
                      <span>hello@example.com</span>
                    </a>
                    <a href="tel:+15551234567" className="contact-item">
                      <i className="bi bi-telephone"></i>
                      <span>+1 (555) 123-4567</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 order-lg-1">
              <div className="service-overview" data-aos="fade-up" data-aos-delay="200">
                <div className="overview-header">
                  <span className="badge">Premium Service</span>
                  <h2>Professional Web Development That Drives Results</h2>
                </div>
                <p className="lead-text">
                  Transform your digital presence with custom web solutions built to
                  perform. I specialize in creating high-performance websites that combine
                  stunning design with powerful functionality, delivering exceptional user
                  experiences that convert visitors into customers.
                </p>
              </div>

              <div
                className="service-image-showcase"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="/assets/img/services/services-1.webp"
                  alt="Web Development"
                  className="img-fluid main-image"
                />
                <div className="image-overlay">
                  <div className="tech-stack">
                    <span className="tech-item">React</span>
                    <span className="tech-item">Node.js</span>
                    <span className="tech-item">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="features-grid" data-aos="fade-up" data-aos-delay="400">
                <h3 className="section-heading">What You Get</h3>
                <div className="row g-4">
                  {features.map((feature) => (
                    <div className="col-md-6" key={feature.title}>
                      <div className="feature-box">
                        <div className="icon-wrapper">
                          <i className={feature.icon}></i>
                        </div>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="workflow-section" data-aos="fade-up" data-aos-delay="500">
                <h3 className="section-heading">Development Workflow</h3>
                <div className="timeline">
                  {workflow.map((step, index) => (
                    <div className="timeline-item" key={step.title}>
                      <div className="timeline-marker">{index + 1}</div>
                      <div className="timeline-content">
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                        <span className="duration">{step.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="testimonial-section" data-aos="fade-up" data-aos-delay="600">
                <div className="testimonial-card">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <blockquote>
                    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt. Exceptional work and outstanding communication
                    throughout."
                  </blockquote>
                  <div className="client-info">
                    <img
                      src="/assets/img/person/person-m-5.webp"
                      alt="Michael Chen"
                      className="client-avatar"
                    />
                    <div className="client-details">
                      <h5>Michael Chen</h5>
                      <p>Founder, TechStart Inc.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tech-details" data-aos="fade-up" data-aos-delay="700">
                <h3 className="section-heading">Technologies &amp; Tools</h3>
                <div className="tech-categories">
                  {techCategories.map((category) => (
                    <div className="tech-category" key={category.title}>
                      <h5>{category.title}</h5>
                      <div className="tech-tags">
                        {category.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Details Section */}
    </>
  )
}
