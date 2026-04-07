import { FolderKanban, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    color: 'blue',
    title: 'Advanced RAG',
    description:
      'A sophisticated PDF question-answering chatbot that implements multiple advanced Retrieval-Augmented Generation (RAG) techniques for improved accuracy and reasoning capabilities.',
    tags: ['LangChain', 'LlamaIndex', 'Vector Database', 'Knowledge Graph', 'Chain-of-Thought'],
    highlights: [
      'Designed modular RAG system adapting to query complexity using multiple reasoning strategies',
      'Implemented Auto Mode to dynamically select appropriate retrieval and reasoning approach',
      'Developed session-scoped memory to maintain conversational context and improve multi-step query handling',
    ],
    techniques: [
      {
        color: 'blue',
        name: 'LLM-Powered Decomposition',
        text: 'Breaks complex questions into simpler sub-questions',
      },
      {
        color: 'orange',
        name: 'Chain-of-Thought (CoT) Prompting',
        text: 'Uses step-by-step reasoning to answer questions',
      },
      {
        color: 'blue',
        name: 'Graph-Based Reasoning',
        text: 'Builds and queries a knowledge graph of entities and relationships',
      },
      {
        color: 'orange',
        name: 'Auto Mode Selection',
        text: 'Automatically chooses the best technique based on question complexity',
      },
    ],
  },
  {
    color: 'orange',
    title: 'Route-Planner',
    description:
      'Built a train search app with AI-powered personalized recommendations for travel planning.',
    tags: ['Playwright', 'vLLM', 'FastAPI', 'Local LLM'],
    highlights: [
      'Built train search using Playwright for faster scraping, cutting search time by 3-4x compared to Selenium',
      'Served local LLM via vLLM for inference, generating personalized train recommendations based on user preferences',
      'Exposed search and recommendation features through a versioned FastAPI',
    ],
  },
  {
    color: 'blue',
    title: 'Student Performance Prediction',
    description:
      'Machine learning system to classify student performance with end-to-end pipeline and deployment.',
    tags: ['Scikit-learn', 'Flask', 'AWS EC2', 'MongoDB'],
    highlights: [
      'Developed ML model following industrial approach with pipelining for efficient data ingestion and prediction workflows',
      'Built Flask webapp and deployed on AWS EC2 monolithic server',
      'Integrated user authentication and secure data storage using MongoDB',
    ],
  },
]

function ProjectCard({ project }) {
  const isBlue = project.color === 'blue'
  return (
    <div className={`card p-5 ${isBlue ? 'border-blue-100' : 'border-orange-100'}`}>
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ${
            isBlue ? 'bg-brand-blueLight' : 'bg-brand-orange'
          }`}
        >
          <FolderKanban className="text-white" size={18} />
        </div>
        <div className="flex-1">
          <h3
            className={`text-base font-semibold ${
              isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
            }`}
          >
            {project.title}
          </h3>
          <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className={isBlue ? 'chip-blue' : 'chip-orange'}>
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <h4
          className={`text-[13px] font-semibold mb-1.5 ${
            isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
          }`}
        >
          Key Highlights:
        </h4>
        <ul className="space-y-1.5 pl-1">
          {project.highlights.map((h, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[13px] text-slate-600">
              <CheckCircle2
                size={14}
                className={`mt-0.5 flex-shrink-0 ${
                  isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                }`}
              />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.techniques && (
        <div className="mt-4">
          <h4 className="text-[13px] font-semibold text-brand-blueLight mb-2">
            Advanced RAG Techniques:
          </h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {project.techniques.map((t, idx) => {
              const tBlue = t.color === 'blue'
              return (
                <div
                  key={idx}
                  className={`p-2.5 rounded-md border ${
                    tBlue
                      ? 'bg-blue-50/50 border-blue-100'
                      : 'bg-orange-50/50 border-orange-100'
                  }`}
                >
                  <p
                    className={`text-[12px] font-semibold ${
                      tBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                    }`}
                  >
                    {t.name}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">{t.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section bg-slate-50">
      <div className="container-x">
        <h2 className="section-title">Featured Projects</h2>

        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
