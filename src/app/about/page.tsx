import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 bg-background transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-foreground heading-display">About Me</h1>
        <p className="text-lg text-foreground/75 max-w-3xl mx-auto">
          UC Berkeley senior studying History & Data Science. I build things at the intersection of
          community, policy, and AI — from Salsa at Cal and Web Dev at Berkeley to applied analytics at the
          California Energy Commission. Here are a few slices of life beyond the resume.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href="https://github.com/MJRobillard" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          <a href="https://linkedin.com/in/matthew-robillard-6723b8252" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
          <a href="https://mjrobillard.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">Website</a>
          <a href="mailto:Robillard.matthew22@berkeley.edu" className="btn-secondary">Email</a>
        </div>
      </div>

      <div className="space-y-16">
        <section className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold section-title">Salsa at Cal</h2>
              <p className="mt-3 text-foreground/75">
                Internal Chair, Lead Developer, and Performance Lead. We teach, perform, ship features, and help
                people find community through dance.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://salsaatcal.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Site</a>
                <a href="https://www.instagram.com/salsaatcalberkeley/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Instagram</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden border border-border-color">
                <Image src="/Personal/SALSA1.JPG" alt="Salsa at Cal 1" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border border-border-color">
                <Image src="/Personal/SALSA2.jpg" alt="Salsa at Cal 2" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
              <div className="col-span-2 rounded-lg overflow-hidden border border-border-color">
                <video controls preload="metadata" className="w-full h-auto">
                  <source src="/Personal/SALSAVID.mp4" type="video/mp4" />
                  <source src="/Personal/SALSAVID.webm" type="video/webm" />
                  <source src="/Personal/SALSAVID.MOV" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="card-base card-double-gradient card-double-gradient--history history-typography history-emphasis p-8 md:p-10">
          <div className="grid md:grid-cols-4 gap-10 items-start">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-semibold section-title">Web Dev at Berkeley (WDB)</h2>
              <p className="mt-4 text-foreground/75">
                Head Instructor, CS198: Introduction to Full-Stack Web Development — Led 100+ students;
                revamped 70% of the course content, adding modern technologies. Managed contributions
                from 35 Berkeley developers, 588 commits, and supported 10,000+ course site views.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://www.webatberkeley.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary">WDB Website</a>
                <a href="https://fullstackdecal.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Course Site</a>
                <a href="https://github.com/fullstack-decal/fullstackdecal" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
                <a href="https://www2.eecs.berkeley.edu/Scheduling/CS/schedule.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">CS198</a>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-4 lg:gap-6">
              <div className="rounded-xl overflow-hidden border border-border-color shadow-xxl">
                <Image src="/Personal/WDB1.JPG" alt="WDB 1" width={1000} height={700} className="w-full h-64 md:h-72 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border-color shadow-xxl">
                <Image src="/Personal/WDB2.JPG" alt="WDB 2" width={1000} height={700} className="w-full h-64 md:h-72 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border-color shadow-xxl col-span-2">
                <Image src="/Personal/WDB3.JPG" alt="WDB 3" width={1600} height={900} className="w-full h-80 md:h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>



        <section className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold section-title">California Energy Commission (CEC)</h2>
              <p className="mt-3 text-foreground/75">
                Student Fellow under Commissioner Noemí Gallardo working on the Lithium Valley anomaly detection & visualization dashboard. integrating
                policy, land ownership, and risk contours to support decisions. Coordinating with USGS, BLM, Benchmark,
                and other partners. This is our team in the Advanced Light Source at Lawrence Berkeley National Laboratory (LBNL). 
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-lg overflow-hidden border border-border-color">
                <Image src="/Personal/CEC1.JPG" alt="CEC 1" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden border border-border-color">
                <Image src="/Personal/CEC2.JPG" alt="CEC 2" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}


