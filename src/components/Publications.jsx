import { FileText, ExternalLink } from 'lucide-react'

const pubs = [
  {
    color: 'blue',
    title: 'Assessing Performance of The Jal Jeevan Mission Using a Geospatial Decision Support System',
    meta: [{ label: 'Conference:', value: 'Center for Public Policy, IIM Bangalore' }],
    link: '#',
  },
  {
    color: 'orange',
    title: 'Central Bank Digital Currency (CBDC) and Application Development',
    meta: [
      { label: 'Authors:', value: 'Dr. Prasenjit Das, Magapu Shanmukh, Chandan Kumar, Shubham Kulkarni' },
      { label: 'DOI:', value: '10.22214/ijraset.2023.57703' },
    ],
    link: '#',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="section bg-slate-50">
      <div className="container-x">
        <h2 className="section-title">Publications</h2>

        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {pubs.map((p, i) => {
            const isBlue = p.color === 'blue'
            return (
              <div
                key={i}
                className={`card p-5 ${isBlue ? 'border-blue-100' : 'border-orange-100'}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ${
                      isBlue ? 'bg-brand-blueLight' : 'bg-brand-orange'
                    }`}
                  >
                    <FileText className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-[15px] font-semibold leading-snug ${
                        isBlue ? 'text-brand-blueLight' : 'text-brand-orange'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <div className="mt-1.5 space-y-0.5">
                      {p.meta.map((m, idx) => (
                        <p key={idx} className="text-[13px] text-slate-600">
                          <span className="font-semibold text-slate-700">{m.label}</span>{' '}
                          {m.value}
                        </p>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border ${
                        isBlue
                          ? 'border-blue-200 text-brand-blueLight hover:bg-blue-50'
                          : 'border-orange-200 text-brand-orange hover:bg-orange-50'
                      }`}
                    >
                      View Publication <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
