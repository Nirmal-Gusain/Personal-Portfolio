import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className=" bg-[#292F36] py-10 md:pt-12 md:px-32 md:pb-12 flex flex-col gap-16">
      <h2 className="md:text-[85px] text-5xl ubuntu text-center text-[#98FAEC]">
        Developer
      </h2>

      <section className="px-8 md:px-32 flex flex-col md:flex-row gap-10 md:gap-32 w-full">
        <section className="min-w-[280px] md:min-w-[300px] rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px] px-6 py-6 border-2 flex flex-col gap-8 bshadow border-white">
          <div className="flex flex-col gap-8 text-white">
            <div className="flex items-center justify-center flex-col">
              <img
                src="Profile photo.png"
                className="rounded-full h-20 w-20 md:h-24 md:w-24 bg-white mb-5"
                alt="Profile"
              />
              <h2 className="text-2xl md:text-3xl ubuntu">Nirmal</h2>
              <p className="Cfont text-xs md:text-sm">Full-Stack Developer</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 Cfont text-xs md:text-sm">
              <p className="flex gap-2 items-center">
                <MdOutlineEmail size={16} className="text-[#12f7d6]" />
                nirmalgusain03@gmail.com
              </p>
              <p className="flex gap-2 items-center">
                <CiLocationOn size={16} className="text-[#12f7d6]" />
                Dehradun, Uttarakhand
              </p>
              <div className="flex gap-4">
                <p className="px-2 bg-[#12f7d6] text-black rounded-full">
                  HTML
                </p>
                <p className="px-2 bg-[#12f7d6] text-black rounded-full">CSS</p>
                <p className="px-2 bg-[#12f7d6] text-black rounded-full">JS</p>
                <p className="px-2 bg-[#12f7d6] text-black rounded-full">
                  REACT
                </p>
              </div>
            </div>
          </div>
          <button className="bg-white px-6 py-3 rounded-full text-lg w-fit  mx-auto md:mx-0">
            <a href="https://drive.google.com/file/d/15gbfdYrltoSWVO-sZXv3WkoKFsUJt4Nz/view?usp=sharing" target="_blank" className="flex items-center gap-3">Download CV <MdOutlineFileDownload size={25} /></a>
             
          </button>
        </section>

        <section className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col">
            <span className="text-[#12F7D6] text-xs md:text-sm Cfont">
              &lt;h1&gt;
            </span>
            <h2 className="text-4xl md:text-5xl pl-4 md:pl-7 text-white font-medium ubuntu">
              Hey
            </h2>
            <h2 className="text-4xl md:text-5xl pl-4 md:pl-7 text-white font-medium ubuntu">
              I'm <span className="text-[#12f7d6]">Nirmal</span>
            </h2>
            <h2 className="text-4xl md:text-5xl pl-4 md:pl-7 text-white font-medium ubuntu">
              Full-Stack Developer
            </h2>
            <span className="text-[#12F7D6] text-xs md:text-sm Cfont">
              &lt;/h1&gt;
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[#12F7D6] text-xs md:text-sm Cfont">
              &lt;p&gt;
            </span>
            <p className="pl-4 md:pl-7 text-white ubuntu text-sm md:text-base">
              I'm Nirmal Singh Gusain, a Full Stack Developer skilled in the
              MERN stack. I enjoy building clean, responsive web applications
              and constantly learning new technologies.
            </p>
            <span className="text-[#12F7D6] text-xs md:text-sm Cfont">
              &lt;/p&gt;
            </span>
          </div>

          <div className="flex items-center gap-5 mt-3 justify-center md:justify-start">
            <button className="text-[#12f7d6] text-xl md:text-2xl text-left font-medium Cfont">
              <a href="mailto:nirmalgusain03@gmail.com">Let's Talk</a>
              
            </button>
            <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center bg-gray-600 rounded-full">
              <MdOutlineEmail size={20} color="12f7d6" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
