import React from 'react';

interface ProjectCardProps {
  link: string;
  image: string;
  name: string;
}

const ProjectCard: React.FC<React.PropsWithChildren<ProjectCardProps>> = ({
  link,
  image,
  name,
  children,
}) => {
  return (
    <div className="bg-black w-auto mx-5">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded h-40 tablet:h-50 w-full flex items-center justify-center"
      >
        <div className="absolute z-10 h-full w-full hover:opacity-25">
          <img
            src={'images/projects/' + image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="text-white p-5">
          <h1 className="font-bold">{name}</h1>
          <p className="text-sm">{children}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
