import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-x">
        <h2 className="section-title">Get in Touch</h2>

        <div className="mt-8 max-w-xl mx-auto card p-6 text-center">
          <p className="text-sm text-slate-600 leading-relaxed">
            I'm always interested in hearing about new opportunities, collaborations, or just
            connecting with fellow AI/ML enthusiasts. Feel free to reach out!
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <a href="mailto:chandan@example.com" className="btn-primary">
              <Mail size={15} /> Email Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
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
          </div>
        </div>
      </div>
    </section>
  )
}
