import React from "react";

const Skills = () => {
  return (
    <section className=" h-fit bg-[url('Skills.jpg')] md:px-32 px-6 md:py-10 py-10 flex flex-col justify-between md:gap-20 gap-15">
      <div className="flex flex-col md:gap-16 gap-12">
        <img src="Scroll.png" className="md:h-20 h-12 m-auto" alt="" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="md:text-6xl text-4xl text-[#12f7d6] font-medium border-b-2 border-b-[#12f7d6] ubuntu pb-2 ">
            Skills
          </h2>
          <p className="text-gray-400 Cfont text-center">
            "I am striving to never stop learning and improving"
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="md:text-3xl text-2xl font-medium border-b-2 border-b-[#12f7d6] w-fit m-auto text-[#12f7d6]">
          Frontend Skills
        </h2>
        <div className="flex md:justify-between justify-center gap-x-15 gap-y-5 items-center flex-wrap">
          <div className="flex flex-col items-center">
            <img src="html (2).png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              HTML
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="css-alt.png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              CSS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="javascript (1).png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="tailwind.png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              Tailwind
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="react (1).png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              React JS
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="md:text-3xl text-2xl font-medium border-b-2 border-b-[#12f7d6] w-fit m-auto text-[#12f7d6]">
          Backend Skills
        </h2>
        <div className="flex md:justify-between justify-center gap-x-15 gap-y-5 items-center flex-wrap w-3/5 m-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-1">
            <img src="node.png" className="md:h-20 h-15" alt="" />

            </div>
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              Node Js
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="mongoDB.png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              Mongo DB
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-1">
            <img src="express.png" className="md:h-20 h-15" alt="" />

            </div>
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              Express Js
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-10">
        <h2 className="md:text-3xl text-2xl font-medium border-b-2 border-b-[#12f7d6] w-fit m-auto text-[#12f7d6]">
          Developer Tools
        </h2>
        <div className="flex md:justify-between justify-center gap-x-10 gap-y-5 items-center flex-wrap w-4/5 m-auto">
          <div className="flex flex-col items-center">
            <img src="figma.png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              Figma
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="github (1).png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              Github
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="wordpress.png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              WordPress
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="vsCode.png" className="md:h-20 h-15" alt="" />
            <p className="text-white font-medium Cfont md:text-2xl text-md text-center mt-2">
              VS Code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
