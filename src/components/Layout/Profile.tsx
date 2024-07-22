import '@fontsource/silkscreen/700.css';
import { TypeAnimation } from 'react-type-animation';
import { LampContainer } from '../ui/lamp';
import { motion } from 'framer-motion';
import { TextRevealCard } from '../ui/text-reveal-card';
import { FlipWords } from '../ui/flip-words';

export default function Profile() {
  const words: any = ['Javascript', 'Typescript', 'PHP'];
  return (
    <>
      <div className="h-screen px-5 py-10 flex justify-center items-center gap-5 flex-col bg-slate-950">
        <div className="flex justify-center items-center h-1/3 max-w-[1024px]">
          <div className="flex flex-col gap-5 justify-center items-center text-white z-10">
            <LampContainer className="mt-32 laptop:mt-20">
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                className="-mt-14 bg-gradient-to-br from-white to-slate-500 bg-clip-text text-center font-bold tracking-tight text-transparent md:text-7xl text-xl tablet:text-[2rem]"
              >
                HELLO, I'M <br />
                <TextRevealCard
                  text="ALFIAN VITO ANGGORO"
                  revealText="FULLSTACK WEB DEVELOPER"
                  className="mt-2"
                ></TextRevealCard>
                <br />
              </motion.h1>
            </LampContainer>
          </div>
        </div>
        <div className="flex justify-center items-center h-2/3 max-w-[1024px] z-20">
          <div className="hidden laptop:basis-1/4 h-full text-white laptop:flex flex-col justify-between items-start py-5">
            <div className="space-y-2">
              <h1 className="text-[1.7rem] font-bold">Expertise</h1>
              <FlipWords words={words} className="text-white text-[1.2rem]" />
            </div>
            <div className="space-y-2">
              <h1 className="text-[1.7rem] font-bold">Education</h1>
              <p className="text-[1.2rem] font-normal">
                Bachelor's Degree of Singaperbangsa Karawang University
              </p>
            </div>
          </div>
          <div className="laptop:basis-2/4 w-full h-full flex justify-center items-center">
            <img
              src="images/profiles/2.png"
              width={100}
              height={100}
              alt="Alfian Vito Anggoro"
              className="w-auto h-full"
            />
          </div>
          <div className="hidden laptop:basis-1/4 h-full text-white laptop:flex flex-col justify-between items-end text-end py-5">
            <div className="space-y-2">
              <h1 className="text-[1.7rem] font-bold">Interest</h1>
              <p className="text-xl font-normal text-[1.2rem]">
                <TypeAnimation
                  sequence={['Flutter', 1500, 'Cloud', 1500, 'AI', 1500]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-[1.7rem] font-bold">Live in</h1>
              <p className="text-[1.2rem] font-normal">Bogor, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      {/* <marquee
        behavior="scroll"
        direction="left"
        className="text-white text-5xl font-semibold py-3"
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, #000000, #17000a, #210017, #270023, #280034, #28003f, #26004b, #200158, #28015e, #2f0165, #37016b, #3f0071)',
        }}
      >
        Web Developer ⚽ Cloud Enthusiast 🐈 AI Enthusiast 🌄 Interested Android
        💻 Interested IOS
      </marquee> */}
    </>
  );
}
