import React from "react";
import { PiTelegramLogoBold } from "react-icons/pi";

const Contact = () => {
  return (
    <section className="md:h-screen h-fit bg-gray-800 md:px-32 px-6 md:py-10 py-10 flex flex-col justify-between md:gap-16 gap-8">
      <div className="flex flex-col md:gap-16 gap-12">
        <img src="Scroll.png" className="md:h-20 h-12 m-auto" alt="" />
        <div className="flex flex-col items-center gap-2">
          <h2 className="md:text-6xl text-4xl text-[#12f7d6] font-medium border-b-2 border-b-[#12f7d6] ubuntu pb-2">
            Contact
          </h2>
          <p className="text-gray-400 Cfont text-center">
          "Feel free to reach out for feedback, job opportunities, or just to say hi!"
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <form>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="md:w-1/2 w-full flex flex-col">
              <label htmlFor="name" className="text-[#12f7d6]">Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="Cfont outline-none py-1 px-2 text-white border-b-2 border-b-[#12f7d6]"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col">
              <label htmlFor="email" className="text-[#12f7d6]">Your Email *</label>
              <input
              name="email"
                type="email"
                placeholder="Enter your Email"
                className="Cfont outline-none py-1 px-2 text-white border-b-2 border-b-[#12f7d6]"
              />
            </div>
          </div>
          <div className=" flex flex-col mt-5">
            <label htmlFor="Message" className="text-[#12f7d6]">Your Message *</label>
            <textarea name="Message" placeholder="Enter Your Message" rows={5} className="Cfont outline-none px-2 resize-none text-white border-b-2 border-b-[#12f7d6]"></textarea>
          </div>
        </form>
        <button className="px-10 py-3 bg-[#12f7d6] rounded-full w-fit m-auto font-medium flex items-center gap-3 cursor-pointer">Send Message <PiTelegramLogoBold size={20}/></button>
      </div>
    </section>
  );
};

export default Contact;
