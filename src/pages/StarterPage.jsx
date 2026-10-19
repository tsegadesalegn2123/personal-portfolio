import PageTitle from '../components/PageTitle.jsx'

export default function StarterPage() {
  return (
    <>
      <PageTitle current="Starter Page" />

      {/* Starter Section Section */}
      <section id="starter-section" className="starter-section section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Starter Section</span>
          <h2>Starter Section</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur
            velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </div>
      </section>
      {/* /Starter Section Section */}
    </>
  )
}
