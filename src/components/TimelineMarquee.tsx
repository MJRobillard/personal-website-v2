'use client';

import React, { useMemo, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';
import TimelineItem, { TechnologyItem, TrackType } from './TimelineItem';
import technologiesData from '../technologies.json';
import { Merriweather, Inter } from 'next/font/google';
import { FaChevronDown, FaChevronRight, FaBook, FaMicrochip } from 'react-icons/fa';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });
const inter = Inter({ subsets: ['latin'] });

type GroupedByEra = Record<string, TechnologyItem[]>;

const groupAndSort = (items: TechnologyItem[]): GroupedByEra => {
  const byEra: GroupedByEra = {};
  items.forEach((it) => {
    const eraKey = it.era || 'Unknown Era';
    if (!byEra[eraKey]) byEra[eraKey] = [];
    byEra[eraKey].push(it);
  });

  Object.keys(byEra).forEach((era) => {
    byEra[era].sort((a, b) => (a.year || 0) - (b.year || 0));
  });

  return byEra;
};

const sortEraOrder = (eraA: string, eraB: string) => eraA.localeCompare(eraB);

const EraHeader: React.FC<{
  era: string;
  track: TrackType;
  meta: { count: number; minYear?: number; maxYear?: number };
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ era, track, meta, isExpanded, onToggle }) => {
  const range = meta.minYear && meta.maxYear && meta.minYear !== meta.maxYear
    ? `${meta.minYear}–${meta.maxYear}`
    : (meta.minYear ?? meta.maxYear ?? '');

  return (
    <motion.div
      className={`flex items-center gap-3 cursor-pointer group ${
        track === 'history' ? 'history-era-header' : 'data-era-header'
      }`}
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2">
        {track === 'history' ? (
          <FaBook className="w-4 h-4 text-accent" />
        ) : (
          <FaMicrochip className="w-4 h-4 text-accent-2" />
        )}
        <h4 className={`text-lg font-semibold ${
          track === 'history' 
            ? 'text-accent font-serif' 
            : 'text-accent-2 font-sans'
        }`}>
          {era}
        </h4>
        <span className={`text-sm opacity-70 ${
          track === 'history' ? 'text-foreground' : 'text-foreground'
        }`}>
          ({meta.count} items{range ? ` • ${range}` : ''})
        </span>
      </div>
      <motion.div
        animate={{ rotate: isExpanded ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <FaChevronRight className="w-3 h-3 opacity-60" />
      </motion.div>
    </motion.div>
  );
};

const Track: React.FC<{
  title: string;
  track: TrackType;
  items: TechnologyItem[];
  speed?: number;
  direction?: 'left' | 'right';
  isCollapsible?: boolean;
}> = ({ title, track, items, speed = 60, direction = 'left', isCollapsible = false }) => {
  const [expandedEras, setExpandedEras] = useState<Set<string>>(new Set());
  const grouped = useMemo(() => groupAndSort(items), [items]);
  const eras = useMemo(() => Object.keys(grouped).sort(sortEraOrder), [grouped]);

  const eraMeta = useMemo(() => {
    const meta: Record<string, { count: number; minYear?: number; maxYear?: number }> = {};
    Object.keys(grouped).forEach((era) => {
      const arr = grouped[era];
      const years = arr.map((i) => i.year).filter((y): y is number => typeof y === 'number');
      const minYear = years.length ? Math.min(...years) : undefined;
      const maxYear = years.length ? Math.max(...years) : undefined;
      meta[era] = { count: arr.length, minYear, maxYear };
    });
    return meta;
  }, [grouped]);

  const toggleEra = (era: string) => {
    setExpandedEras(prev => {
      const newSet = new Set(prev);
      if (newSet.has(era)) {
        newSet.delete(era);
      } else {
        newSet.add(era);
      }
      return newSet;
    });
  };

  // Build a timeline sequence alternating: [EraLabel, Items..., EraLabel, Items...]
  const sequence: Array<{ type: 'label' | 'item'; era?: string; item?: TechnologyItem }> = [];
  eras.forEach((era) => {
    sequence.push({ type: 'label', era });
    grouped[era].forEach((it) => sequence.push({ type: 'item', item: it }));
  });

  if (isCollapsible) {
    return (
      <section
        className={`${
          track === 'history'
            ? `${merriweather.className} py-6 bg-muted border-y border-border-color`
            : `${inter.className} py-6 bg-muted border-y border-border-color`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <h3
              className={
                track === 'history'
                  ? 'tech-ticker-header text-xl tracking-wide font-serif'
                  : 'tech-ticker-header text-xl tracking-wide font-sans'
              }
            >
              {title}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
          </div>

          {/* Collapsible Era Sections */}
          <div className="space-y-4">
            {eras.map((era) => {
              const isExpanded = expandedEras.has(era);
              return (
                <div key={era} className="era-section">
                  <EraHeader
                    era={era}
                    track={track}
                    meta={eraMeta[era]}
                    isExpanded={isExpanded}
                    onToggle={() => toggleEra(era)}
                  />
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <div className="flex flex-wrap gap-3">
                            {grouped[era].map((item, idx) => (
                              <TimelineItem key={`${item.name}-${idx}`} item={item} track={track} />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={
        (track === 'history'
          ? `${merriweather.className} py-4 bg-muted border-y border-border-color`
          : `${inter.className} py-4 bg-muted border-y border-border-color`)
      }
    >
      <div className="w-full">
        {/* On-screen centered header */}
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 mb-3">
          <h3
            className={
              track === 'history'
                ? 'tech-ticker-header text-lg tracking-wide font-serif'
                : 'tech-ticker-header text-lg tracking-wide font-sans'
            }
          >
            {title}
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
        </div>

        {/* Full-bleed marquee wrapper; keeps only the rail edge-to-edge */}
        <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          {/* moving tick marks are rendered as part of the marquee content */}
          <Marquee speed={speed} direction={direction} pauseOnHover={true} gradient={false} className="py-2">
            <div className="flex items-stretch gap-4">
              {sequence.map((entry, idx) => {
                if (entry.type === 'label') {
                  return (
                    <div key={`label-${entry.era}-${idx}`} className="flex items-stretch">
                      {/* vertical tick */}
                      <div className="mx-3 flex flex-col items-center">
                        <div
                          className={
                            track === 'history'
                              ? 'w-px h-10 bg-accent/80'
                              : 'w-px h-10 bg-accent-2/80'
                          }
                        />
                        <div
                          className={
                            track === 'history'
                              ? 'mt-2 text-[12px] text-accent font-serif whitespace-nowrap font-semibold'
                              : 'mt-2 text-[12px] text-accent-2 font-sans whitespace-nowrap font-semibold'
                          }
                        >
                          {entry.era}
                        </div>
                        {/* metadata: count + year range */}
                        <div className="tech-category text-[10px] mt-1 whitespace-nowrap">
                          {(() => {
                            const m = eraMeta[entry.era!];
                            if (!m) return null;
                            const range = m.minYear && m.maxYear && m.minYear !== m.maxYear
                              ? `${m.minYear}–${m.maxYear}`
                              : (m.minYear ?? m.maxYear ?? '');
                            return (
                              <span>
                                {m.count} items{range ? ` • ${range}` : ''}
                              </span>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  );
                }

                const it = entry.item!;
                return (
                  <TimelineItem key={`${it.name}-${idx}`} item={it} track={track} />
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

const TimelineMarquee: React.FC<{ 
  variant?: 'marquee' | 'collapsible' | 'dual-layer';
}> = ({ variant = 'marquee' }) => {
  const items = technologiesData as unknown as TechnologyItem[];

  const historyItems = useMemo(
    () => items.filter((i) => (i.track || '').toLowerCase() === 'history'),
    [items]
  );
  const dataItems = useMemo(
    () => items.filter((i) => (i.track || '').toLowerCase() === 'data'),
    [items]
  );

  // For unified marquee: build per-era groupings and a shared ordered era list
  const dataByEra = useMemo(() => groupAndSort(dataItems), [dataItems]);
  const historyByEra = useMemo(() => groupAndSort(historyItems), [historyItems]);
  const allEras = useMemo(
    () => Array.from(new Set([...Object.keys(dataByEra), ...Object.keys(historyByEra)])).sort(sortEraOrder),
    [dataByEra, historyByEra]
  );
  const unifiedEraMeta = useMemo(() => {
    const meta: Record<string, { minYear?: number; maxYear?: number; countData: number; countHistory: number }> = {};
    allEras.forEach((era) => {
      const d = dataByEra[era] || [];
      const h = historyByEra[era] || [];
      const years = [...d, ...h]
        .map((i) => i.year)
        .filter((y): y is number => typeof y === 'number');
      const minYear = years.length ? Math.min(...years) : undefined;
      const maxYear = years.length ? Math.max(...years) : undefined;
      meta[era] = { minYear, maxYear, countData: d.length, countHistory: h.length };
    });
    return meta;
  }, [allEras, dataByEra, historyByEra]);

  if (variant === 'collapsible') {
    return (
      <div className="w-full">
        <div className="space-y-8">
          <Track
            title="History Timeline"
            track="history"
            items={historyItems}
            isCollapsible={true}
          />
          <Track
            title="Data & Engineering Timeline"
            track="data"
            items={dataItems}
            isCollapsible={true}
          />
        </div>
      </div>
    );
  }

  if (variant === 'dual-layer') {
    return (
      <div className="w-full">
        <section className="py-8 bg-muted border-y border-border-color">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="tech-ticker-header text-2xl tracking-wide font-serif">
                Dual-Layer Timeline
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
            </div>
            
            {/* Dual-layer timeline with central line */}
            <div className="relative">
              {/* Central timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent-2 to-accent rounded-full opacity-60" />
              
              <div className="space-y-12">
                {(() => {
                  // Combine and sort all items by year
                  const allItems = [...historyItems, ...dataItems]
                    .filter(item => item.year)
                    .sort((a, b) => (a.year || 0) - (b.year || 0));
                  
                  return allItems.map((item, idx) => {
                    const isHistory = item.track?.toLowerCase() === 'history';
                    const isLeft = idx % 2 === 0;
                    
                    return (
                      <div key={`${item.name}-${idx}`} className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                          <TimelineItem item={item} track={isHistory ? 'history' : 'data'} />
                        </div>
                        
                        {/* Year marker on central line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-2 border-accent rounded-full flex items-center justify-center">
                          <span className="text-xs font-mono text-accent">{item.year}</span>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="py-6 bg-muted border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 mb-4">
          <h3 className="tech-ticker-header text-lg tracking-wide font-sans">
            Technology Timeline
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
        </div>

        {/* Full-bleed unified marquee with central line */}
        <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          {/* Static central line across viewport */}
          <div className="pointer-events-none absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-border-color to-transparent z-0" />

          <Marquee speed={68} direction="left" pauseOnHover={true} gradient={false} className="py-6 z-10">
            <div className="flex items-stretch gap-10">
              {allEras.map((era, idx) => {
                const dataEraItems = dataByEra[era] || [];
                const historyEraItems = historyByEra[era] || [];
                const meta = unifiedEraMeta[era];
                const range = meta?.minYear && meta?.maxYear && meta.minYear !== meta.maxYear
                  ? `${meta.minYear}–${meta.maxYear}`
                  : (meta?.minYear ?? meta?.maxYear ?? '');

                return (
                  <div key={`${era}-${idx}`} className="relative flex flex-col items-center justify-center min-w-[520px]">
                    {/* Era tick and label */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[54%] w-0.5 h-14 bg-gradient-to-b from-accent-2 via-border-color to-accent rounded-full" />

                    <div className="mb-4 flex flex-col items-center">
                      <div className="text-[12px] font-semibold text-foreground whitespace-nowrap">
                        {era}
                      </div>
                      <div className="text-[10px] opacity-70 text-foreground whitespace-nowrap">
                        {`${meta?.countData || 0} data • ${meta?.countHistory || 0} history`}{range ? ` • ${range}` : ''}
                      </div>
                    </div>

                    {/* Two rows: top (data), bottom (history) */}
                    <div className="grid grid-rows-2 gap-8 w-full">
                      <div className="flex flex-wrap items-end justify-center gap-3 px-2">
                        {dataEraItems.map((item, i) => (
                          <TimelineItem key={`data-${era}-${i}`} item={item} track={'data'} />
                        ))}
                        {dataEraItems.length === 0 && (
                          <span className="text-xs opacity-50">&nbsp;</span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-start justify-center gap-3 px-2">
                        {historyEraItems.map((item, i) => (
                          <TimelineItem key={`history-${era}-${i}`} item={item} track={'history'} />
                        ))}
                        {historyEraItems.length === 0 && (
                          <span className="text-xs opacity-50">&nbsp;</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default TimelineMarquee;


