'use client';

import React from 'react';
import TimelineMarquee from './TimelineMarquee';

interface TechTickerProps {
  variant?: 'marquee' | 'collapsible' | 'dual-layer';
}

// Backwards-compatible wrapper so existing imports still work
const TechTicker: React.FC<TechTickerProps> = ({ variant = 'marquee' }) => {
  return <TimelineMarquee variant={variant} />;
};

export default TechTicker;
