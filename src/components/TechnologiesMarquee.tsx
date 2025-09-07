'use client';

import React, { useMemo } from 'react';
import { Inter } from 'next/font/google';
import Marquee from 'react-fast-marquee';
import technologies from '../technologies.json';

const inter = Inter({ subsets: ['latin'] });

type Technology = {
  name: string;
  icon?: string;
  category?: string;
  tags?: string[];
  track?: 'data' | 'history' | string;
  era?: string;
  year?: number;
  type?: 'tool' | 'reading' | 'writing' | string;
  author?: string;
};

const TechPill: React.FC<{ text: string }> = ({ text }) => (
  <span className="tech-tag text-xs px-2.5 py-0.5 rounded-full">{text}</span>
);

const TechItemCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  const trackClass = tech.track === 'history' ? 'history-card history-typography' : 'data-card data-typography';
  const typeEmoji = tech.type === 'reading' ? '📖' : tech.type === 'writing' ? '✍️' : '🛠️';

  return (
    <div className={`tech-ticker-item ${trackClass} flex items-center gap-4 px-4 py-3 rounded-lg min-w-[280px] max-w-[380px]`}> 
      <div className="tech-icon w-8 h-8 rounded-md grid place-items-center bg-muted text-base select-none">
        {typeEmoji}
      </div>
      <div className="min-w-0">
        <div className="tech-name text-base font-medium truncate" title={tech.name}>{tech.name}</div>
        <div className="flex items-center gap-2 mt-1">
          {tech.category && <span className="tech-category text-sm opacity-90">{tech.category}</span>}
          {tech.author && tech.type === 'reading' && (
            <span className="text-sm opacity-80 truncate tech-subtitle">• {tech.author}</span>
          )}
        </div>
        {tech.tags && tech.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tech.tags.slice(0, 3).map((t, i) => (
              <TechPill key={`${tech.name}-tag-${i}`} text={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const TechnologiesMarquee: React.FC = () => {
  const techList = technologies as unknown as Technology[];

  const items = useMemo(() => shuffle(techList), [techList]);

  return (
    <section className={`${inter.className} py-8 bg-muted border-y border-border-color`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 mb-5">
        <h3 className="tech-ticker-header text-2xl tracking-wide">Technologies & Tools</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
      </div>
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 marquee-gradient-left" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 marquee-gradient-right" />
        <Marquee speed={60} direction="right" pauseOnHover={true} gradient={false} className="py-3">
          <div className="flex items-stretch gap-6 px-4">
            {items.map((t, idx) => (
              <TechItemCard key={`${t.name}-${idx}`} tech={t} />
            ))}
            {items.map((t, idx) => (
              <TechItemCard key={`dup-${t.name}-${idx}`} tech={t} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TechnologiesMarquee;


