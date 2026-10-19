import PageTitle from '../components/PageTitle.jsx'

const navLinks = [
  { href: '#introduction', label: 'Introduction', active: true },
  { href: '#information-collect', label: 'Information We Collect' },
  { href: '#use-information', label: 'How We Use Data' },
  { href: '#sharing', label: 'Information Sharing' },
  { href: '#security', label: 'Data Security' },
  { href: '#rights', label: 'Your Rights' },
  { href: '#changes', label: 'Policy Updates' },
  { href: '#contact', label: 'Contact Us' },
]

const automatedItems = [
  'Nam libero tempore, cum soluta nobis',
  'Temporibus autem quibusdam et aut',
  'Itaque earum rerum hic tenetur',
  'Sed ut perspiciatis unde omnis',
]

const personalItems = [
  'Sed quia consequuntur magni dolores eos',
  'Neque porro quisquam est',
  'Quis autem vel eum iure reprehenderit',
  'At vero eos et accusamus',
]

const usageItems = [
  'Omnis dolor repellendus temporibus autem',
  'Itaque earum rerum hic tenetur sapiente',
  'Nam libero tempore cum soluta nobis',
  'Temporibus autem quibusdam et aut officiis',
  'At vero eos et accusamus dignissimos',
  'Et harum quidem rerum facilis expedita',
]

const legalItems = [
  'Voluptatem sequi nesciunt neque porro',
  'Quisquam est qui dolorem ipsum quia',
  'Dolor sit amet consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt labore',
]

const securityFeatures = [
  {
    icon: 'bi bi-shield-lock',
    title: 'Encryption',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod',
  },
  {
    icon: 'bi bi-eye-slash',
    title: 'Access Control',
    text: 'Tempor incididunt ut labore et dolore magna aliqua ut enim minim veniam',
  },
  {
    icon: 'bi bi-database-lock',
    title: 'Data Protection',
    text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo',
  },
]

const rights = [
  {
    icon: 'bi bi-folder2-open',
    title: 'Access Your Data',
    text: 'Excepteur sint occaecat cupidatat non proident sunt in culpa',
  },
  {
    icon: 'bi bi-pencil-square',
    title: 'Correct Information',
    text: 'Qui officia deserunt mollit anim id est laborum sed ut',
  },
  {
    icon: 'bi bi-trash',
    title: 'Delete Your Data',
    text: 'Perspiciatis unde omnis iste natus error sit voluptatem',
  },
  {
    icon: 'bi bi-ban',
    title: 'Object to Processing',
    text: 'Accusantium doloremque laudantium totam rem aperiam',
  },
]

export default function Privacy() {
  return (
    <>
      <PageTitle current="Privacy" />

      {/* Privacy Section */}
      <section id="privacy" className="privacy section">
        <div className="container">
          <div className="row">
            {/* Sidebar Navigation */}
            <div className="col-lg-3">
              <div className="policy-sidebar" data-aos="fade-right">
                <h3>Contents</h3>
                <nav className="policy-nav">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      className={`nav-link${link.active ? ' active' : ''}`}
                      key={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              <div className="policy-main">
                {/* Header */}
                <div className="policy-hero" data-aos="fade-up">
                  <div className="badge">Last Updated: February 27, 2025</div>
                  <h1>Privacy Policy</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                {/* Introduction */}
                <div
                  className="policy-section"
                  id="introduction"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="section-number">01</div>
                  <h2>Introduction</h2>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                {/* Information Collection */}
                <div
                  className="policy-section"
                  id="information-collect"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="section-number">02</div>
                  <h2>Information We Collect</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>

                  <div className="info-card">
                    <div className="card-icon">
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="card-content">
                      <h3>Personal Information</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit:
                      </p>
                      <ul>
                        {personalItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="card-icon">
                      <i className="bi bi-gear-fill"></i>
                    </div>
                    <div className="card-content">
                      <h3>Automated Data Collection</h3>
                      <p>Et harum quidem rerum facilis est et expedita distinctio:</p>
                      <ul>
                        {automatedItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Use of Information */}
                <div
                  className="policy-section"
                  id="use-information"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="section-number">03</div>
                  <h2>How We Use Your Information</h2>
                  <p>
                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized:
                  </p>
                  <div className="usage-grid">
                    {usageItems.map((item) => (
                      <div className="usage-item" key={item}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Information Sharing */}
                <div
                  className="policy-section"
                  id="sharing"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <div className="section-number">04</div>
                  <h2>Information Sharing and Disclosure</h2>
                  <p>
                    These cases are perfectly simple and easy to distinguish. In a free
                    hour, when our power of choice is untrammelled:
                  </p>

                  <div className="sharing-box">
                    <h3>With Your Consent</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore.
                    </p>
                  </div>

                  <div className="sharing-box">
                    <h3>Legal Requirements</h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione:
                    </p>
                    <ul>
                      {legalItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div
                  className="policy-section"
                  id="security"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="section-number">05</div>
                  <h2>Data Security</h2>
                  <p>
                    But I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born:
                  </p>
                  <div className="security-features">
                    {securityFeatures.map((feature) => (
                      <div className="feature" key={feature.title}>
                        <i className={feature.icon}></i>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Your Rights */}
                <div
                  className="policy-section"
                  id="rights"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="section-number">06</div>
                  <h2>Your Rights and Choices</h2>
                  <p>
                    Nor again is there anyone who loves or pursues or desires to obtain
                    pain of itself, because it is pain:
                  </p>
                  <div className="rights-list">
                    {rights.map((right) => (
                      <div className="right-item" key={right.title}>
                        <div className="right-icon">
                          <i className={right.icon}></i>
                        </div>
                        <div className="right-content">
                          <h4>{right.title}</h4>
                          <p>{right.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Policy Updates */}
                <div
                  className="policy-section"
                  id="changes"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="section-number">07</div>
                  <h2>Changes to This Policy</h2>
                  <p>
                    To take a trivial example, which of us ever undertakes laborious
                    physical exercise, except to obtain some advantage from it.
                  </p>
                  <p>
                    But who has any right to find fault with a man who chooses to enjoy a
                    pleasure that has no annoying consequences.
                  </p>
                </div>

                {/* Contact Section */}
                <div
                  className="policy-contact"
                  id="contact"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="contact-card">
                    <h2>Need Help?</h2>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis praesentium:
                    </p>
                    <div className="contact-info">
                      <div className="info-item">
                        <i className="bi bi-envelope"></i>
                        <div>
                          <strong>Email Address</strong>
                          <span>privacy@example.com</span>
                        </div>
                      </div>
                      <div className="info-item">
                        <i className="bi bi-geo-alt"></i>
                        <div>
                          <strong>Office Location</strong>
                          <span>742 Evergreen Terrace, Springfield, IL 62701</span>
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
      {/* /Privacy Section */}
    </>
  )
}
