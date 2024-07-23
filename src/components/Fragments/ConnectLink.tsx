import React from 'react';
import { LinkPreview } from '../ui/link-preview';

interface ConnectLinkProps {
  socialMediaUrl: string;
  imageUrl: string;
  name: string;
}

const ConnectLink: React.FC<ConnectLinkProps> = ({
  name,
  imageUrl,
  socialMediaUrl,
}) => {
  return (
    <LinkPreview url={socialMediaUrl} className="font-bold text-white">
      <img
        src={imageUrl}
        alt={name}
        width={24}
        height={24}
        className="object-contain w-12 h-auto bg-white rounded-full"
      />
    </LinkPreview>
  );
};

export default ConnectLink;
