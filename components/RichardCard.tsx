import React from 'react';

interface RichardCardProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  variant?: 'purple' | 'orange' | 'green' | 'red' | 'blue';
}

const RichardCard: React.FC<RichardCardProps> = ({ title, children, icon, variant = 'purple' }) => {
  return (
    <article className={`richard-card ${variant}`}>
      <p className="richard-card-title">
        {icon && <span className="richard-card-icon">{icon}</span>}
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </p>
      <div className="richard-card-content">{children}</div>
    </article>
  );
};

export default RichardCard;
