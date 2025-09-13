'use client';

import React from 'react';
import * as SiIcons from 'react-icons/si';
import { IconType } from 'react-icons';
import { FaBookOpen, FaScroll, FaBook, FaMicrochip } from 'react-icons/fa';
import { motion, useMotionValue } from 'framer-motion';

export type TrackType = 'history' | 'data';

export interface TechnologyItem {
  name: string;
  icon?: string;
  category?: string;
  tags?: string[];
  track: TrackType | string;
  era: string;
  year?: number;
  type: 'tool' | 'reading' | 'writing' | string;
  author?: string;
  projects?: Array<{ title: string; url?: string }>; // optional
}

const DynamicIcon: React.FC<{ iconName?: string; label: string }> = ({ iconName, label }) => {
  if (!iconName) return null;
  const LibraryIcon = (SiIcons as unknown as Record<string, IconType | undefined>)[iconName];
  if (LibraryIcon) {
    return <LibraryIcon className="w-5 h-5 shrink-0" aria-label={`${label} icon`} />;
  }
  // Fallbacks for non-SimpleIcons identifiers used in data
  const fallbackMap: Record<string, IconType> = {
    BookIcon: FaBookOpen,
    EditIcon: FaScroll,
  };
  const FallbackIcon = fallbackMap[iconName];
  if (FallbackIcon) {
    return <FallbackIcon className="w-5 h-5 shrink-0" aria-label={`${label} icon`} />;
  }
  return null;
};

const baseClassesByTrack: Record<TrackType, string> = {
  history:
    'tech-ticker-item border-border-color text-foreground font-serif history-card',
  data:
    'tech-ticker-item border-border-color text-foreground font-sans data-card',
};

interface TimelineItemProps {
  item: TechnologyItem;
  track: TrackType;
  onClick?: (item: TechnologyItem) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, track, onClick }) => {
  const scale = useMotionValue(1);
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const popoverRef = React.useRef<HTMLDivElement | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    try {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mql.matches);
      const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mql.addEventListener?.('change', onChange);
      return () => mql.removeEventListener?.('change', onChange);
    } catch {
      // no-op for SSR or unsupported envs
    }
  }, []);

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const itemCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = Math.max(centerX, 1);
        const proximity = 1 - Math.min(distance / maxDistance, 1);
        const targetScale = 1 + proximity * 0.08; // up to 1.08 at center
        scale.set(targetScale);
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [scale]);

  // Close popover on outside click
  React.useEffect(() => {
    if (!isPopoverOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!popoverRef.current) return;
      if (popoverRef.current.contains(e.target as Node)) return;
      setIsPopoverOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [isPopoverOpen]);

  // Minimal "Featured 2" carousel: prefer projects; fall back to top tags
  const featureItems = React.useMemo(() => {
    const fromProjects = Array.isArray(item.projects)
      ? item.projects.map((p) => p.title).filter(Boolean)
      : [];
    const fromTags = Array.isArray(item.tags) ? item.tags : [];
    const picks = (fromProjects.length > 0 ? fromProjects : fromTags).slice(0, 2);
    return picks;
  }, [item.projects, item.tags]);

  const [featureIndex, setFeatureIndex] = React.useState(0);
  React.useEffect(() => {
    if (prefersReducedMotion) return;
    if (featureItems.length <= 1) return;
    if (isHovered) return; // pause on hover
    const id = window.setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % featureItems.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [featureItems.length, isHovered, prefersReducedMotion]);

  const hasTags = Array.isArray(item.tags) && item.tags.length > 0;

  const commonClasses = `${baseClassesByTrack[track]} border rounded-xl px-4 py-3 mx-2 shadow-sm/30 shadow-black/20 backdrop-blur-[2px] transition-all duration-300 group cursor-${
    onClick ? 'pointer' : 'default'
  } hover:scale-105 hover:shadow-lg`;

  const renderContent = () => {
    const yearBadge = typeof item.year === 'number' ? (
      <div className={`absolute -top-2 -right-2 px-2 py-1 text-[10px] font-mono rounded-full border ${
        track === 'history' 
          ? 'bg-accent text-white border-accent' 
          : 'bg-accent-2 text-white border-accent-2'
      }`}>
        {item.year}
      </div>
    ) : null;

    const categoryIcon = track === 'history' ? (
      <FaBook className="w-3 h-3 opacity-60" />
    ) : (
      <FaMicrochip className="w-3 h-3 opacity-60" />
    );

    const typeBadge = (
      <span className={`text-[10px] px-2 py-[2px] rounded-full border whitespace-nowrap ${
        track === 'history' ? 'border-accent text-accent' : 'border-accent-2 text-accent-2'
      }`}>
        {item.type}
      </span>
    );

    const displayedTags = Array.isArray(item.tags) ? item.tags.slice(0, 3) : [];
    const remainingTagsCount = Array.isArray(item.tags) && item.tags.length > 3 ? item.tags.length - 3 : 0;

    return (
      <div className="relative flex items-start gap-3">
        {yearBadge}
        <div className="flex items-start gap-2 flex-1">
          <div className="pt-[2px]">
            <DynamicIcon iconName={item.icon} label={item.name} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 min-w-0">
              <div className={`truncate text-sm font-medium ${item.type === 'reading' ? 'italic' : ''}`}>{item.name}</div>
              {typeBadge}
            </div>
            <div className="tech-category text-[10px] leading-3 mt-1 flex items-center gap-1">
              {categoryIcon}
              {item.author ? <span>{item.author}</span> : null}
              {item.author && (item.category || item.era) ? <span>•</span> : null}
              {item.category ? <span>{item.category}</span> : null}
              {item.category && item.era ? <span>•</span> : null}
              {item.era ? <span>{item.era}</span> : null}
              {(item.projects && item.projects.length) ? <span>• {item.projects.length} project{item.projects.length > 1 ? 's' : ''}</span> : null}
            </div>
            {featureItems.length > 0 && (
              <div className="mt-1 text-[11px] leading-4">
                <span className="opacity-70">Highlights:</span>{' '}
                <span className="font-medium">{featureItems[featureIndex]}</span>
                {featureItems.length > 1 && !prefersReducedMotion ? (
                  <div className="relative h-[2px] bg-foreground/10 mt-1 rounded">
                    <motion.div
                      key={featureIndex}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5.8, ease: 'linear' }}
                      className="h-full bg-foreground/50 rounded"
                    />
                  </div>
                ) : null}
              </div>
            )}
            {displayedTags.length > 0 && (
              <div className="mt-1">
                <div className="flex flex-wrap gap-1" title={Array.isArray(item.tags) ? item.tags.join(', ') : undefined}>
                  {displayedTags.map((t, idx) => (
                    <span key={`${item.name}-tag-inline-${idx}`} className="text-[10px] px-2 py-[2px] rounded-full bg-black/20">
                      {t}
                    </span>
                  ))}
                  {remainingTagsCount > 0 && (
                    <div className="relative inline-block" ref={popoverRef}>
                      <button
                        type="button"
                        className="text-[10px] opacity-80 px-1 py-[1px] rounded hover:opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
                        aria-haspopup="dialog"
                        aria-expanded={isPopoverOpen}
                        onMouseEnter={() => setIsPopoverOpen(true)}
                        onMouseLeave={() => setIsPopoverOpen(false)}
                        onFocus={() => setIsPopoverOpen(true)}
                        onBlur={() => setIsPopoverOpen(false)}
                        onClick={() => setIsPopoverOpen((v) => !v)}
                      >
                        +{remainingTagsCount}
                      </button>
                      {isPopoverOpen && (
                        <div
                          role="dialog"
                          className="absolute z-50 top-full right-0 mt-2 w-56 p-2 rounded-lg border border-border-color bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
                        >
                          <div className="text-[10px] uppercase tracking-wide opacity-70 mb-1">More tags</div>
                          <div className="flex flex-wrap gap-1">
                            {Array.isArray(item.tags) && item.tags.slice(3).map((t, idx) => (
                              <span key={`${item.name}-tag-pop-${idx}`} className="text-[10px] px-2 py-[2px] rounded-full bg-black/20">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ scale }}
      className={commonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick ? () => onClick(item) : undefined}
      aria-label={`${item.type}: ${item.name}`}
    >
      {renderContent()}

      {hasTags && null}
    </motion.div>
  );
};

export default TimelineItem;


