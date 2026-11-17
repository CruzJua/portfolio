import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

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
    </>
  )
}
