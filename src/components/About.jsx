import '../styles/about.css'

const ABOUT_POINTS = [
  {
    id: 'experience',
    label: 'Over a decade of expertise',
    text: '<strong>12 years of experience</strong> serving our local community with professional car care you can trust.',
  },
  {
    id: 'quality',
    label: 'Commitment to quality',
    text: 'We use <strong>premium, eco-friendly products</strong> that are tough on dirt but gentle on your paint and the environment.',
  },
  {
    id: 'satisfaction',
    label: 'Customer satisfaction first',
    text: 'Your satisfaction is our top priority. <strong>Not happy? We re-wash for free.</strong> No questions asked.',
  },
  {
    id: 'team',
    label: 'Friendly, professional team',
    text: 'Our trained technicians treat every car <strong>as if it were their own</strong> — with care, precision, and pride.',
  },
]

const STATS = [
  { number: '12+', label: 'Years Active'    },
  { number: '50K', label: 'Cars Washed'     },
  { number: '98%', label: 'Satisfaction'    },
  { number: '4.9★', label: 'Google Rating' },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="section-wrapper">
        <div className="about__inner">

          {/* Left — Text Content */}
          <div className="about__content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title section-title--light">
              Built on Shine,<br />Driven by Pride
            </h2>

            <p className="about__lead">
              AquaShine was founded in 2012 by Marcus & Elena Reyes — two car enthusiasts
              who believed the local community deserved a car wash that actually cares.
              What started as a two-bay operation has grown into the city's most trusted
              auto detailing destination.
            </p>

            <ul className="about__points" role="list">
              {ABOUT_POINTS.map((point) => (
                <li key={point.id} className="about__point">
                  <span className="about__point-icon" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <p
                    className="about__point-text"
                    dangerouslySetInnerHTML={{ __html: point.text }}
                  />
                </li>
              ))}
            </ul>

            {/* Team row */}
            <div className="about__signature">
              <div className="about__avatar-stack" aria-hidden="true">
                <div className="about__avatar about__avatar--a">M</div>
                <div className="about__avatar about__avatar--b">E</div>
                <div className="about__avatar about__avatar--c">J</div>
              </div>
              <div className="about__signature-text">
                <strong>Marcus, Elena &amp; the AquaShine Team</strong>
                Proudly serving our community since 2012
              </div>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="about__visual">
            <div className="about__card">
              <div className="about__card-glow" aria-hidden="true" />

              {/* Stat tiles */}
              <div className="about__stat-tiles" role="list" aria-label="Company statistics">
                {STATS.map((stat) => (
                  <div key={stat.label} className="about__tile" role="listitem">
                    <p className="about__tile-number">{stat.number}</p>
                    <p className="about__tile-label">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="about__quote">
                <p className="about__quote-text">
                  "We started AquaShine because we believed every car — no matter the make
                  or model — deserves to look its best. That belief hasn't changed one bit."
                </p>
                <footer className="about__quote-author">— Marcus Reyes, Co-Founder</footer>
              </blockquote>

              {/* Spinning badge */}
              <div className="about__badge" aria-label="Established since 2012">
                <div className="about__badge-inner">
                  <p className="about__badge-number">12</p>
                  <p className="about__badge-text">Years of<br />Shine</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
