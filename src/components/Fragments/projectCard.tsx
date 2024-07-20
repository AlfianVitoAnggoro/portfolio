import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

interface ProjectCardProps {
  projectUrl: string;
  imageUrl: string;
  name: string;
}

const ProjectCard: React.FC<React.PropsWithChildren<ProjectCardProps>> = ({
  projectUrl,
  imageUrl,
  name,
  children,
}) => {
  return (
    <>
      <CardContainer
        className="inter-var w-full"
        containerClassName="max-w-[800px] px-10"
      >
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-[2rem] font-bold text-neutral-600 dark:text-white"
          >
            {name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-[1.2rem] w-full mt-2 dark:text-neutral-300"
          >
            {children}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-2xl shadow-black"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-center items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 p-10 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <a href={projectUrl} target="_blank">
                Try It
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProjectCard;
