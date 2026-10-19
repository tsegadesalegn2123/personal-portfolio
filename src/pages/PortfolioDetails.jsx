import { useEffect, useRef } from 'react'
import Swiper from 'swiper/bundle'
import PageTitle from '../components/PageTitle.jsx'

const slides = [
  'portfolio-3.webp',
  'portfolio-6.webp',
  'portfolio-9.webp',
  'portfolio-11.webp',
]

export default function PortfolioDetails() {
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      speed: 600,
      autoplay: { delay: 4000 },
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    })
    return () => swiper.destroy(true, true)
  }, [])

  const projects = [
    { label: 'Client', value: 'TechCorp Solutions' },
    { label: 'Category', value: 'Web Development' },
    { label: 'Date', value: 'March 15, 2024' },
    { label: 'Duration', value: '8 Weeks' },
    { label: 'Technologies', value: 'React, Node.js, MongoDB' },
  ]

  const tags = ['Design', 'Development', 'React', 'UX/UI', 'Frontend', 'Backend']

  return (
    <>
      <PageTitle current="Portfolio Details" />

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Portfolio Details</span>
          <h2>Portfolio Details</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur
            velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper init-swiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                  {slides.map((slide) => (
                    <div className="swiper-slide" key={slide}>
                      <img
                        src={`/assets/img/portfolio/${slide}`}
                        alt="Portfolio Image"
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>

              <div className="portfolio-content" data-aos="fade-up" data-aos-delay="200">
                <h2>Innovative Digital Platform</h2>

                <div className="meta-info">
                  <span className="date">
                    <i className="bi bi-calendar"></i> March 15, 2024
                  </span>
                  <span className="category">
                    <i className="bi bi-tag"></i> Web Development
                  </span>
                  <span className="client">
                    <i className="bi bi-building"></i> TechCorp Solutions
                  </span>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>

                <h3>Project Overview</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>

                <div className="highlights-box">
                  <h4>Key Highlights</h4>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i> Responsive design across all
                      devices
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Advanced user authentication
                      system
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Real-time data synchronization
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Optimized performance and
                      loading speed
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i> Comprehensive admin dashboard
                    </li>
                  </ul>
                </div>

                <h3>Technical Implementation</h3>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>

                <blockquote>
                  <i className="bi bi-quote quote-icon"></i>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="author">
                    <img src="/assets/img/person/person-m-7.webp" alt="Author" />
                    <div className="author-info">
                      <h5>Michael Anderson</h5>
                      <span>Project Lead</span>
                    </div>
                  </div>
                </blockquote>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar" data-aos="fade-up" data-aos-delay="200">
                <div className="info-card">
                  <h3>Project Details</h3>
                  {projects.map((project) => (
                    <div className="info-item" key={project.label}>
                      <span className="label">{project.label}</span>
                      <span className="value">{project.value}</span>
                    </div>
                  ))}
                  <a
                    href="https://www.example.com"
                    className="btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> View Live Project
                  </a>
                </div>

                <div className="share-card" data-aos="fade-up" data-aos-delay="300">
                  <h3>Share This Project</h3>
                  <div className="social-links">
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="pinterest">
                      <i className="bi bi-pinterest"></i>
                    </a>
                  </div>
                </div>

                <div className="tags-card" data-aos="fade-up" data-aos-delay="400">
                  <h3>Tags</h3>
                  <div className="tags">
                    {tags.map((tag) => (
                      <a href="#" key={tag}>
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Portfolio Details Section */}
    </>
  )
}
