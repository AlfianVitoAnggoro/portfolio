// import Spline from '@splinetool/react-spline';
import ConnectLink from '../Fragments/ConnectLink';

export default function About() {
  return (
    <>
      <div className="relative">
        {/* <Spline
          scene="https://prod.spline.design/SQORZ7fT4u6GjbZG/scene.splinecode"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <div className="relative z-10 min-h-screen px-5 py-5 flex justify-evenly items-center gap-5 flex-col bg-black text-white">
          <div className="space-y-3 max-w-[1024px]">
            <h1 className="text-center font-bold text-3xl">About Me</h1>
            <p className="text-center">
              I am a Web Developer from Bogor, Indonesia and Fresh Graduate from
              Singaperbangsa University Karawang. I start for learn programming
              at 2020. I have some experience as a web developer in various
              sectors such as industrial, individual project, team project and
              more. I am proficient in Web Developer with React, Next.JS,
              Codeigniter and Laravel and i am interest for being a Android
              Developer with Flutter and Kotlin, and I am excited to bring my
              skills and leadership to meaningful projects.
            </p>
          </div>
          <div className="space-y-3 max-w-[1024px]">
            <h1 className="text-center font-bold text-3xl">For Connect</h1>
            <div className="flex justify-center items-center gap-x-3">
              <ConnectLink
                link="https://github.com/alfianvitoanggoro"
                icon="Github.svg"
                alt="Github"
              />
              <ConnectLink
                link="https://linkedin.com/alfianvitoanggoro"
                icon="Linkedin.svg"
                alt="Linkedin"
              />
              <ConnectLink
                link="https://instagram.com/atokemen_"
                icon="Instagram.svg"
                alt="Instagram"
              />
              <ConnectLink
                link="https://x.com/Atokemen_"
                icon="X.svg"
                alt="X"
              />
              <ConnectLink
                link="https://youtube.com/@alfianvito"
                icon="Youtube.svg"
                alt="Youtube"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
