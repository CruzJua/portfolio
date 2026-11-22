import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { ChatWidget } from '@ownhelp/widget'

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <About />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Contact />
      </main>
      <ChatWidget
        apiUrl="https://chat.juancruzdev.com"
        tenantId="juan_s_personal_portfolio"
        title="Juan's Portfolio Agent"
        greeting="Are there any questions about Juan I can help you with?"
        position="right"
        accentColor="#0b6e4f"
      />
    </>
  )
}
