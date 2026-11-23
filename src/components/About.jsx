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
          at <strong>Neumont College of Computer Science</strong>, where I build intelligent,
          production-minded software: LLM-powered apps, computer vision models, and the
          full-stack systems that put them in users' hands.
        </p>
        <p>
          My capstone, <strong>OwnHelp</strong> (in progress), is a self-hosted customer-support
          assistant: a fine-tuned <strong>Llama</strong> model with <strong>RAG</strong> that
          businesses run on their own hardware and add to their site with a chat widget. My
          other recent work centers on AI applications too. <strong>StockSense</strong>, which is live,
          uses <strong>GPT-4o Vision</strong> and <strong>pgvector</strong> semantic search to turn a
          photo of a fridge into a searchable inventory. With a team, I built{' '}
          <strong>NeuroScan AI</strong>, which classifies brain tumors from MRI scans using{' '}
          <strong>PyTorch</strong> CNN, ViT, and ConvNeXt models served through{' '}
          <strong>FastAPI</strong>. I have also built a tool-calling agent on the{' '}
          <strong>Claude API</strong> with guardrails such as iteration caps and user confirmation
          for destructive actions.
        </p>
        <p>
          I am comfortable across the whole stack: <strong>React</strong>, <strong>Next.js</strong>,
          {' '}<strong>Node.js</strong>, and <strong>Flutter</strong> on the front end, backed by{' '}
          <strong>PostgreSQL/Supabase</strong> or <strong>MongoDB</strong>, and shipped with{' '}
          <strong>Docker</strong> to platforms like Render and Cloudflare. I have also built and
          deployed a live online shop for my mother's clothing business. I am actively seeking
          opportunities to grow in AI engineering.
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
