import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import Typed from 'typed.js'
import GLightbox from 'glightbox'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

const services = [
  {
    icon: 'bi bi-code-slash',
    title: 'Fullstack Web Development',
    items: [
      'Responsive Website Design',
      'HTML, CSS & Bootstrap Development',
      'Interactive Web Interfaces with JavaScript',
      'React & Angular Development',
      'User-Friendly and Mobile-Responsive Designs',
    ],
    featured: false,
  },
  {
    icon: 'bi bi-speaker',
    title: 'Consulting',
    items: [
      'Providing guidance, advice',
      'practical solutions to help individuals or organizations',
      'make informed decisions and improve their work processes.',
    ],
    featured: true,
  },
  {
    icon: 'bi bi-palette',
    title: 'Teaching & Training',
    items: [
      'Delivering clear and engaging instruction',
      'help learners understand concepts',
      'build skills and gain practical knowledge.',
    ],
    featured: false,
  },
  {
    icon: 'bi bi-bag-check',
    title: 'Case Executing',
    items: [
      'Managing and carrying out assigned tasks, projects.',
      'cases efficiently while ensuring organization.',
      'accuracy and timely completion.',
    ],
    featured: false,
  },
]

const portfolioFilters = [
  { label: 'All Work', filter: '*' },
  { label: 'clone project', filter: '.filter-creative' },
  { label: 'group project', filter: '.filter-digital' },
  { label: 'Latest websites', filter: '.filter-strategy' },
]

const portfolioItems = [
  {
    img: 'portfolio-1.webp',
    alt: 'project 1',
    category: 'project',
    title: 'project 1',
    filter: '',
    tags: [],
    year: '',
  },
  {
    img: 'portfolio-2.webp',
    alt: 'project 2',
    category: 'project',
    title: 'project 2',
    filter: '',
    tags: [],
    year: '',
  },
  {
    img: 'portfolio-3.webp',
    alt: 'project 3',
    category: 'project',
    title: 'project 3',
    filter: '',
    tags: [],
    year: '',
  },
  {
    img: 'portfolio-4.webp',
    alt: 'evangadi forum project',
    category: 'group project',
    title: 'evangadi forum project',
    filter: 'filter-digital',
    tags: ['practical solutions'],
    year: '',
  },
  {
    img: 'portfolio-5.webp',
    alt: 'netflix clone project',
    category: 'clone project',
    title: 'netflix clone project',
    filter: 'filter-creative',
    tags: ['academic', 'different skill'],
    year: '',
  },
  {
    img: 'portfolio-6.webp',
    alt: 'Chat gpt clone',
    category: 'clone project',
    title: 'Chat gpt clone',
    filter: 'filter-creative',
    tags: ['client support', 'successfull project exexution'],
    year: '',
  },
  {
    img: 'portfolio-7.webp',
    alt: 'latest website project 1',
    category: 'Latest websites',
    title: 'latest website project 1',
    filter: 'filter-strategy',
    tags: [],
    year: '',
  },
  {
    img: 'portfolio-8.webp',
    alt: 'latest website project 2',
    category: 'Latest websites',
    title: 'latest website project 2',
    filter: 'filter-strategy',
    tags: [],
    year: '',
  },
]

export default function Home() {
  const typedRef = useRef(null)
  const isotopeContainerRef = useRef(null)
  const isotopeRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('*')

  useEffect(() => {
    const el = typedRef.current
    if (!el) return
    const typed = new Typed(el, {
      strings: el.getAttribute('data-typed-items').split(','),
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    })
    return () => typed.destroy()
  }, [])

  useEffect(() => {
    const lightbox = GLightbox({ selector: '.glightbox' })
    return () => lightbox.destroy()
  }, [])

  useEffect(() => {
    const container = isotopeContainerRef.current
    if (!container) return
    let cancelled = false
    let isotope = null
    imagesLoaded(container, () => {
      if (cancelled) return
      isotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
        sortBy: 'original-order',
      })
      isotopeRef.current = isotope
    })
    return () => {
      cancelled = true
      if (isotope) isotope.destroy()
      isotopeRef.current = null
    }
  }, [])

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter })
      AOS.refresh()
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src="/assets/img/profile/profile-bg-5.webp" alt="" data-aos="fade-in" />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Hi, I'm Tsega Desalegn</h2>
              <p>
                I'm a{' '}
                <span
                  className="typed"
                  ref={typedRef}
                  data-typed-items="frontend-developer,consultant, Freelancer, "
                ></span>
                <span className="typed-cursor" aria-hidden="true"></span>
              </p>
              <div className="social-links">
                <a href="https://t.me/mel188844">
                  <i className="bi bi-telegram"></i>
                </a>
                <a href="https://www.facebook.com/share/1GsmiyaN7n/">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://github.com/tsegadesalegn2123">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/tsega-desalegn-87b1142b3">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}

      {/* About Section */}
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">About Me</span>
          <h2>About Me</h2>
          <p>
            Hello! I'm Tsega Desalegn, a 22-year-old Computer Science student at St.
            Mary's University, an aspiring full-stack developer, and a Case Executive
            (Case Officer) for construction companies. I am passionate about technology,
            problem-solving, and creating innovative digital solutions that address
            real-world challenges.
          </p>
          <p>
            I have experience working with HTML, CSS, JavaScript, React, Angular, Java,
            Spring Boot, and MySQL. Through academic, personal, and collaborative
            projects, I have developed my skills in frontend and backend development,
            teamwork, communication, and software development. I enjoy exploring new
            technologies and transforming creative ideas into responsive, user-friendly
            web applications.
          </p>
          <p>
            In addition to my technical background, I have over four years of experience
            providing home-to-home tutoring for lower-grade students. This experience has
            strengthened my communication, patience, leadership, and interpersonal skills
            while allowing me to support students in achieving their academic goals. I am
            passionate about helping others learn, grow, and build confidence in their
            abilities.
          </p>
          <p>
            My goal is to continue growing as a full-stack developer, expand my technical
            expertise, and contribute to meaningful projects that make a positive impact.
            I believe in continuous learning, collaboration, and using both my technical
            and professional experience to create value, solve problems, and turn ideas
            into reality.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    <img src="/assets/img/profile/main1.jpg" className="img-fluid" alt="" />
                    <div className="status-indicator"></div>
                  </div>
                  <h3>Tsega Desalegn</h3>
                  <span className="role">front end-Developer</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <span>4.8</span>
                  </div>
                </div>

                <div className="profile-stats">
                  <div className="stat-item">
                    <h4>5</h4>
                    <p>Projects</p>
                  </div>
                  <div className="stat-item">
                    <h4>2+</h4>
                    <p>Years</p>
                  </div>
                  <div className="stat-item">
                    <h4>5</h4>
                    <p>Certificates</p>
                  </div>
                </div>

                <div className="profile-actions">
                  <a href="#" className="btn-primary">
                    <i className="bi bi-download"></i> Download CV
                  </a>
                  <a href="#" className="btn-secondary">
                    <i className="bi bi-envelope"></i> Contact
                  </a>
                </div>

                <div className="social-connect">
                  <a href="https://www.linkedin.com/in/tsega-desalegn-87b1142b3">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/tsegadesalegn2123">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://t.me/mel1888">
                    <i className="bi bi-telegram"></i>
                  </a>
                  <a href="https://www.facebook.com/share/1GsmiyaN7n/">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <div className="content-wrapper">
                <div className="bio-section">
                  <div className="section-tag">Education Background</div>
                  <ul>
                    <li>Kindergarten: Progress School</li>
                    <li>Grades 1–6: Ethio-Indian School</li>
                    <li>Grades 7–12: Auxilium Catholic School</li>
                    <li>
                      University: BSc in Computer Science (3rd Year), St. Mary's University
                    </li>
                  </ul>
                </div>
                <div className="details-grid">
                  <div className="detail-item" data-aos="fade-up" data-aos-delay="250">
                    <i className="bi bi-briefcase"></i>
                    <div className="detail-content">
                      <span>Experience</span>
                      <strong>2+ Years</strong>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-mortarboard"></i>
                    <div className="detail-content">
                      <span>Degree</span>
                      <strong>computer Science</strong>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="fade-up" data-aos-delay="350">
                    <i className="bi bi-geo-alt"></i>
                    <div className="detail-content">
                      <span>Address</span>
                      <strong>Addis Ababa,Ethiopia</strong>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                    <i className="bi bi-envelope"></i>
                    <div className="detail-content">
                      <span>Email</span>
                      <strong>tsegadesalegn2123@gmail.com</strong>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="fade-up" data-aos-delay="150">
                    <i className="bi bi-phone"></i>
                    <div className="detail-content">
                      <span>Phone</span>
                      <strong>+251941815846</strong>
                    </div>
                  </div>

                  <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-calendar-check"></i>
                    <div className="detail-content">
                      <span>Availability</span>
                      <strong>Open to Work</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}

      {/* Resume Section */}
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Resume</span>
          <h2>Resume</h2>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="experience-section">
                <div className="section-header" data-aos="fade-right" data-aos-delay="200">
                  <div className="header-content">
                    <span className="section-badge">Experience</span>
                    <h2>Professional Journey</h2>
                    <ul>
                      <li>
                        {' '}
                        I have experience creating simple websites and layouts using
                        Bootstrap and modern design principles.
                      </li>
                      <li>
                        {' '}
                        I have astrong interest in technology, creative design, and
                        problem-solving.
                      </li>
                      <li>
                        {' '}
                        I am able to learn quickly, work independently, and collaborate in
                        team environments.
                      </li>
                      <li>
                        {' '}
                        I am seeking opportunities to grow my skills and contribute to
                        real-world digital projects.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-cards">
                  <div className="exp-card featured" data-aos="zoom-in" data-aos-delay="300">
                    <div className="card-header">
                      <div className="company-logo">
                        <i className="bi bi-laptop"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>junior fullstack developer</h3>
                      <p className="company-name"></p>
                      <span className="duration">2024 - Present</span>
                      <p className="description">
                        I develop aesthetic and functional websites using HTML, CSS, and
                        Bootstrap
                      </p>
                      <div className="skills-tags">
                        <span className="skill-tag">modern</span>
                        <span className="skill-tag">responsive</span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-card" data-aos="zoom-in" data-aos-delay="350">
                    <div className="card-header">
                      <div className="company-logo">
                        <i className="bi bi-bag-check"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Case Executive</h3>
                      <p className="company-name">reviewing cases</p>
                      <span className="duration">2023- present</span>
                      <p className="description">
                        Coordinating with legal, medical, and finance departments
                      </p>
                    </div>
                  </div>

                  <div className="exp-card" data-aos="zoom-in" data-aos-delay="400">
                    <div className="card-header">
                      <div className="company-logo">
                        <i className="bi bi-palette"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Teaching and mentoring</h3>
                      <p className="company-name">Communication and coordination</p>
                      <span className="duration">2022 - present</span>
                      <p className="description">home-to-home tutoring for students.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="education-section">
                <div className="section-header" data-aos="fade-left" data-aos-delay="200">
                  <div className="header-content">
                    <span className="section-badge">Education</span>
                    <h2>Academic Background</h2>

                    <ul>
                      <li> from different institutions</li>
                      <li> degree and certificates</li>
                      <li> 2010 -present </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="education-timeline"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="timeline-track">
                    <div className="timeline-item">
                      <div className="timeline-marker">
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>
                      <div className="timeline-content">
                        <div className="education-meta">
                          <span className="year-range">2010 - 2022</span>
                          <span className="degree-level"></span>
                        </div>
                        <h4>Elementary &amp; High-school </h4>
                        <p className="institution">from kg1-3 progress School</p>
                        <p className="institution">from grade1-6 Ethio-Indian School</p>
                        <p className="institution">
                          from grade 7-12 Auxilium Catholic School
                        </p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-marker">
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>
                      <div className="timeline-content">
                        <div className="education-meta">
                          <span className="year-range">2023 - present</span>
                          <span className="degree-level">Degree</span>
                        </div>
                        <h4>Degree program in computer science</h4>
                        <p className="institution">St.Marry's University</p>
                        <p className="description">
                          regular student in cs and at alx accadamy cyber security
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker">
                        <i className="bi bi-patch-check-fill"></i>
                      </div>
                      <div className="timeline-content">
                        <div className="education-meta">
                          <span className="year-range">2021 - 2025</span>
                          <span className="degree-level">Certificates</span>
                        </div>
                        <h4>Professional Certifications</h4>
                        <div className="certifications-list">
                          <div className="cert-item">
                            <span className="cert-name">
                              emotional intelligence from Kibur College
                            </span>
                            <span className="cert-year">2021</span>
                          </div>
                          <div className="cert-item">
                            <span className="cert-name">
                              Android Developement from Udacity{' '}
                            </span>
                            <span className="cert-year">2025</span>
                          </div>
                          <div className="cert-item">
                            <span className="cert-name">
                              Programming Fundamentals from Udacity
                            </span>
                            <span className="cert-year">2025</span>
                          </div>
                          <div className="cert-item">
                            <span className="cert-name">AI from Udacity</span>
                            <span className="cert-year">2025</span>
                          </div>
                          <div className="cert-item">
                            <span className="cert-name">Data Analysis from Udacity</span>
                            <span className="cert-year">2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Resume Section */}

      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Services</span>
          <h2>Services</h2>
          <p>
            I provide frontend web development services, creating responsive, modern, and
            user-friendly websites. I also offer consulting, mentoring, and teaching
            services to support individuals and teams in learning and professional growth.
            In addition, I assist with case execution and project coordination by
            delivering organized, reliable, and effective support.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {services.map((service, index) => (
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={(index + 1) * 100}
                key={service.title}
              >
                <div className={`service-item${service.featured ? ' featured' : ''}`}>
                  <div className="icon-wrapper">
                    <i className={service.icon}></i>
                  </div>
                  <h4>{service.title}</h4>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Services Section */}

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Projects</span>
          <h2>Projects</h2>
          <p>
            I have worked on more than 6 projects effectively and appropriately,
            delivering quality results with strong attention to detail.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {portfolioFilters.map((filter) => (
                <li
                  key={filter.filter}
                  data-filter={filter.filter}
                  className={activeFilter === filter.filter ? 'filter-active' : ''}
                  onClick={() => handleFilter(filter.filter)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="300"
              ref={isotopeContainerRef}
            >
              {portfolioItems.map((item) => (
                <div
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
                  key={item.img}
                >
                  <div className="portfolio-card">
                    <div className="portfolio-image-container">
                      <img
                        src={`/assets/img/portfolio/${item.img}`}
                        alt={item.alt}
                        className="img-fluid"
                        loading="lazy"
                      />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info">
                          <span className="project-category">{item.category}</span>
                          <h4>{item.title}</h4>
                        </div>
                        <div className="portfolio-actions">
                          <a
                            href={`/assets/img/portfolio/${item.img}`}
                            className="glightbox portfolio-link"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <Link to="/portfolio-details" className="portfolio-details">
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-meta">
                      {item.tags.length > 0 && (
                        <div className="project-tags">
                          {item.tags.map((tag) => (
                            <span className="tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.year && <div className="project-year">{item.year}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio-bottom" data-aos="fade-up" data-aos-delay="400">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3>Like what you see?</h3>
                <p>If you like what you see</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a href="#contact" className="btn btn-accent">
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Portfolio Section */}

      {/* Contact Section */}
      <ContactSection />
      {/* /Contact Section */}
    </>
  )
}

function ContactSection() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('loading')
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Contact</span>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>Addis Ababa,Ethiopia</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+251941815846</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p>tsegadesalegn2123@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              action="/forms/contact.php"
              method="post"
              className="php-email-form"
              onSubmit={handleSubmit}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading" style={{ display: status === 'loading' ? 'block' : 'none' }}>
                    Loading
                  </div>
                  <div
                    className="error-message"
                    style={{ display: status === 'error' ? 'block' : 'none' }}
                  ></div>
                  <div
                    className="sent-message"
                    style={{ display: status === 'sent' ? 'block' : 'none' }}
                  >
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
