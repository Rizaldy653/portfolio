export default function About() {
  return (
    <div className="w-full mt-16">
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-poppins text-3xl font-bold text-[#FFE66D] text-shadow-brutal text-stroke-brutal">
          About Me
        </h2>

        <div className="h-[3px] flex-1 bg-black" />
      </div>

      <div className="flex flex-row gap-4 mt-12 font-poppins font-light">
        <div className="w-full flex flex-col gap-2 md:w-[50%] lg:w--[50%]">
          <span>
            I’m Rizaldy, a Junior Full-Stack Software Engineer focused on
            building reliable web applications and backend systems.
          </span>
          <span>
            I enjoy turning real-world problems into practical software — from
            REST APIs and database design to internal tools and business
            applications.
          </span>
          <span>
            My main stack includes Laravel, Node.js, PHP, JavaScript, SQL, and
            MySQL/PostgreSQL. I also enjoy exploring system architecture, API
            design, authentication, and deployment.
          </span>
          <span>
            Currently, I’m focused on growing as a software engineer by building
            useful projects, learning better engineering practices, and solving
            problems through code.
          </span>
        </div>
      </div>
    </div>
  );
}
