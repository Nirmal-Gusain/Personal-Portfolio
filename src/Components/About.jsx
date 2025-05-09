import React from "react";

const About = () => {
  return (
    <section className="md:h-screen h-fit bg-[url('About.png')] md:px-32 px-6 md:py-10 py-10 flex flex-col justify-between md:gap-20 gap-12">
      <img src="Scroll.png" className="md:h-20 h-12 m-auto" alt="" />
      <div className="flex md:gap-20 gap-10 flex-col md:flex-row">
        <div className="flex flex-col gap-12 ">
          <h2 className="px-10 py-4 w-fit bg-gray-700 border-2 border-[#12f7d6] text-white text-2xl ubuntu font-medium rounded-tl-3xl rounded-br-3xl">
            About Me
          </h2>

          <div className="bg-gray-700 md:p-10 p-6 rounded-2xl  flex flex-col">
            <span className="text-[#12F7D6] text-xs md:text-sm Cfont">
              &lt;p&gt;
            </span>
            <h2 className="pl-4 md:pl-7 pt-3 text-2xl font-medium Cfont text-[#12f7d6]">
              Hello!
            </h2>
            <div className="flex flex-col gap-2">
              <p className="pl-4 md:pl-7 text-white ubuntu text-sm md:text-base">
                I'm a Full Stack Developer passionate about building clean,
                scalable, and efficient web applications. I specialize in the
                MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus
                on creating seamless user experiences.
              </p>
              <p className="pl-4 md:pl-7 text-white ubuntu text-sm md:text-base">
                My journey started with a love for coding and problem-solving,
                which quickly turned into a career path. I enjoy learning new
                technologies and constantly pushing my skills to the next level.
              </p>
              <p className="pl-4 md:pl-7 text-white ubuntu text-sm md:text-base">
                I'm excited to contribute to innovative teams, build impactful
                projects, and grow as a developer. Let's create something
                amazing together!
              </p>
            </div>
            <span className="text-[#12F7D6] text-xs md:text-sm Cfont">
              &lt;/p&gt;
            </span>
          </div>

        </div>


        <img
          src="Image.jpg"
          className=" rounded-2xl object-cover md:h-full h-[250px] md:w-[350px] w-full"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
