import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle.jsx'

export default function NotFound() {
  return (
    <>
      <PageTitle current="404" />

      {/* Error 404 Section */}
      <section id="error-404" className="error-404 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="error-box text-center">
                <div className="error-icon" data-aos="zoom-in" data-aos-delay="200">
                  <i className="bi bi-exclamation-triangle"></i>
                </div>
                <div className="error-code" data-aos="fade-up" data-aos-delay="300">
                  <span>4</span>
                  <span>0</span>
                  <span>4</span>
                </div>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  Page Not Found
                </h2>
                <p data-aos="fade-up" data-aos-delay="500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="error-actions" data-aos="fade-up" data-aos-delay="600">
                  <Link to="/" className="btn-home">
                    <i className="bi bi-house-door"></i>
                    <span>Back to Home</span>
                  </Link>
                  <Link to="/#contact" className="btn-support">
                    <i className="bi bi-headset"></i>
                    <span>Get Support</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Error 404 Section */}
    </>
  )
}
