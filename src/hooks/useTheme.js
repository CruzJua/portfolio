import { useEffect, useState } from 'react'

function readSavedTheme() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(readSavedTheme)

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable; theme just won't persist
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}
