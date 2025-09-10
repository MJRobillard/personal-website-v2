import Image from "next/image";
import TechTicker from "../components/TechTicker";

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
          <h2 className="text-3xl font-semibold text-center mb-12 text-accent">What I'm working on now</h2>
          <div className="timeline relative">
            <div className="timeline-line" aria-hidden="true" />
            <div className="space-y-16">
              {/* Row 1 — History (Left) */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
                <div className="md:pr-16">
                  <div className="bg-background rounded-xl p-6 border border-border-color history-emphasis transition-colors duration-300 hover:border-accent">
                    <div className="text-sm text-accent font-mono mb-2">HISTORICAL </div>
                    <h3 className="text-xl font-semibold mb-2">Byzantine Digital Humanities</h3>
                    <p className="text-foreground/70 mb-4">Leading research on medieval manuscript digitization and network analysis of Byzantine trade routes.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Paleography</span>
                      <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Network Analysis</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="timeline-node timeline-node--lapiz absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                <span className="connector-right connector-right--copper" />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-8 text-xs font-mono px-2 py-1 rounded-full bg-muted border border-border-color text-accent">2024</div>
              </div>

              {/* Row 2 — Data (Right) */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
                <div className="hidden md:block" />
                <div className="md:pl-16">
                  <div className="bg-background rounded-xl p-6 border border-border-color data-emphasis transition-colors duration-300 hover:border-accent">
                    <div className="text-sm text-accent-2 font-mono mb-2">DATA SCIENCE</div>
                    <h3 className="text-xl font-semibold mb-2">ML for Historical Analysis</h3>
                    <p className="text-foreground/70 mb-4">Developing machine learning models for sentiment analysis in historical documents and computer vision systems.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent-2 text-white text-xs rounded-full">Python</span>
                      <span className="px-3 py-1 bg-accent-2 text-white text-xs rounded-full">TensorFlow</span>
                    </div>
                  </div>
                </div>
                <span className="timeline-node timeline-node--copper absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                <span className="connector-left connector-left--lapiz" />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-8 text-xs font-mono px-2 py-1 rounded-full bg-muted border border-border-color text-accent-2">2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-accent">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted rounded-xl p-6 border border-border-color hover:border-accent transition-all history-emphasis">
              <div className="text-sm text-accent-2 font-mono mb-2">HYBRID</div>
              <h3 className="text-xl font-semibold mb-2">Byzantine Trade Networks</h3>
              <p className="text-foreground/70 mb-4">Mapping 11th-century merchant routes using network analysis and archaeological evidence from Constantinople&apos;s harbor.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Network Analysis</span>
                <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Medieval History</span>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-6 border border-border-color hover:border-accent transition-all history-emphasis">
              <div className="text-sm text-accent-2 font-mono mb-2">HISTORY</div>
              <h3 className="text-xl font-semibold mb-2">Codex of the Tin Coyote</h3>
              <p className="text-foreground/70 mb-4">Deconstructing trickster narratives in Mesoamerican manuscripts and their influence on colonial resistance movements.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Indigenous Studies</span>
                <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Manuscript Analysis</span>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-6 border border-border-color hover:border-accent transition-all data-emphasis">
              <div className="text-sm text-accent-2 font-mono mb-2">DATA</div>
              <h3 className="text-xl font-semibold mb-2">Verdigris Sentiment</h3>
              <p className="text-foreground/70 mb-4">NLP analysis of emotional patterns in historical documents during periods of imperial decline and transformation.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">NLP</span>
                <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted border-t border-border-color transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-mono mb-8 text-accent">TOOLS OF THE TRADE</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Paleography</span>
            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Python</span>
            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Archival Research</span>
            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">React</span>
            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Latin & Greek</span>
            <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Machine Learning</span>
          </div>
        </div>
      </section>
    </div>
  );
}
