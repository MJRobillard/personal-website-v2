export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold mb-4 text-accent">About the Convergence</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          At the intersection of ancient wisdom and modern intelligence, I explore how historical narratives 
          can be illuminated through computational methods, and how data science can be enriched by 
          historical context.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="history-emphasis">
          <h2 className="text-2xl font-semibold mb-6 text-accent">🐺 The Tin Coyote</h2>
          <p className="text-foreground/80 mb-4">
            As a historian, I specialize in Byzantine and Mesoamerican studies, with particular focus on 
            digital humanities and manuscript analysis. My work traces the silver threads that connect 
            empires to their shadows through archival research and philological analysis.
          </p>
          <p className="text-foreground/80 mb-4">
            I&apos;ve worked with medieval Greek manuscripts, Nahuatl colonial documents, and developed 
            innovative approaches to digitizing and analyzing historical texts using computational methods.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm">Paleography & Manuscript Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm">Digital Humanities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm">Cultural Resistance Studies</span>
            </div>
          </div>
        </div>

        <div className="data-emphasis">
          <h2 className="text-2xl font-semibold mb-6 text-accent-2">🦊 The Copper Fox</h2>
          <p className="text-foreground/80 mb-4">
            As a data scientist, I develop machine learning models for historical analysis, focusing on 
            natural language processing, computer vision, and network analysis. My algorithms are 
            tarnished by memory, designed to uncover patterns in historical data.
          </p>
          <p className="text-foreground/80 mb-4">
            I&apos;ve published research on sentiment analysis in historical documents, computer vision 
            systems for manuscript restoration, and network analysis of medieval trade routes.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-2 rounded-full"></span>
              <span className="text-sm">Machine Learning & NLP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-2 rounded-full"></span>
              <span className="text-sm">Computer Vision</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-2 rounded-full"></span>
              <span className="text-sm">Network Analysis</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-accent">Methodology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Archival Research</h3>
            <p className="text-sm text-foreground/70">
              Traditional historical methods combined with digital tools for manuscript analysis 
              and cultural context reconstruction.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Computational Analysis</h3>
            <p className="text-sm text-foreground/70">
              Machine learning models for pattern recognition, sentiment analysis, and network 
              mapping of historical relationships.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Digital Humanities</h3>
            <p className="text-sm text-foreground/70">
              Web applications and databases for academic institutions to digitize and analyze 
              historical collections.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6 text-accent">Current Research</h2>
        <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
          Currently leading research on Byzantine trade networks using network analysis and 
          archaeological evidence, while developing NLP models for sentiment analysis in 
          medieval documents.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">UC Berkeley</span>
          <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Digital Humanities</span>
          <span className="px-4 py-2 bg-accent text-white rounded-full text-sm">Machine Learning</span>
        </div>
      </div>
    </div>
  );
}


