import React from 'react';
// import Icon from './Icon'; // 假设您有一个Icon组件

interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, href }) => {
  return (
    <div className="link-card">
      <span className="link-card-content">
        <a href={href}>
          <span className="link-card-title" dangerouslySetInnerHTML={{ __html: title }} />
        </a>
        {description && <span className="link-card-description" dangerouslySetInnerHTML={{ __html: description }} />}
      </span>
      {/* <Icon name="right-arrow" size="1.333em" className="link-card-icon" /> */}
    </div>
  );
};

export default LinkCard;

