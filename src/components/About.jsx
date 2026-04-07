import { Code2, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: Code2,
    title: 'Technical Expertise',
    color: 'blue',
    text: 'Specialized in building intelligent systems using cutting-edge AI/ML technologies. Proficient in deep learning frameworks, LLM applications, and MLOps practices.',
  },
  {
    icon: Sparkles,
    title: 'Innovation Focus',
    color: 'orange',
    text: 'Passionate about implementing advanced RAG techniques, building agentic AI systems, and creating data-driven solutions that solve real-world problems.',
  },
]

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x">
        <h2 className="section-title">About Me</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {cards.map((c) => {
            const Icon = c.icon
            const isBlue = c.color === 'blue'
            return (
              <div
                key={c.title}
                className={`card p-5 ${isBlue ? 'border-blue-100' : 'border-orange-100'}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    isBlue ? 'bg-brand-blueLight' : 'bg-brand-orange'
                  }`}
                >
                  <Icon className="text-white" size={18} />
                </div>
                <h3
                  className={`text-base font-semibold mb-1.5 ${
                    isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                  }`}
                >
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
