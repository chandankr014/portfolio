import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-blue to-brand-blueLight text-white">
      <div className="container-x py-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-base font-bold">Chandan Kumar</h3>
            <p className="text-xs text-blue-100 mt-0.5">AI Engineer</p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:chandan@example.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 text-center text-xs text-blue-100">
          © 2026 Chandan Kumar. Built with React and FastAPI.
        </div>
      </div>
    </footer>
  )
}
