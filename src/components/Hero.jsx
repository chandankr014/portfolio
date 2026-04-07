import { Github, Linkedin, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="hero-bg pt-24 pb-12 relative overflow-hidden">
      <div className="container-x text-center">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-brand-blueLight text-white text-xs font-medium shadow-sm">
          Welcome to my portfolio
        </div>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-brand-blue tracking-tight">
          Chandan Kumar
        </h1>

        <p className="mt-2 text-xl md:text-2xl font-semibold text-brand-orange">
          AI Engineer
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed">
          AI Engineer working across ML systems, LLM applications, and RAG pipelines, with
          experience in geospatial and environmental modeling. Built end-to-end data and ML
          workflows, deployed models on AWS, and developed tooling that accelerates analysis
          and automation.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-orange"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <a
          href="#about"
          className="mt-10 inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white shadow-sm text-slate-500 hover:text-brand-blueLight transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  )
}
