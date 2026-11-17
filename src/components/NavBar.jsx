import useTheme from '../hooks/useTheme.js'
import useScrolled from '../hooks/useScrolled.js'

const links = [
  { href: '#about-me', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrolled()

  return (
    <div className={`nav-container${scrolled ? ' shadow' : ''}`} id="nav-container">
      <button
        className={`theme-toggle${theme === 'light' ? ' light-toggle' : ''}`}
        id="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      />
      <nav className="navbar" aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <a key={href} href={href}>
            <button className="nav-button">{label}</button>
          </a>
        ))}
      </nav>
    </div>
  )
}
