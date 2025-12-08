import PortfolioImage from "@/public/portfolio-img.svg";
import Image from "next/image";
export default function Home() {
  return (
    <main
      className=" w-full   min-h-screen font-main
      bg-linear-to-b from-neutral-900 from-20% via-neutral-900 via-40% to-neutral-800 to-90% "
    >
      <header className="border sticky w-fit top-5 border-gray-600 rounded-2xl px-20 py-6 mx-auto">
        <ul className="flex justify-between gap-20 text-base text-white/60 font-semibold">
          <li>
            {" "}
            <button className=" cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Home{" "}
            </button>
          </li>
          <li>
            {" "}
            <button className="cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out">
              About Me{" "}
            </button>
          </li>
          <li>
            {" "}
            <button className="cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Skills{" "}
            </button>
          </li>
          <li>
            {" "}
            <button className="cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Projects{" "}
            </button>
          </li>
          <li>
            {" "}
            <button className="cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out">
              Experience{" "}
            </button>
          </li>
        </ul>
      </header>
      <section className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-2 items-center justify-center gap-40  mx-20 min-h-[70vh] ">
          <div>
            {" "}
            <div>
              <Image src={PortfolioImage} alt="Picture of Author" />
            </div>
          </div>
          <div className="tracking-wider max-w-110 text-white">
            <span className="text-6xl/6 font-extrabold">
              Hello, I’m{" "}
              <span className="bg-linear-to-r from-blue-400 from-20% via-blue-200 via-60% to-blue-400 to-100% bg-clip-text text-transparent  ">
                Peter{" "}
              </span>
            </span>
            <br></br>
            <span className="text-2xl/15 font-semibold ">
              An information technology fresh graduate interested in everything{" "}
              <span className=" bg-linear-to-r from-blue-400 from-20% via-blue-200 via-60% to-blue-400 to-100% bg-clip-text text-transparent  ">
                {" "}
                web development.
              </span>
            </span>
            <br></br>
            <button className="group bg-white hover:bg-linear-to-r w-full hover:scale-110 ease-in transition-all duration-300  cursor-pointer from-blue-400 from-20% via-blue-200 via-60% to-blue-400 to-100% text-white font-semibold rounded-2xl p-1">
              <span className="flex justify-center w-full bg-neutral-800  rounded-2xl p-2">
                <span className="bg-white group-hover:bg-linear-to-r from-blue-400 from-20% via-blue-200 via-60% to-blue-400 to-100% bg-clip-text text-transparent font-extrabold">
                  View My Projects
                </span>
              </span>
            </button>
            <div className="justify-center flex">
              <div className="grid grid-cols-4 mt-7 gap-12 w-fit">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  className="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-full text-white/60 hover:border-blue-300 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.185 5.432 0v8.306h5v-10.5c0-5.385-7.023-5.385-7.023-5.385-2.716 0-3.656 1.636-4.441 3.193v-2.308z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  className="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-full text-white/60 hover:border-blue-300 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Phone Number */}
                <a
                  href="tel:+1234567890"
                  className="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-full text-white/60 hover:border-blue-300 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-2.2 2.2c-3.23-1.61-5.81-4.19-7.41-7.41l2.2-2.2c.28-.28.36-.67.25-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 2.01 3 2.45 3 3.55c0 9.71 7.89 17.6 17.6 17.6 1.1 0 1.55-.65 1.55-1.19v-2.59c0-.55-.45-.99-.99-.99z" />
                  </svg>
                </a>

                {/* Email (@ symbol) */}
                <a
                  href="mailto:peter@example.com"
                  className="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-full text-white/60 hover:border-blue-300 hover:text-blue-300 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
