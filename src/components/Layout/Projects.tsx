import ProjectCard from '../Fragments/projectCard';
export default function Projects() {
  return (
    <>
      <div className="bg-black">
        <div className="min-h-screen flex justify-center items-center flex-col gap-5 py-10 laptop:justify-center text-white">
          <h1 className="text-center font-bold text-3xl mb-3 max-w-[1024px]">
            Projects
          </h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 max-w-[1024px]">
            <ProjectCard
              link="https://trashure-ind.netlify.app"
              image="1.png"
              name="Trashure"
            >
              Trashure was builded by team with Javascript and Bootstraps. For
              Backend was builded with NodeJS, Mysql, ExpressJS and Sequelize
              ORM. This app had been include Webpack and Testing with Jasmine
              Library.
            </ProjectCard>
            <ProjectCard
              link="https://restaurant-ind.netlify.app"
              image="2.png"
              name="Restaurant-IND"
            >
              Restaurant-IND was builded by me with Javascript and CSS. For
              Backend used API by Dicoding, This app had been include Webpack
              and Testing with Jasmine Library.
            </ProjectCard>
            <ProjectCard
              link="https://eunoia-fasilkom.netlify.app/"
              image="3.png"
              name="eunoia-fasilkom"
            >
              Eunoia-fasilkom was builded by me with Javascript and CSS.
            </ProjectCard>
            <ProjectCard
              link="https://movie-catalogue-vitoo.netlify.app"
              image="6.png"
              name="Movie Catalogue"
            >
              Movie Catalogue was builded by me with Javascript and CSS. For
              Backend used API by themoviedb.org.
            </ProjectCard>
            <ProjectCard
              link="https://joincode.site/"
              image="5.png"
              name="Join Code"
            >
              Join Code was builded by me with NEXT.JS Framework (JSX) and
              TailwindCSS. For Backend was builded with NodeJS, PostgreeSQL,
              Prisma ORM, Supabase and Railway for Server. This app had been
              include Resend Library for send Email.
            </ProjectCard>
          </div>
        </div>
      </div>
    </>
  );
}
