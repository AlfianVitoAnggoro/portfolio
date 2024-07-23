import { SKILLS_DATA } from '@/constants';
import SkillCard from '../Fragments/SkillCard';
import { Boxes } from '../ui/background-boxes';
import { SkillType } from '@/types';

export default function Skills() {
  return (
    <>
      <div className="relative bg-black">
        <div className="relative overflow-hidden min-h-screen flex justify-start items-center flex-col gap-5 p-10 laptop:justify-center text-white">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <h1 className="text-center font-bold text-3xl mb-3 max-w-[1024px] relative z-20">
            Skills
          </h1>
          <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-7 gap-3 max-w-[1024px] relative z-20">
            {SKILLS_DATA.map((item: SkillType, i: number) => (
              <SkillCard imageUrl={item.imageUrl} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
