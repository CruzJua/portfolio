const contacts = [
  {
    label: 'Email',
    text: 'tonocruz9000@gmail.com',
    href: 'mailto:tonocruz9000@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    text: 'github.com/CruzJua',
    href: 'https://github.com/CruzJua',
    icon: <img src="/images/github.svg" className="contact-icon" alt="GitHub" />,
  },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/juan-cruz',
    href: 'https://www.linkedin.com/in/juan-cruz-b5b8272b2/',
    icon: '\u{1F465}',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <h1>Get In Touch</h1>
      <span className="availability-badge">&#9679; Available for Opportunities</span>
      <p className="contact-tagline">
        Whether you have an internship opportunity, a project idea, or just want to connect —
        my inbox is always open. I look forward to hearing from you.
      </p>

      <div className="contact-card-grid">
        {contacts.map((c) => (
          <a className="contact-card" href={c.href} target="_blank" rel="noreferrer" key={c.label}>
            <span className="contact-card-icon">{c.icon}</span>
            <div className="contact-card-text">
              <strong>{c.label}</strong>
              <span>{c.text}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
