import React from "react";

const Projects = () => {
  return (
    <section className=" h-fit bg-[url('Works.jpg')] md:px-32 px-6 md:py-10 py-10 flex flex-col justify-between md:gap-16 gap-8">
      <div className="flex flex-col md:gap-16 gap-12">
        <img src="Scroll.png" className="md:h-20 h-12 m-auto" alt="" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="md:text-6xl text-4xl text-[#12f7d6] font-medium border-b-2 border-b-[#12f7d6] ubuntu pb-2">
            Projects
          </h2>
          <p className="text-gray-400 Cfont text-center">
            "From idea to execution, here are some projects I truly enjoyed
            building"
          </p>
        </div>
      </div>

    <div className="flex flex-col gap-30">

      <div className="flex gap-10 justify-between flex-col md:flex-row ">
        <img src="project1.png" className="md:w-[45%] rounded-2xl" alt="" />
        <div className="md:w-[50%] flex flex-col justify-between gap-5">
          <h1 className="text-[#AB6BE0] text-4xl border-b-2 font-medium ubuntu w-fit">
            Weatherly
          </h1>
          <p className="text-white font-medium Cfont">
            Tech Stack : React Js, Tailwind CSS
          </p>
          <div className="text-white  Cfont bg-white/20 py-2 px-5 rounded backdrop-blur-[10px] ">
            <p>
              • Clean and responsive weather app built with React and Tailwind
              CSS.
            </p>
            <p>• Fetches real-time weather data using public weather APIs.</p>
            <p>• Supports city search and geolocation-based weather updates.</p>
          </div>
          <div className="flex gap-10">
            <button className="md:px-10 md:py-3 px-5 py-2 w-fit bg-gray-700 border-2 border-[#AE6ADF] text-white md:text-lg ubuntu font-medium rounded-tl-3xl rounded-br-3xl transition duration-300 hover:shadow-[0_0_15px_#AE6ADF] hover:border-[#AE6ADF] hover:bg-gray-800">
              <a
                href="https://weather-app-one-sable-19.vercel.app/"
                target="_blank"
              >
                View Project
              </a>
            </button>
            <button className="md:px-10 md:py-3 px-5 py-2 w-fit bg-gray-700 border-2 border-[#AE6ADF] text-white md:text-lg ubuntu font-medium rounded-tl-3xl rounded-br-3xl transition duration-300 hover:shadow-[0_0_15px_#AE6ADF] hover:border-[#AE6ADF] hover:bg-gray-800">
              <a
                href="https://github.com/Nirmal-Gusain/Weather-App"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-10 justify-between flex-col-reverse md:flex-row">
        <div className="md:w-[50%] flex flex-col justify-between gap-5">
          <h1 className="text-[#AB6BE0] text-4xl border-b-2 font-medium ubuntu w-fit">
            Personal Portfolio
          </h1>
          <p className="text-white font-medium Cfont">
            Tech Stack : React Js, Tailwind CSS
          </p>
          <div className="text-white  Cfont bg-white/20 py-2 px-5 rounded backdrop-blur-[10px] ">
            <p>
              • Clean and responsive weather app built with React and Tailwind
              CSS.
            </p>
            <p>• Fetches real-time weather data using public weather APIs.</p>
            <p>• Supports city search and geolocation-based weather updates.</p>
          </div>
          <div className="flex gap-10">
            <button className="md:px-10 md:py-3 px-5 py-2 w-fit bg-gray-700 border-2 border-[#AE6ADF] text-white md:text-lg ubuntu font-medium rounded-tl-3xl rounded-br-3xl transition duration-300 hover:shadow-[0_0_15px_#AE6ADF] hover:border-[#AE6ADF] hover:bg-gray-800">
              <a
                href="https://weather-app-one-sable-19.vercel.app/"
                target="_blank"
              >
                View Project
              </a>
            </button>
            <button className="md:px-10 md:py-3 px-5 py-2 w-fit bg-gray-700 border-2 border-[#AE6ADF] text-white md:text-lg ubuntu font-medium rounded-tl-3xl rounded-br-3xl transition duration-300 hover:shadow-[0_0_15px_#AE6ADF] hover:border-[#AE6ADF] hover:bg-gray-800">
              <a
                href="https://github.com/Nirmal-Gusain/Weather-App"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
        <img src="project2.png" className="md:w-[45%] md:h-[320px] h-[178px] object-cover rounded-2xl" alt="" />
      </div>

     <div className="flex gap-10 justify-between flex-col md:flex-row ">
        <img src="project3.png" className="md:w-[45%] md:h-[320px] h-[178px] object-cover rounded-2xl" alt="" />
        <div className="md:w-[50%] flex flex-col justify-between gap-5">
          <h1 className="text-[#AB6BE0] text-4xl border-b-2 font-medium ubuntu w-fit">
            3legant.
          </h1>
          <p className="text-white font-medium Cfont">
            Tech Stack : React Js, Tailwind CSS
          </p>
          <div className="text-white  Cfont bg-white/20 py-2 px-5 rounded backdrop-blur-[10px] ">
            <p>
              • Clean and responsive weather app built with React and Tailwind
              CSS.
            </p>
            <p>• Fetches real-time weather data using public weather APIs.</p>
            <p>• Supports city search and geolocation-based weather updates.</p>
          </div>
          <div className="flex gap-10">
            <button className="md:px-10 md:py-3 px-5 py-2 w-fit bg-gray-700 border-2 border-[#AE6ADF] text-white md:text-lg ubuntu font-medium rounded-tl-3xl rounded-br-3xl transition duration-300 hover:shadow-[0_0_15px_#AE6ADF] hover:border-[#AE6ADF] hover:bg-gray-800">
              <a
                href="https://elegant-react-js.vercel.app/"
                target="_blank"
              >
                View Project
              </a>
            </button>
            <button className="md:px-10 md:py-3 px-5 py-2 w-fit bg-gray-700 border-2 border-[#AE6ADF] text-white md:text-lg ubuntu font-medium rounded-tl-3xl rounded-br-3xl transition duration-300 hover:shadow-[0_0_15px_#AE6ADF] hover:border-[#AE6ADF] hover:bg-gray-800">
              <a
                href="https://github.com/Nirmal-Gusain/Elegant.---React-JS"
                target="_blank"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
      
    </div>



    </section>
  );
};

export default Projects;
