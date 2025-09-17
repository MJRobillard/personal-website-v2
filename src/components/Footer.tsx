export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border-color py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-foreground/75">
                <a 
                  href="https://mjrobillard.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  mjrobillard.com
                </a>
              </p>
              <p className="text-foreground/75">
                <a 
                  href="mailto:matthew.robillard@berkeley.edu"
                  className="hover:text-accent transition-colors"
                >
                  matthew.robillard@berkeley.edu
                </a>
              </p>
              <p className="text-foreground/75">
                <a 
                  href="https://github.com/MJRobillard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @MJRobillard
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p>
                <a 
                  href="#about" 
                  className="text-foreground/75 hover:text-accent transition-colors"
                >
                  About
                </a>
              </p>
              <p>
                <a 
                  href="#projects" 
                  className="text-foreground/75 hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </p>
              <p>
                <a 
                  href="#timeline" 
                  className="text-foreground/75 hover:text-accent transition-colors"
                >
                  Timeline
                </a>
              </p>
              <p>
                <a 
                  href="#contact" 
                  className="text-foreground/75 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
            <p className="text-foreground/75 text-sm">
              UC Berkeley student exploring the intersection of history and data science. 
              Building tools that bridge the past and present through technology.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-color pt-6 text-center">
          <p className="text-sm text-foreground/60">
            © 2024 Matthew Robillard. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}


