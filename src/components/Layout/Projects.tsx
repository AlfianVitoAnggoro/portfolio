import { PROJECTS_DATA } from '@/constants';
import ProjectCard from '../Fragments/projectCard';
import { ProjectType } from '@/types';
export default function Projects() {
  return (
    <>
      <div className="bg-black flex justify-center items-center">
        <div className="min-h-screen flex-col gap-x-5 py-10 text-white max-w-[1024px]">
          <h1 className="text-center font-bold text-[3rem] mb-3">Projects</h1>
          <div className="flex flex-col items-center justify-center ">
            {PROJECTS_DATA.map((item: ProjectType, i: number) => (
              <ProjectCard
                key={i}
                projectUrl={item?.projectUrl}
                imageUrl={item?.imageUrl}
                name={item?.name}
              >
                {item?.description}
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
