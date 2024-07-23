import { SOCIAL_MEDIA_DATA } from '@/constants';
import ConnectLink from '../Fragments/ConnectLink';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { SocialMediaType } from '@/types';

export default function About() {
  const words = `I am a Fullstack Web
  Developer from Bogor, Indonesia and a Bachelor's Degree from
  Singaperbangsa Karawang University 2024. I start to learn
  programming at 2020. I have some experience as a web developer in
  various sectors such as industrial, individual project, team
  project and more. I am familiar with React.JS, Next.JS, Laravel and Codeigniter. But I am interest for being a Back-End or Cloud Computing
  Developer, and I am excited to bring my skills and leadership to
  meaningful projects.
`;

  return (
    <>
      <div className="relative bg-slate-950 flex justify-center items-center">
        <div className="max-w-[1024px] min-h-screen flex flex-col justify-evenly items-center px-5 py-10 gap-5 text-white">
          <div className="space-y-3 flex-1 flex flex-col justify-start items-center py-5 gap-5">
            <h1 className="text-center font-bold text-3xl ">About Me</h1>
            <p className="text-center">
              <TextGenerateEffect
                words={words}
                className="text-white text-[1.2rem]"
              />
            </p>
          </div>
          <div className="space-y-3 h-full flex-1 flex flex-col justify-start items-center py-5 gap-5">
            <h1 className="text-center font-bold text-3xl">For Connect</h1>
            <div className="flex justify-center items-center gap-x-3">
              {SOCIAL_MEDIA_DATA.map((item: SocialMediaType, i: number) => (
                <ConnectLink
                  socialMediaUrl={item.socialMediaUrl}
                  imageUrl={item.imageUrl}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
