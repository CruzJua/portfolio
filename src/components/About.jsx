import { useEffect, useState } from 'react'

const SLIDE_COUNT = 3

export default function About() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDE_COUNT), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about-me">
      <h1>Welcome</h1>
      <article id="main-biography">
        <p>
          Hello, my name is <em>Juan Cruz</em>. I am an <strong>AI Engineering</strong> student
          at <strong>Neumont College of Computer Science</strong>, where I am developing deep
          expertise in machine learning, intelligent systems, full-stack web development, and
          modern software engineering practices.
        </p>
        <p>
          On the web development side, I design and deploy full-stack applications using
          <strong> Node.js</strong> and <strong>Express</strong> with <strong>MongoDB</strong>
          {' '}for data persistence, one of which is currently live on
          {' '}<strong>Render</strong>. I am comfortable working across the entire stack, from
          designing RESTful APIs and database schemas to crafting responsive front-end interfaces.
          I also containerize my development environments using <strong>Docker</strong>, keeping
          deployments consistent and reproducible.
        </p>
        <p>
          In the machine learning space, I have worked with regression, classification, and
          clustering algorithms using <strong>scikit-learn</strong>, <strong>pandas</strong>,
          {' '}and <strong>NumPy</strong>, applying these models to real-world public datasets from
          Kaggle and sklearn. I am passionate about the intersection of data, intelligent systems,
          and practical software, and I am actively seeking opportunities to grow in this space.
        </p>
      </article>
      <img
        className="selfie"
        id="selfie"
        src={`/images/slide${slide}.jpg`}
        alt="Photo of Juan Cruz"
      />
    </section>
  )
}
