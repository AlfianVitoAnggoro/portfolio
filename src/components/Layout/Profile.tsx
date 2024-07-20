import '@fontsource/silkscreen/700.css';
import { TypeAnimation } from 'react-type-animation';

export default function Profile() {
  return (
    <>
      <div
        className="h-screen px-5 pt-10 flex justify-center items-center gap-5 flex-col"
        style={{
          backgroundImage:
            'linear-gradient(to right bottom, #000000, #17000a, #210017, #270023, #280034, #28003f, #26004b, #200158, #28015e, #2f0165, #37016b, #3f0071)',
        }}
      >
        <div className="flex justify-center items-center h-1/3 max-w-[1024px]">
          <div className="flex flex-col gap-5 justify-center items-center text-white">
            <h1 className="font-medium  text-2xl laptop:text-3xl text-center">
              HELLO, I'M
            </h1>
            <h1 className="font-bold text-3xl laptop:text-4xl text-center">
              Alfian Vito Anggoro
            </h1>
            <h1 className="font-normal text-xl laptop:text-2xl text-center">
              <TypeAnimation
                sequence={['Web Developer', 1500, 'Fullstack Developer', 1500]}
                speed={50}
                style={{ fontSize: '1em' }}
                repeat={Infinity}
              />
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center h-2/3 max-w-[1024px]">
          <div className="hidden laptop:basis-1/3 h-full text-white laptop:flex flex-col justify-between items-start py-5">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Expertise</h1>
              <p className="text-xl font-normal">
                <TypeAnimation
                  sequence={[
                    'Javascript',
                    1500,
                    'Typescript',
                    1500,
                    'PHP',
                    1500,
                  ]}
                  speed={50}
                  style={{ fontSize: '1em' }}
                  repeat={Infinity}
                />
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Education</h1>
              <p className="text-xl font-normal">
                Bachelor's Degree of Singaperbangsa Karawang University
              </p>
            </div>
          </div>
          <div className="laptop:basis-1/3 w-full h-full flex justify-end items-end">
            <img
              src="images/profiles/2.png"
              width={100}
              height={100}
              alt="Alfian Vito Anggoro"
              className="w-auto h-full"
            />
          </div>
          <div className="hidden laptop:basis-1/3 h-full text-white laptop:flex flex-col justify-between items-end text-end  py-5">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Interest</h1>
              <p className="text-xl font-normal">
                <TypeAnimation
                  sequence={['Flutter', 1500, 'Cloud', 1500, 'AI', 1500]}
                  speed={50}
                  style={{ fontSize: '1em' }}
                  repeat={Infinity}
                />
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Live in</h1>
              <p className="text-xl font-normal">Bogor, Indonesia</p>
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
