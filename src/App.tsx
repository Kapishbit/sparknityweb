import './App.css'
import { siteContent } from './data/siteContent'
import logo from '../sparknity logo H.png'

function App() {
  const { brand, hero, about, missionVision, values, services, difference, industries, cta } = siteContent

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <img src={logo} alt="Sparknity logo" className="brand-logo" />
          <span>{brand.name}</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.headline}</h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">{hero.primaryCta}</a>
              <a className="button secondary" href="#services">{hero.secondaryCta}</a>
            </div>
            <p className="tagline">{brand.tagline}</p>
          </div>
          <div className="hero-panel" aria-label="Sparknity overview">
            <div className="panel-card accent-panel">
              <div className="logo-badge">
                <img src={logo} alt="Sparknity logo" />
              </div>
              <p className="panel-label">What we build</p>
              <h2>Scalable products, intelligent systems, and lasting business growth.</h2>
            </div>
            <div className="panel-card muted">
              <p className="panel-label">How we work</p>
              <p>
                We align product strategy, technology, and commercial thinking so every solution moves the business forward.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section-grid">
          <div>
            <p className="section-label">About Sparknity</p>
            <h2>{about.heading}</h2>
          </div>
          <div>
            <p>{about.body}</p>
            <ul className="bullet-list">
              {about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mission-section">
          <div className="section-heading">
            <p className="section-label">Mission & Vision</p>
            <h2>Built to create long-term value for ambitious organizations.</h2>
          </div>
          <div className="card-grid">
            {missionVision.map((item) => (
              <article className="info-card" key={item.label}>
                <p className="panel-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid alt">
          <div>
            <p className="section-label">Our values</p>
            <h2>{values.heading}</h2>
            <p>{values.intro}</p>
          </div>
          <div>
            <div className="pill-list">
              {values.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-heading">
            <p className="section-label">What we do</p>
            <h2>{services.heading}</h2>
            <p>{services.intro}</p>
          </div>
          <div className="card-grid">
            {services.items.map((service) => (
              <article className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid">
          <div>
            <p className="section-label">Our difference</p>
            <h2>{difference.heading}</h2>
            <p>{difference.intro}</p>
          </div>
          <div>
            <ul className="bullet-list">
              {difference.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="industries-section">
          <div className="section-heading">
            <p className="section-label">Who we support</p>
            <h2>{industries.heading}</h2>
            <p>{industries.intro}</p>
          </div>
          <div className="pill-list large">
            {industries.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-section">
          <h2>{cta.heading}</h2>
          <p>{cta.body}</p>
          <a className="button primary" href="mailto:hello@sparknity.com">{cta.button}</a>
        </section>
      </main>
    </div>
  )
}

export default App
