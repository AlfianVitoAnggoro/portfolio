import SkillCard from '../Fragments/SkillCard';

export default function Skills() {
  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen flex justify-start items-center flex-col gap-5 py-10 laptop:justify-center text-white">
          <h1 className="text-center font-bold text-3xl mb-3 max-w-[1024px]">
            Skills
          </h1>
          <div className="grid grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-7 gap-3 max-w-[1024px]">
            <SkillCard image="NextJS.svg" name="NextJS" />
            <SkillCard image="ReactJS.svg" name="ReactJS" />
            <SkillCard image="TailwindCSS.svg" name="TailwindCSS" />
            <SkillCard image="Javascript.svg" name="Javascript" />
            <SkillCard image="Html.svg" name="HTML" />
            <SkillCard image="Css.svg" name="CSS" />
            <SkillCard image="Supabase.svg" name="Supabase" />
            <SkillCard image="Figma.svg" name="Figma" />
            <SkillCard image="Bootstraps.svg" name="Bootstraps" />
            <SkillCard image="Dart.svg" name="Dart" />
            <SkillCard image="Firebase.svg" name="Firebase" />
            <SkillCard image="Flutter.svg" name="Flutter" />
            <SkillCard image="Mysql.svg" name="Mysql" />
            <SkillCard image="NodeJS.svg" name="NodeJS" />
            <SkillCard image="PHP.svg" name="PHP" />
            <SkillCard image="Laravel.png" name="Laravel" />
            <SkillCard image="Codeigniter.png" name="Codeigniter" />
            <SkillCard image="MongoDB.png" name="MongoDB" />
            <SkillCard image="PostgreeSql.png" name="PostgreeSql" />
          </div>
        </div>
      </div>
    </>
  );
}
