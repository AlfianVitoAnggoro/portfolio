import React from 'react';
import { LinkPreview } from '../ui/link-preview';

interface ConnectLinkProps {
  link: string;
  icon: string;
  alt: string;
}

const ConnectLink: React.FC<ConnectLinkProps> = ({ link, icon, alt }) => {
  return (
    <LinkPreview url={link} className="font-bold text-white">
      <img
        src={'/images/socialMedia/' + icon}
        alt={alt}
        width={24}
        height={24}
        className="object-contain w-12 h-auto bg-white rounded-full"
      />
    </LinkPreview>
  );
};

export default ConnectLink;
