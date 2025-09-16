import Image from "next/image";
import TechTicker from "../components/TechTicker";
import PhoneVisual from "../components/PhoneVisual";
import TimelineSectionItem from "../components/TimelineSectionItem";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <section className="relative overflow-hidden min-h-screen flex items-center">
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
                    The first part of the scientific method. What’s been tried before, why it didn’t work, and what we can learn from it.
                  </p>
                  <p className="mt-2 text-foreground/60 italic">
                    (Or at the very least, a record of our bad ideas so we can laugh before repeating them.)
                  </p>
                </div>

                <div className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis">
                  <h3 className="text-xl font-semibold text-foreground">Data Science</h3>
                  <p className="mt-2 text-foreground/75">
                    The testable half of the scientific method. Turn hypotheses into evidence, predict, classify, and more.
                  </p>
                  <p className="mt-2 text-foreground/60 italic">
                    (Or a ChatGPT wrapper doing horoscopes, overfit on Scorpios, dropout conveniently scheduled for Mercury retrograde.)
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

      <section className="py-20 bg-muted transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-accent">What I&apos;m working on now</h2>
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

      <section className="py-20 bg-background transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-accent">Featured Project</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Project Demo - iPhone-like iframe */}
            <div className="order-2 lg:order-1">
              <PhoneVisual
                src="https://pacman-ai-five.vercel.app/demo"
                alt="Pacman AI Demo"
                title="Pacman AI Demo"
              />
            </div>

            {/* Project Description */}
            <div className="order-1 lg:order-2">
              <div className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis">
                <div className="text-sm text-accent-2 font-mono mb-2">FEATURED PROJECT</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Pacman AI Agent</h3>
                <p className="text-foreground/75 mb-4 text-lg">
                  An intelligent Pacman agent that uses advanced AI algorithms to navigate mazes, 
                  collect pellets, and avoid ghosts. Built with modern web technologies and 
                  featuring multiple difficulty levels and visualization tools.
                </p>
                <p className="text-foreground/60 mb-6 italic">
                  Experience the demo in the interactive iframe, or explore the full project 
                  with source code, documentation, and additional features.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">AI/ML</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Canvas API</span>
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
    </div>
  );
}
