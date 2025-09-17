import Image from "next/image";
import TechTicker from "../components/TechTicker";
import PhoneVisual from "../components/PhoneVisual";
import TimelineSectionItem from "../components/TimelineSectionItem";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <section id="about" className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-32 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-semibold drop-shadow">
                History & Data Science Portfolio
              </h1>
              <p className="mt-2 text-white/60 italic">
                (UC Berkeley 2026 build — patch notes pending)
              </p>


              <p className="mt-4 text-white/85 text-lg sm:text-xl">
                When does data become history? When does history become data? Are models historians?
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="card-base card-double-gradient card-double-gradient--history history-typography history-emphasis">
                  <h3 className="text-xl font-semibold text-foreground">History</h3>
                  <p className="mt-2 text-foreground/75">
                    The first step of the scientific method. What&apos;s been tried before, and guide how we may improve. 
                  </p>
                  <p className="mt-2 text-foreground/60 italic">
                    (A record of our bad ideas so we can laugh before repeating them.)
                  </p>
                </div>

                <div className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis">
                  <h3 className="text-xl font-semibold text-foreground">Data Science</h3>
                  <p className="mt-2 text-foreground/75">
                    The final step of the scientific method. Making sense of the information to make the &apos;best&apos; decision. 
                  </p>
                  <p className="mt-2 text-foreground/60 italic">
                  (Or a LLM doing horoscopes, overfit on Scorpios and a dropout process scheduled for Mercury retrograde.)
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
              <div className="hero-image-depth inline-block">
                <div className="relative w-full max-w-[750px] rounded-xl overflow-hidden border border-white/15 shadow-xxl">
                  <Image
                    src="/Vertical%20Hero2.jpg"
                    alt="MJRobillard Vertical Hero2"
                    width={380}
                    height={520}
                    sizes="(max-width: 1024px) 90vw, 680px"
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TechTicker Section - Enhanced with new variants */}
      <TechTicker variant="marquee" />
      <TechTicker variant="technologies" />

      {/* Demo of other variants - you can switch between them */}
      {/* <TechTicker variant="collapsible" /> */}
      {/* <TechTicker variant="dual-layer" /> */}

      <section id="timeline" className="py-20 bg-muted transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4 text-accent section-title">What I&apos;m Working on Today</h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto">
              Current projects and research spanning the intersection of history and data science
            </p>
          </div>
          <div className="timeline relative">
            <div className="timeline-line" aria-hidden="true" />
            <div className="space-y-16">
              <TimelineSectionItem 
                side="right" 
                type="data" 
                year="Summer 2025 -" 
                category="DATA SCIENCE" 
                title="Lithium Valley anomoly and risk assesment dashboard" 
                description="Developing Data Science tools for anomaly detection and risk contour for Lithium Valley development with combining policy metrics, land ownership using the investment timeline problem with risky cashflow[1] and coordinating with USGS, BLM, Benchmark, and other organizations." 
                citations={[ 
                  { 
                    id: "1", 
                    text: "[1] McDonald, Robert, and Daniel Siegel. \"The Value of Waiting to Invest.\" The Quarterly Journal of Economics 101, no. 4 (1986): 707-27. https://doi.org/10.2307/1884175." 
                  } 
                ]} 
                tags={["Geopandas", "Arcgis", "Tableau", "Google Earth", "Github"]} 
              />
              
              <TimelineSectionItem 
                side="left" 
                type="data" 
                year="Summer 2025 -" 
                category="Community" 
                title="Salsa At Cal Networking Workshop Platform" 
                description="Combining React, Node.js, MongoDB, Firebase, and more to help those interested in latin dancing and profesional development to combine the two through Salsa At Cal" 
                citations={[ 
                  { 
                    id: "2", 
                    text: "[1] https://salsaatcal.com/" 
                  } 
                ]} 
                tags={["React", "Node.js", "MongoDB", "Firebase", "Github","Vercel"]} 
              />
              
              <TimelineSectionItem 
                side="right" 
                type="history" 
                year="Fall 2025 -" 
                category="HISTORICAL" 
                title="Senior Thesis" 
                description="Researching the evolution of historical mediums, from oral histories, to written narratives, to digital records, websites, and beyond." 
                tags={["Research", "Comparitive Histiography"]} 
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-background transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-accent dark:text-accent-2">Featured Project</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Project Demo - iPhone-like iframe */}
            <div className="order-2 lg:order-1">
              <PhoneVisual
                src="https://pacman-ai-five.vercel.app/demo"
                title="Pacman AI Demo"
              />
            </div>

            {/* Project Description */}
            <div className="order-1 lg:order-2">
              <div className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis">
                <div className="text-sm text-accent-2 font-mono mb-2">FEATURED PROJECT</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Pacman AI Agent</h3>
                <p className="text-foreground/75 mb-4 text-lg">
                  An application to showcase advanced AI search algorithms through something many know and love: Pacman. 
                  Featuring Depth-First Search (DFS), Breadth-First Search (BFS), Uniform Cost Search (UCS), A* Search, 
                  and multi-agent strategies like Minimax, Alpha-Beta Pruning, and Expectimax.
                </p>
                <p className="text-foreground/60 mb-6 italic">
                  Experience the demo in the interactive iframe, or explore the full project 
                  with source code, documentation, and additional features.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="space-y-2 text-sm text-foreground/75">
                    <div><strong>Frontend:</strong> React.js, Next.js</div>
                    <div><strong>Styling:</strong> Tailwind CSS</div>
                    <div><strong>UI Components:</strong> Headless UI, Heroicons</div>
                    <div><strong>Development Tools:</strong> TypeScript, Node.js, npm</div>
                    <div><strong>Algorithms:</strong> DFS, BFS, UCS, A* Search, Reflex Agent, Minimax, Alpha-Beta Pruning, Expectimax</div>
                    <div><strong>Visualization:</strong> Custom real-time animations for maze exploration</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">AI/ML</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">A* Search</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Minimax</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Algorithm Design</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://pacman-ai-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>View Full Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://pacman-ai-five.vercel.app/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <span>Try Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-accent">Get In Touch</h2>
          <p className="text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or just want to chat about history, data science, or anything in between? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:matthew.robillard@berkeley.edu"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Email</span>
            </a>
            <a
              href="https://github.com/MJRobillard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://mjrobillard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Visit Website</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}