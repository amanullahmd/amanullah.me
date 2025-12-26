'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-300 mb-2">
              <a href="mailto:contact@amanullah.me" className="hover:text-primary transition-colors">
                contact@amanullah.me
              </a>
            </p>
            <p className="text-slate-300 mb-2">
              <a href="tel:+491781885400" className="hover:text-primary transition-colors">
                +49 178 188 5400
              </a>
            </p>
            <p className="text-slate-300">Gießen, Germany</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/amanullahmd/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">GitHub</a>
              <a href="https://www.linkedin.com/in/m-amanullah/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400">
            © {currentYear} MD Amanullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
