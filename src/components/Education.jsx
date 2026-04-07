import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="section bg-white">
      <div className="container-x">
        <h2 className="section-title">Education</h2>

        <div className="mt-8 max-w-3xl mx-auto">
          <div className="card p-5 border-blue-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-brand-blueLight flex items-center justify-center">
                <GraduationCap className="text-white" size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-brand-blueLight">
                  B.Tech in Computer Science and Technology
                </h3>
                <p className="text-xs font-medium text-slate-600 mt-0.5">
                  University of Engineering and Management, Kolkata
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip-blue">2020 - 2024</span>
                  <span className="chip-orange inline-flex items-center gap-1">
                    <Award size={11} /> CGPA: 8.8/10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
