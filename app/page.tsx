export default function Home() {
  return (
    <main
      className=" w-full   min-h-screen
      bg-linear-to-b from-gray-900 from-20% via-gray-900 via-40% to-gray-800 to-90% "
    >
      <div className="border sticky w-fit top-5 border-gray-600 rounded-2xl px-20 py-6 mx-auto">
        <ul className="flex justify-between gap-20 text-base font-semibold">
          <li>
            {" "}
            <button className="cursor-pointer hover:text-blue-300 transition-colors duration-300 ease-in-out">
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
      </div>
      <div className="flex flex-col items-center justify-center  min-h-[70vh]">
        <span>Image</span>
        <span>Image</span>
        <span>Image</span>
      </div>
    </main>
  );
}
