'use client';

import React from 'react';
import TimelineMarquee from './TimelineMarquee';
import TechnologiesMarquee from './TechnologiesMarquee';

interface TechTickerProps {
  variant?: 'marquee' | 'collapsible' | 'dual-layer' | 'technologies';
}

// Backwards-compatible wrapper so existing imports still work
const TechTicker: React.FC<TechTickerProps> = ({ variant = 'marquee' }) => {
  if (variant === 'technologies') {
    return <TechnologiesMarquee />;
  }
  return <TimelineMarquee variant={variant as 'marquee' | 'collapsible'} />;
};

export default TechTicker;
