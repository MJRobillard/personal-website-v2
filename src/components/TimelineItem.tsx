'use client';

import React from 'react';
import * as SiIcons from 'react-icons/si';
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
  const LibraryIcon = (SiIcons as any)[iconName];
  if (LibraryIcon) {
    return <LibraryIcon className="w-5 h-5 shrink-0" aria-label={`${label} icon`} />;
  }
  // Fallbacks for non-SimpleIcons identifiers used in data
  const fallbackMap: Record<string, React.ComponentType<any>> = {
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
            {displayedTags.length > 0 && (
              <div className="mt-1">
                <div className="flex flex-wrap gap-1" title={Array.isArray(item.tags) ? item.tags.join(', ') : undefined}>
                  {displayedTags.map((t, idx) => (
                    <span key={`${item.name}-tag-inline-${idx}`} className="text-[10px] px-2 py-[2px] rounded-full bg-black/20">
                      {t}
                    </span>
                  ))}
                  {remainingTagsCount > 0 && (
                    <span className="text-[10px] opacity-70">+{remainingTagsCount}</span>
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
      onClick={onClick ? () => onClick(item) : undefined}
      aria-label={`${item.type}: ${item.name}`}
    >
      {renderContent()}

      {hasTags && null}
    </motion.div>
  );
};

export default TimelineItem;


