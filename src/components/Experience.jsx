import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const jobs = [
  {
    color: 'blue',
    title: 'AI Engineer',
    company: 'AIResQ ClimSols - IIT Gandhinagar Research Park',
    date: 'Nov 2025 - Present',
    bullets: [
      'Worked on data preprocessing pipelines and scenario-based flood modeling across different conditions',
      'Built and experimented with models like U-Net and FNO, incorporating physics-informed constraints for improved realism and generalization',
      'Curated datasets independently by transforming numerical data into structured textual formats, integrating multiple sources',
      'Integrated AI-driven analytics into a multi-layer geospatial dashboard, enabling natural language querying over structured spatial data',
    ],
  },
  {
    color: 'orange',
    title: 'Sr. Project Technical Assistant',
    company: 'Indian Institute of Technology Bombay',
    date: 'Sept 2024 - Oct 2025',
    bullets: [
      'Developed real-time data pipelines in Python for streaming sensor data and integrated predictive time-series models on AWS EC2',
      'Built automated pipelines for large-scale satellite-based atmospheric data downloading, preprocessing, and integration',
      'Developed a data cleaning and standardization module for CPCB ground station data, released as open-source package on PyPI (airpy-tool)',
      'Designed comprehensive ML pipeline with hyperparameter tuning (GridSearchCV, Optuna, Grey Wolf Optimization) for PM2.5 forecasting across 30 Indian cities',
    ],
  },
  {
    color: 'blue',
    title: 'Data Science Intern',
    company: 'Jal Jeevan Mission, IIM Bangalore',
    date: 'Jan 2024 - Aug 2024',
    bullets: [
      'Automated data scraping tasks using Selenium and BeautifulSoup, significantly improving efficiency and accuracy of data collection',
      'Built and deployed district-level dashboards for Karnataka on organization\'s Windows Server',
      'Developed an Indic languages AI chatbot system using RAG architecture, trained on domain-specific and customized data',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="container-x">
        <h2 className="section-title">Work Experience</h2>

        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {jobs.map((job, i) => {
            const isBlue = job.color === 'blue'
            return (
              <div
                key={i}
                className={`card p-5 ${isBlue ? 'border-blue-100' : 'border-orange-100'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ${
                        isBlue ? 'bg-brand-blueLight' : 'bg-brand-orange'
                      }`}
                    >
                      <Briefcase className="text-white" size={18} />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-semibold ${
                          isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                        }`}
                      >
                        {job.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 mt-0.5">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium self-start ${
                      isBlue
                        ? 'bg-blue-50 text-brand-blueLight'
                        : 'bg-orange-50 text-brand-orange'
                    }`}
                  >
                    <Calendar size={11} />
                    {job.date}
                  </div>
                </div>

                <ul className="mt-3.5 space-y-1.5 pl-1">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13px] text-slate-600">
                      <CheckCircle2
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${
                          isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                        }`}
                      />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
