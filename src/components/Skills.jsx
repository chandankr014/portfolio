const skills = [
  {
    title: 'Programming',
    color: 'blue',
    items: ['Python', 'Object-Oriented Programming', 'Data Structures and Algorithms'],
  },
  {
    title: 'Machine Learning & Deep Learning',
    color: 'blue',
    items: [
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Ray',
      'Optuna',
      'Neural Network Architecture',
      'Transfer Learning',
      'Time Series Forecasting',
    ],
  },
  {
    title: 'LLMs & Agentic AI',
    color: 'orange',
    items: [
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'OpenAI',
      'Vector Database',
      'RAG Pipeline',
      'Prompt Engineering',
      'MCP',
    ],
  },
  {
    title: 'MLOps & Deployment',
    color: 'blue',
    items: [
      'FastAPI',
      'Flask',
      'Docker',
      'Git',
      'MLflow',
      'Weights & Biases',
      'CI/CD with GitHub Actions',
      'ONNX Runtime',
      'Kubernetes (basics)',
    ],
  },
  {
    title: 'Data Processing',
    color: 'blue',
    items: ['NumPy', 'Pandas', 'PySpark', 'GeoPandas', 'Folium', 'Web Scraping'],
  },
  {
    title: 'Cloud & Databases',
    color: 'orange',
    items: [
      'AWS (EC2, S3, Lambda)',
      'MongoDB',
      'SQLite',
      'NoSQL',
      'Satellite & Earth Observation Data Pipelines',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-slate-50">
      <div className="container-x">
        <h2 className="section-title">Technical Skills</h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => {
            const isBlue = s.color === 'blue'
            return (
              <div
                key={s.title}
                className={`card p-4 ${isBlue ? 'border-blue-100' : 'border-orange-100'}`}
              >
                <h3
                  className={`text-sm font-semibold mb-3 ${
                    isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                  }`}
                >
                  {s.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className={isBlue ? 'chip-blue' : 'chip-orange'}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
