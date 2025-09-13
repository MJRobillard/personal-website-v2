export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold mb-4 text-accent">Projects & Research</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A collection of works that bridge the gap between historical scholarship and computational analysis, 
          exploring how ancient wisdom can be illuminated through modern intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Manuscript Digitization Platform */}
        <div className="bg-muted rounded-xl p-6 border border-border-color hover:border-accent transition-all group data-emphasis">
          <div className="text-sm text-accent-2 font-mono mb-3">DIGITAL HUMANITIES</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">Manuscript Digitization Platform</h3>
          <p className="text-foreground/70 mb-4 text-sm">
            Full-stack web application for academic institutions to digitize and analyze historical 
            collections. React frontend with Node.js API and PostgreSQL database.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Node.js</span>
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">PostgreSQL</span>
          </div>
          <div className="text-xs text-foreground/50">2023 • Digital Humanities Startup</div>
        </div>

        {/* Paleography Analysis Tool */}
        <div className="bg-muted rounded-xl p-6 border border-border-color hover:border-accent transition-all group data-emphasis">
          <div className="text-sm text-accent-2 font-mono mb-3">COMPUTER VISION</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">Paleography Analysis Tool</h3>
          <p className="text-foreground/70 mb-4 text-sm">
            Computer vision system for manuscript restoration and character recognition in medieval 
            Greek texts. Uses deep learning for automated transcription and analysis.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Computer Vision</span>
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Deep Learning</span>
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Medieval Greek</span>
          </div>
          <div className="text-xs text-foreground/50">2024 • Research Project</div>
        </div>

        {/* Cultural Resistance Database */}
        <div className="bg-muted rounded-xl p-6 border border-border-color hover:border-accent transition-all group history-emphasis">
          <div className="text-sm text-accent-2 font-mono mb-3">DATABASE DESIGN</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">Cultural Resistance Database</h3>
          <p className="text-foreground/70 mb-4 text-sm">
            Comprehensive database of indigenous resistance movements and trickster narratives 
            across Mesoamerican cultures. Includes metadata analysis and pattern recognition.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Database Design</span>
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Cultural Analysis</span>
            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">Metadata</span>
          </div>
          <div className="text-xs text-foreground/50">2023 • Academic Research</div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-accent">Research Publications</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-background rounded-xl p-6 border border-border-color">
            <h3 className="font-semibold mb-2">&ldquo;Network Analysis of Byzantine Trade Routes&rdquo;</h3>
            <p className="text-sm text-foreground/70 mb-3">Computational analysis of medieval merchant networks using archaeological and textual evidence.</p>
            <div className="text-xs text-accent">Journal of Digital Humanities • 2024</div>
          </div>
          <div className="bg-background rounded-xl p-6 border border-border-color">
            <h3 className="font-semibold mb-2">&ldquo;Trickster Narratives in Colonial Resistance&rdquo;</h3>
            <p className="text-sm text-foreground/70 mb-3">Analysis of indigenous trickster mythology and its role in colonial-era resistance movements.</p>
            <div className="text-xs text-accent">Latin American Studies Quarterly • 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}


