import React from 'react';

interface ConnectLinkProps {
  link: string;
  icon: string;
  alt: string;
}

const ConnectLink: React.FC<ConnectLinkProps> = ({ link, icon, alt }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white w-9 h-9 tablet:w-10 tablet:h-10 laptop:w-11 laptop:h-11 hover:scale-125 rounded-full flex items-center justify-center"
    >
      <img
        src={'/images/socialMedia/' + icon}
        alt={alt}
        width={24}
        height={24}
        className="object-contain w-full h-full"
      />
    </a>
  );
};

export default ConnectLink;
