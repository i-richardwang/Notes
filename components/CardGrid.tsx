import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
  stagger?: boolean;
  layout?: 'default' | 'wide-left';
}

const CardGrid: React.FC<CardGridProps> = ({ children, stagger = false, layout = 'default' }) => {
  return (
    <div className={`card-grid ${stagger ? 'stagger' : ''} ${layout}`}>
      {children}
    </div>
  );
};

export default CardGrid;
