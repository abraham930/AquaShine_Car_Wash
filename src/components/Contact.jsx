import { useState } from 'react'
import '../styles/contact.css'

/* ------------------------------------------------------------------ */
/*  Config — swap this email to change the form destination            */
/* ------------------------------------------------------------------ */
const CONTACT_EMAIL = 'santiagoabraham513@gmail.com'

/* ------------------------------------------------------------------ */
/*  Static data                                                         */
/* ------------------------------------------------------------------ */

const BUSINESS_HOURS = [
  { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
  { day: 'Saturday',        time: '8:00 AM – 6:00 PM' },
  { day: 'Sunday',          time: '9:00 AM – 4:00 PM' },
]

const CONTACT_DETAILS = [
  {
    id: 'phone',
    label: 'Phone',
    value: '+1 (555) 284-9200',
    href: 'tel:+15552849200',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: 'hello@aquashine.com',
    href: 'mailto:hello@aquashine.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 8L10.89 13.26C11.22 13.4793 11.6056 13.5963 12 13.5963C12.3944 13.5963 12.78 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'address',
    label: 'Address',
    value: '2840 Clearwater Blvd\nMetroville, CA 90210',
    href: 'https://maps.google.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
      </svg>
    ),
  },
]

const SERVICE_OPTIONS = [
  'Basic Wash',
  'Premium Wash',
  'Interior Deep Clean',
  'Wax & Polish',
  'Engine Bay Cleaning',
  'Other / General Inquiry',
]

/* ------------------------------------------------------------------ */
/*  Form state                                                          */
/* ------------------------------------------------------------------ */

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const INITIAL_ERRORS = {
  firstName: '',
  email: '',
  message: '',
}

function validateForm(values) {
  const errors = { ...INITIAL_ERRORS }
  let valid = true

  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required.'
    valid = false
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!values.message.trim()) {
    errors.message = 'A message is required.'
    valid = false
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
    valid = false
  }

  return { errors, valid }
}

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

function Contact() {
  const [formValues,   setFormValues]   = useState(INITIAL_FORM)
  const [formErrors,   setFormErrors]   = useState(INITIAL_ERRORS)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess,    setIsSuccess]    = useState(false)
  const [submitError,  setSubmitError]  = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }))
    }
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { errors, valid } = validateForm(formValues)
    if (!valid) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    /*
      FormSubmit.co — free, no-backend email relay.
      First submission to a new email triggers a one-time confirmation
      email to the inbox owner. After confirming, all future submissions
      arrive as plain email.

      Hidden fields used:
        _subject  — email subject line in inbox
        _captcha  — disable FormSubmit's default captcha (we have our own UX)
        _template — plain email template (no extra styling noise)
    */
    try {
      const payload = new FormData()
      payload.append('firstName',  formValues.firstName)
      payload.append('lastName',   formValues.lastName)
      payload.append('email',      formValues.email)
      payload.append('phone',      formValues.phone || 'Not provided')
      payload.append('service',    formValues.service || 'Not specified')
      payload.append('message',    formValues.message)
      payload.append('_subject',   `New inquiry from ${formValues.firstName} ${formValues.lastName} — AquaShine`)
      payload.append('_captcha',   'false')
      payload.append('_template',  'table')

      const res = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
        method:  'POST',
        headers: { Accept: 'application/json' },
        body:    payload,
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        setSubmitError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setSubmitError('Could not send your message. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormValues(INITIAL_FORM)
    setFormErrors(INITIAL_ERRORS)
    setIsSuccess(false)
    setSubmitError('')
  }

  return (
    <section id="contact" className="contact">
      <div className="section-wrapper">
        <div className="contact__inner">

          {/* ---- LEFT: Info Panel ---- */}
          <div className="contact__info">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Talk<br />Car Care</h2>
            <p className="contact__info-lead">
              Have a question about our services, want to book a wash, or need a custom
              quote? Drop us a message and we'll get back to you within the hour.
            </p>

            <address className="contact__details" style={{ fontStyle: 'normal' }}>
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.id} className="contact__detail">
                  <div className="contact__detail-icon" aria-hidden="true">
                    {detail.icon}
                  </div>
                  <div className="contact__detail-body">
                    <p className="contact__detail-label">{detail.label}</p>
                    <p className="contact__detail-value">
                      <a
                        href={detail.href}
                        target={detail.id === 'address' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {detail.value.split('\n').map((line, i, arr) => (
                          <span key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </address>

            <div className="contact__hours" aria-label="Business hours">
              <p className="contact__hours-title">Business Hours</p>
              {BUSINESS_HOURS.map(({ day, time }) => (
                <div key={day} className="contact__hours-row">
                  <span className="contact__hours-day">{day}</span>
                  <span className="contact__hours-time">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ---- RIGHT: Form Card ---- */}
          <div className="contact__form-card">

            {isSuccess ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <div className="contact__success-icon" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="contact__success-title">Message Sent!</h3>
                <p className="contact__success-body">
                  Thanks for reaching out! A member of the AquaShine team will
                  be in touch with you within the hour.
                </p>
                <button type="button" className="contact__success-reset" onClick={handleReset}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Book or Inquire</h3>
                <p className="contact__form-subtitle">
                  Fill in your details and we'll be with you shortly.
                </p>

                <form
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  {/* Name row */}
                  <div className="contact__form-row">
                    <div className="contact__field">
                      <label className="contact__label" htmlFor="firstName">
                        First Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className={`contact__input${formErrors.firstName ? ' contact__input--error' : ''}`}
                        placeholder="Marcus"
                        value={formValues.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        aria-required="true"
                        aria-describedby={formErrors.firstName ? 'firstName-error' : undefined}
                      />
                      {formErrors.firstName && (
                        <span id="firstName-error" className="contact__error-msg" role="alert">
                          {formErrors.firstName}
                        </span>
                      )}
                    </div>

                    <div className="contact__field">
                      <label className="contact__label" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="contact__input"
                        placeholder="Reyes"
                        value={formValues.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="email">
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`contact__input${formErrors.email ? ' contact__input--error' : ''}`}
                      placeholder="you@example.com"
                      value={formValues.email}
                      onChange={handleChange}
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <span id="email-error" className="contact__error-msg" role="alert">
                        {formErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone & Service row */}
                  <div className="contact__form-row">
                    <div className="contact__field">
                      <label className="contact__label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="contact__input"
                        placeholder="+1 (555) 000-0000"
                        value={formValues.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>

                    <div className="contact__field">
                      <label className="contact__label" htmlFor="service">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="contact__select"
                        value={formValues.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="message">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`contact__textarea${formErrors.message ? ' contact__textarea--error' : ''}`}
                      placeholder="Tell us about your car or what you're looking for…"
                      value={formValues.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <span id="message-error" className="contact__error-msg" role="alert">
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Network error */}
                  {submitError && (
                    <p className="contact__submit-error" role="alert">{submitError}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="contact__submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          width="18" height="18" viewBox="0 0 24 24" fill="none"
                          aria-hidden="true"
                          style={{ animation: 'spin 0.8s linear infinite' }}
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="contact__form-note">
                    Your message will be sent directly to our team. We typically reply within 1 hour during business hours.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default Contact
