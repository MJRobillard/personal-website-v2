'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Merriweather, Inter } from 'next/font/google';
import { FaChevronRight } from 'react-icons/fa';
import timelineData from '../timeline.json';
import Marquee from 'react-fast-marquee';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'] });
const inter = Inter({ subsets: ['latin'] });

// Data Interfaces (from user spec)
interface Course {
  name: string;
  category: 'Data' | 'History' | 'Data/History';
}

interface Work {
  title: string;
  organization: string;
  description: string;
}

interface Semester {
  courses?: Course[];
  work?: Work;
}

interface YearEntry {
  year: string;
  spring?: Semester;
  summer?: Semester;
  fall?: Semester;
}

type Timeline = YearEntry[];

const CategoryBadge: React.FC<{ category: Course['category'] }> = ({ category }) => {
  const base = 'text-[10px] px-2 py-0.5 rounded-full border font-medium';
  const cls =
    category === 'Data'
      ? `${base} border-accent/60 text-accent bg-accent/10` // Data -> Lapiz (accent)
      : category === 'History'
      ? `${base} border-accent-2/60 text-accent-2 bg-accent-2/10` // History -> Copper (accent-2)
      : `${base} border-foreground/40 text-foreground/80 bg-foreground/5`;
  return <span className={cls}>{category}</span>;
};

const SemesterBlock: React.FC<{ label: 'Spring' | 'Summer' | 'Fall'; semester?: Semester }> = ({ label, semester }) => {
  if (!semester) return null;
  return (
    <div className="card-base card-double-gradient card-double-gradient--data data-typography data-emphasis rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <h5 className="text-sm font-semibold tracking-wide text-foreground">{label}</h5>
      </div>
      {semester.courses && semester.courses.length > 0 && (
        <div className="space-y-2">
          <div className="text-xs text-foreground/70 font-medium">Courses</div>
          <ul className="space-y-1">
            {semester.courses.map((c, i) => (
              <li key={`${c.name}-${i}`} className="flex items-start justify-between gap-3">
                <span className="text-sm leading-snug text-foreground">{c.name}</span>
                <CategoryBadge category={c.category} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {semester.work && (
        <div className="space-y-1">
          <div className="text-xs text-foreground/70 font-medium">Work</div>
          <div className="text-sm font-medium text-foreground">{semester.work.title}</div>
          <div className="text-xs text-foreground/80">{semester.work.organization}</div>
          <p className="text-sm text-foreground/90 leading-snug">{semester.work.description}</p>
        </div>
      )}
    </div>
  );
};

const YearHeader: React.FC<{
  year: string;
  meta: { semesters: number; courses: number; hasWork: boolean };
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ year, meta, isExpanded, onToggle }) => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors"
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h4 className={`text-lg font-semibold ${merriweather.className} section-title text-foreground`}>{year}</h4>
      <span className={`text-sm text-foreground/70`}>({meta.semesters} semesters • {meta.courses} courses{meta.hasWork ? ' • work' : ''})</span>
      <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
        <FaChevronRight className="w-3 h-3 text-foreground/60" />
      </motion.div>
    </motion.div>
  );
};

//

// Inline separator placed between semester cards to indicate the next year
const YearSeparator: React.FC<{ year: string }> = ({ year }) => {
  return (
    <div className="flex items-stretch justify-center min-w-[80px]">
      <div className="relative flex flex-col items-center -translate-y-2">
        <div className="text-sm md:text-base font-semibold text-accent mb-1 section-title">{year}</div>
        <div className="w-px h-32 bg-gradient-to-b from-accent via-accent/60 to-transparent" />
      </div>
    </div>
  );
};

const SemesterCard: React.FC<{ label: 'Spring' | 'Summer' | 'Fall'; semester: Semester; year: string }> = ({ label, semester, year }) => {
  const hasCourses = !!semester.courses?.length;
  const hasWork = !!semester.work;
  const summary = `${hasCourses ? `${semester.courses!.length} course${semester.courses!.length > 1 ? 's' : ''}` : ''}${hasCourses && hasWork ? ' • ' : ''}${hasWork ? 'work' : ''}` || '—';

  // Highlights: rotate through up to 2 items (prefer courses; fall back to work title)
  const featureItems = useMemo(() => {
    const courseNames = (semester.courses || []).map((c) => c.name);
    const picks = courseNames.length > 0 ? courseNames.slice(0, 2) : (semester.work ? [semester.work.title] : []);
    return picks;
  }, [semester.courses, semester.work]);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    try {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mql.matches);
      const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mql.addEventListener?.('change', onChange);
      return () => mql.removeEventListener?.('change', onChange);
    } catch {
      // no-op
    }
  }, []);
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (featureItems.length <= 1) return;
    if (isHovered) return;
    const id = window.setInterval(() => {
      setFeatureIndex((p) => (p + 1) % featureItems.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [featureItems.length, isHovered, prefersReducedMotion]);

  // Popover for +N more courses
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!isPopoverOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!popoverRef.current) return;
      if (popoverRef.current.contains(e.target as Node)) return;
      setIsPopoverOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [isPopoverOpen]);

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.18 }}
      className="min-w-[280px] max-w-[320px] card-base card-double-gradient card-double-gradient--data data-typography data-emphasis rounded-lg p-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold tracking-wide text-foreground">{year} {label}</div>
        <div className="text-[10px] text-foreground/70">{summary}</div>
      </div>
      {featureItems.length > 0 && (
        <div className="mt-1 text-[11px] leading-4">
          <span className="text-foreground/70">Highlights:</span> <span className="font-medium text-foreground">{featureItems[featureIndex]}</span>
          {featureItems.length > 1 && !prefersReducedMotion ? (
            <div className="relative h-[2px] bg-foreground/10 mt-1 rounded">
              <motion.div
                key={featureIndex}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.8, ease: 'linear' }}
                className="h-full bg-accent rounded"
              />
            </div>
          ) : null}
        </div>
      )}
      <div className="mt-2 space-y-2">
        {hasCourses && (
          <div className="space-y-1">
            {(semester.courses || []).slice(0, 2).map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex items-center justify-between gap-2">
                <span className="text-sm truncate text-foreground" title={c.name}>{c.name}</span>
                <CategoryBadge category={c.category} />
              </div>
            ))}
            {(semester.courses || []).length > 2 && (
              <div className="relative inline-block z-[1000]" ref={popoverRef}>
                <button
                  type="button"
                  className="text-[10px] text-foreground/80 px-1 py-[1px] rounded hover:text-foreground hover:bg-foreground/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/40"
                  aria-haspopup="dialog"
                  aria-expanded={isPopoverOpen}
                  onMouseEnter={() => setIsPopoverOpen(true)}
                  onMouseLeave={() => setIsPopoverOpen(false)}
                  onFocus={() => setIsPopoverOpen(true)}
                  onBlur={() => setIsPopoverOpen(false)}
                  onClick={() => setIsPopoverOpen((v) => !v)}
                >
                  +{(semester.courses || []).length - 2} more
                </button>
                {isPopoverOpen && (
                  <div
                    role="dialog"
                    className="absolute z-[1000] top-full right-0 mt-2 w-64 p-2 rounded-lg border border-border-color bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
                  >
                    <div className="text-[10px] uppercase tracking-wide opacity-70 mb-1">Additional courses</div>
                    <ul className="space-y-1">
                      {(semester.courses || []).slice(2).map((c, i) => (
                        <li key={`more-${c.name}-${i}`} className="flex items-center justify-between gap-2">
                          <span className="text-[12px] truncate" title={c.name}>{c.name}</span>
                          <CategoryBadge category={c.category} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {hasWork && (
          <div className="pt-1 border-t border-border-color/60">
            <div className="text-xs font-medium">{semester.work!.title}</div>
            <div className="text-[11px] opacity-80">{semester.work!.organization}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const MarqueeVariant: React.FC<{ yearsSorted: YearEntry[] }> = ({ yearsSorted }) => {
    // Build horizontal semester sequence for lane layout
    type SemesterEntry = { year: string; label: 'Spring' | 'Summer' | 'Fall'; semester: Semester };
    const semesterEntries = useMemo<SemesterEntry[]>(() => {
      const entries: SemesterEntry[] = [];
      yearsSorted.forEach((y) => {
        if (y.spring) entries.push({ year: y.year, label: 'Spring', semester: y.spring });
        if (y.summer) entries.push({ year: y.year, label: 'Summer', semester: y.summer });
        if (y.fall) entries.push({ year: y.year, label: 'Fall', semester: y.fall });
      });
      return entries;
    }, [yearsSorted]);

    // Determine where to insert inline year separators (after the last semester of a given year)
    const boundaryLabelByAfterIndex = useMemo(() => {
      const map = new Map<number, string>();
      yearsSorted.forEach((y, idxYear) => {
        if (idxYear === yearsSorted.length - 1) return;
        const startIndex = semesterEntries.findIndex((e) => e.year === y.year);
        if (startIndex < 0) return;
        const count = semesterEntries.filter((e) => e.year === y.year).length;
        if (count === 0) return;
        const endIndex = startIndex + count - 1;
        const nextYear = yearsSorted[idxYear + 1].year;
        map.set(endIndex, nextYear);
      });
      return map;
    }, [semesterEntries, yearsSorted]);

    // Compute work spans by merging consecutive identical work (title+org)
    type WorkSpan = { key: string; title: string; organization: string; start: number; end: number };
    const spans: WorkSpan[] = [];
    let active: WorkSpan | null = null;
    semesterEntries.forEach((entry, idx) => {
      const w = entry.semester.work;
      const key = w ? `${w.title}|${w.organization}` : '';
      if (w) {
        if (active && active.key === key) {
          active.end = idx;
        } else {
          if (active) spans.push(active);
          active = { key, title: w.title, organization: w.organization, start: idx, end: idx };
        }
      } else {
        if (active) {
          spans.push(active);
          active = null;
        }
      }
    });
    if (active) spans.push(active);

    // Indices covered by a span, to avoid duplicating work labels inside cards
    const indicesCoveredByWork = new Set<number>();
    spans.forEach((s) => {
      for (let i = s.start; i <= s.end; i += 1) indicesCoveredByWork.add(i);
    });

    // Vertical rhythm constants (keep these in sync with classes like h-8)
    const WORK_LANE_HEIGHT = 24; // matches h-6
    const GAP_BELOW_WORK = 24; // space between work lane and baseline
    const BASELINE_TOP = WORK_LANE_HEIGHT + GAP_BELOW_WORK; // 56px
    const YEAR_TICK_TOP = BASELINE_TOP + 10; // 60px
    const YEAR_TICK_HEIGHT = 130; // vertical length of the year guide line
    const WRAPPER_PADDING_TOP = YEAR_TICK_TOP + 12; // room for tick + label
    const REPEAT_GAP = 64; // blank space between repeated marquee segments

    // Measure actual card widths/gaps so ticks are centered between years and responsive
    const laneRef = React.useRef<HTMLDivElement | null>(null);
    const [measured, setMeasured] = React.useState<{ lefts: number[]; rights: number[]; totalWidth: number }>({ lefts: [], rights: [], totalWidth: 0 });
    const [measuredBoundaries, setMeasuredBoundaries] = React.useState<Array<{ year: string; center: number; isLast: boolean }>>([]);
    const [spanRects, setSpanRects] = React.useState<Array<{ left: number; width: number; title: string; organization: string }>>([]);

    React.useLayoutEffect(() => {
      const compute = () => {
        const lane = laneRef.current;
        if (!lane) return;
        const nodes = Array.from(lane.querySelectorAll<HTMLElement>('[data-sem-idx]'));
        if (nodes.length === 0) return;
        const lefts: number[] = [];
        const rights: number[] = [];
        const laneRect = lane.getBoundingClientRect();
        nodes.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const left = rect.left - laneRect.left;
          const right = rect.right - laneRect.left;
          lefts.push(left);
          rights.push(right);
        });
        const measuredWidth = rights[rights.length - 1] - lefts[0];
        const totalWidth = Math.max(Math.ceil(measuredWidth), lane.scrollWidth);
        setMeasured({ lefts, rights, totalWidth });

        // Year boundaries between last semester of year and first of next year
        const boundaries: Array<{ year: string; center: number; isLast: boolean }> = [];
        yearsSorted.forEach((y, idx) => {
          if (idx === yearsSorted.length - 1) return; // no trailing tick after final year
          const startIndex = semesterEntries.findIndex((e) => e.year === y.year);
          const count = semesterEntries.filter((e) => e.year === y.year).length;
          const endIndex = startIndex + count - 1;
          const nextStart = semesterEntries.findIndex((e) => e.year === yearsSorted[idx + 1].year);
          if (startIndex < 0 || count === 0 || endIndex < 0 || nextStart < 0) return;
          const rightOfEnd = rights[endIndex];
          const leftOfNext = lefts[nextStart];
          const center = rightOfEnd + (leftOfNext - rightOfEnd) / 2;
          boundaries.push({ year: y.year, center, isLast: false });
        });
        setMeasuredBoundaries(boundaries);

        // Work span rectangles in pixels
        const rects = spans.map((s) => {
          const left = lefts[s.start];
          const width = rights[s.end] - lefts[s.start];
          return { left, width, title: s.title, organization: s.organization };
        });
        setSpanRects(rects);
      };

      // initial and staged re-measurements to account for fonts and marquee layout
      compute();
      const raf1 = requestAnimationFrame(compute);
      const raf2 = requestAnimationFrame(() => requestAnimationFrame(compute));
      const t1 = window.setTimeout(compute, 50);
      const t2 = window.setTimeout(compute, 250);
      // fonts ready can affect metrics
      type DocumentWithFonts = Document & { fonts?: { ready?: Promise<void> } };
      const docWithFonts = document as DocumentWithFonts;
      docWithFonts.fonts?.ready?.then(() => compute());

      const ro = new ResizeObserver(() => compute());
      if (laneRef.current) ro.observe(laneRef.current);
      window.addEventListener('resize', compute);
      return () => {
        ro.disconnect();
        window.removeEventListener('resize', compute);
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [semesterEntries.length, yearsSorted.map((y) => y.year).join('|')]);
    return (
      <section className={`${inter.className} py-6 bg-muted border-y border-border-color`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 mb-4">
          <h3 className="tech-ticker-header text-2xl tracking-wide font-sans dark:text-accent-2">Academic & Work Timeline</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
        </div>
        <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <Marquee speed={62} direction="left" pauseOnHover={true} gradient={false} className="py-6">
            <div className="relative" style={{ paddingTop: `${WRAPPER_PADDING_TOP}px` }}>
              {/* Work lane (bars spanning multiple semesters) */}
              <div className="absolute top-10 left-0 h-6 z-20" style={{ width: `${measured.totalWidth}px` }}>
                {spanRects.length > 0
                  ? spanRects.map((r, i) => (
                      <div
                        key={`ws-${r.title}-${i}`}
                        className="absolute h-6 bg-accent-2/30 border border-accent-2/60 rounded-full flex items-center px-3 backdrop-blur-sm shadow-sm"
                        style={{ left: `${r.left}px`, width: `${r.width}px` }}
                      >
                        <span className="text-[11px] text-accent-2 whitespace-nowrap overflow-hidden text-ellipsis">
                          {r.title} • {r.organization}
                        </span>
                      </div>
                    ))
                  : measured.lefts.length > 0
                  ? semesterEntries.map((entry, idx) => (
                      entry.semester.work ? (
                        <div
                          key={`ws-fallback-${entry.year}-${entry.label}-${idx}`}
                          className="absolute h-6 bg-accent-2/30 border border-accent-2/60 rounded-full flex items-center px-3 backdrop-blur-sm shadow-sm"
                          style={{ left: `${measured.lefts[idx]}px`, width: `${measured.rights[idx] - measured.lefts[idx]}px` }}
                        >
                          <span className="text-[11px] text-accent-2 whitespace-nowrap overflow-hidden text-ellipsis">
                            {entry.semester.work.title} • {entry.semester.work.organization}
                          </span>
                        </div>
                      ) : null
                    ))
                  : null}
              </div>

              {/* Separation baseline between work lane and semester cards */}
              <div
                className="absolute left-0 z-0 bg-gradient-to-r from-foreground/50 via-foreground/50 to-transparent h-[2px] md:bg-gradient-to-r md:from-transparent md:via-foreground/50 md:to-transparent"
                style={{ top: `${BASELINE_TOP}px`, width: `${measured.totalWidth}px` }}
              />

              {/* Year tick markers (lines only) */}
              <div className="absolute left-0 z-0" style={{ top: `${YEAR_TICK_TOP}px`, width: `${measured.totalWidth}px` }}>
                {measuredBoundaries.map(({ year, center }) => (
                  <div key={`yb-${year}`} className="absolute -translate-x-1/2" style={{ left: `${center}px` }}>
                    <div className="w-px bg-foreground/60" style={{ height: `${YEAR_TICK_HEIGHT}px` }} />
                  </div>
                ))}
              </div>
            
              {/* Semester cards row */}
              <div className="flex items-stretch gap-6 relative z-20" ref={laneRef}>
                {semesterEntries.map((entry, idx) => (
                  <React.Fragment key={`semwrap-${entry.year}-${entry.label}-${idx}`}>
                    <div data-sem-idx={idx} className="min-w-[280px] max-w-[320px]">
                      <SemesterCard
                        label={entry.label}
                        semester={{
                          ...entry.semester,
                          // Hide work inside cards if represented by a spanning work bar
                          work: indicesCoveredByWork.has(idx) ? undefined : entry.semester.work,
                        }}
                        year={entry.year}
                      />
                    </div>
                    {boundaryLabelByAfterIndex.has(idx) && (
                      <YearSeparator year={boundaryLabelByAfterIndex.get(idx)!} />
                    )}
                  </React.Fragment>
                ))}
                {/* Gap before the marquee repeats */}
                <div aria-hidden="true" className="shrink-0" style={{ minWidth: `${REPEAT_GAP}px` }} />
              </div>
            </div>
          </Marquee>
          </div>
        </section>
    );
};

const CollapsibleVariant: React.FC<{ yearsSorted: YearEntry[] }> = ({ yearsSorted }) => {
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set(yearsSorted.map(y => y.year)));
  const metaByYear = useMemo(() => {
    const map: Record<string, { semesters: number; courses: number; hasWork: boolean }> = {};
    yearsSorted.forEach((y) => {
      const semesters = ['spring', 'summer', 'fall'] as const;
      let countSem = 0;
      let countCourses = 0;
      let hasWork = false;
      semesters.forEach((s) => {
        const sem = y[s];
        if (sem) {
          countSem += 1;
          if (sem.courses) countCourses += sem.courses.length;
          if (sem.work) hasWork = true;
        }
      });
      map[y.year] = { semesters: countSem, courses: countCourses, hasWork };
    });
    return map;
  }, [yearsSorted]);
  const toggleYear = (year: string) => {
    setExpandedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  };
  return (
    <section className={`${inter.className} py-6 bg-muted border-y border-border-color`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="tech-ticker-header text-xl tracking-wide font-sans">Academic & Work Timeline</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-color to-transparent" />
        </div>

        <div className="space-y-6">
          {yearsSorted.map((y) => {
            const isExpanded = expandedYears.has(y.year);
            const meta = metaByYear[y.year];
                return (
              <div key={y.year} className="space-y-3">
                <YearHeader year={y.year} meta={meta} isExpanded={isExpanded} onToggle={() => toggleYear(y.year)} />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-3 gap-4 pt-2">
                        <SemesterBlock label="Spring" semester={y.spring} />
                        <SemesterBlock label="Summer" semester={y.summer} />
                        <SemesterBlock label="Fall" semester={y.fall} />
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
};

const TimelineMarquee: React.FC<{ variant?: 'marquee' | 'collapsible' }> = ({ variant = 'marquee' }) => {
  const data = timelineData as unknown as Timeline;
  const yearsSorted = useMemo(() => {
    return [...data].sort((a, b) => Number(a.year) - Number(b.year));
  }, []);
  return variant === 'collapsible' ? (
    <CollapsibleVariant yearsSorted={yearsSorted} />
  ) : (
    <MarqueeVariant yearsSorted={yearsSorted} />
  );
};

export default TimelineMarquee;


