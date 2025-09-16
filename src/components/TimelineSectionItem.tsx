import React from 'react';

export type TimelineSide = 'left' | 'right';
export type TimelineType = 'history' | 'data';

export interface TimelineSectionItemProps {
  side: TimelineSide;
  type: TimelineType;
  year: string;
  category: string;
  title: string;
  description: string;
  citations?: Array<{
    id: string;
    text: string;
  }>;
  tags: string[];
}

const TimelineSectionItem: React.FC<TimelineSectionItemProps> = ({
  side,
  type,
  year,
  category,
  title,
  description,
  citations = [],
  tags
}) => {
  const isHistory = type === 'history';
  const accentColor = isHistory ? 'accent' : 'accent-2';
  const nodeClass = isHistory ? 'lapiz' : 'copper';
  const connectorClass = isHistory ? 'copper' : 'lapiz';
  
  const cardClasses = `bg-background rounded-xl p-6 border border-border-color ${
    isHistory ? 'history-emphasis' : 'data-emphasis'
  } transition-colors duration-300 hover:border-accent`;

  const categoryClasses = `text-sm ${accentColor} font-mono mb-2`;
  const yearClasses = `absolute left-1/2 -translate-x-1/2 -translate-y-8 text-xs font-mono px-2 py-1 rounded-full bg-muted border border-border-color text-${accentColor}`;
  const tagClasses = `px-3 py-1 bg-${accentColor} text-white text-xs rounded-full`;

  return (
    <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
      {side === 'left' ? (
        <>
          <div className="md:pr-16">
            <div className={cardClasses}>
              <div className={categoryClasses}>{category}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-foreground/70 mb-4">{description}</p>
              
              {citations.length > 0 && (
                <div className="space-y-2 mb-4">
                  {citations.map((citation) => (
                    <aside key={citation.id} className="bg-muted/50 border-l-4 border-accent-2 pl-4 py-2 rounded-r-lg">
                      <p className="text-xs text-foreground/60 italic leading-relaxed">
                        {citation.text}
                      </p>
                    </aside>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className={tagClasses}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block" />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          <div className="md:pl-16">
            <div className={cardClasses}>
              <div className={categoryClasses}>{category}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-foreground/70 mb-4">{description}</p>
              
              {citations.length > 0 && (
                <div className="space-y-2 mb-4">
                  {citations.map((citation) => (
                    <aside key={citation.id} className="bg-muted/50 border-l-4 border-accent-2 pl-4 py-2 rounded-r-lg">
                      <p className="text-xs text-foreground/60 italic leading-relaxed">
                        {citation.text}
                      </p>
                    </aside>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className={tagClasses}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      
      <span className={`timeline-node timeline-node--${nodeClass} absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`} />
      <span className={`connector-${side} connector-${side}--${connectorClass}`} />
      <div className={yearClasses}>{year}</div>
    </div>
  );
};

export default TimelineSectionItem;




