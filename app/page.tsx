import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import What from "@/components/sections/What";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: "url('/pattern.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      <main className="flex w-full max-w-7xl flex-col items-center px-5 pt-28 sm:px-8 sm:pt-36 lg:px-10 lg:pt-44">
        {/* Hero */}
        <div className="flex w-full flex-col items-start pb-10">
          <p className="pb-4 text-2xl font-light sm:text-4xl md:text-5xl">
            Hello, I am a
          </p>

          <div className="flex flex-col gap-0.5">
            <h1 className="font-epilogue font-bold text-5xl leading-[0.95] sm:text-7xl md:text-8xl md:text-shadow-brutal-red-700 lg:text-9xl lg:text-shadow-brutal-red-700">
              Software Engineer
            </h1>

            <h2 className="font-epilogue text-3xl leading-[1] sm:text-5xl md:text-6xl md:text-shadow-brutal-red-70 lg:text-[80px] lg:text-shadow-brutal-red-700">
              Fullstack Website Developer
            </h2>
          </div>
        </div>

        {/* Hero description */}
        <div className="mt-10 mb-12 flex w-full flex-col gap-8 font-poppins font-light sm:mt-14 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex flex-col">
            <p>Let's Talk</p>
            <p className="break-all sm:break-normal">hello@rizlabs.my.id</p>
          </div>

          <div className="max-w-full sm:max-w-[450px]">
            <p>
              A full-stack software engineer focusing on web applications,
              backend systems, and modern digital experiences.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="w-full">
          <About />
          <What />
          <TechStack />
          <Projects />
          <Experiences />
          <Contact />
        </div>
      </main>
    </div>
  );
}
