export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border-color py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <blockquote className="text-lg italic text-accent mb-6 max-w-2xl mx-auto">
          &ldquo;When empires crack and suns collapse, the Tin Coyote sings to the Copper Fox. 
          One rattles the bones of gods; the other counts their teeth.&rdquo;
        </blockquote>
        <div className="flex justify-center items-center gap-8 mb-6">
          <div className="text-4xl opacity-20">𓂀</div>
          <div className="text-4xl opacity-20">☩</div>
          <div className="text-4xl opacity-20">𓃥</div>
        </div>
        <p className="text-sm text-foreground/60">
          © 2024 Berkeley History & Data Science • Where Ancient Wisdom Meets Modern Intelligence
        </p>
      </div>
    </footer>
  );
}


