import Timeline from '../Fragments/Timeline';

export default function Skills() {
  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen flex justify-start items-center flex-col gap-5 py-10 laptop:justify-center text-white">
          <h1 className="text-center font-bold text-3xl mb-3 max-w-[1024px]">
            Timelines
          </h1>
          <div className="max-w-[1024px]">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}
