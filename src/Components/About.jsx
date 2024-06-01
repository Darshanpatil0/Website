import React from "react";

const About = () => {
  return (
    <div className="w-full p-16 text-black py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#CDEA68]">
      <h1 className="h1 text-5xl leading-[3.6vw] tracking-tighte">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[2px] mt-16 pt-10 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-6xl">Our Approach :</h1>
            <button className="px-9 flex uppercase items-center gap-6 py-4 mt-10 bg-zinc-800 rounded-full text-white">Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="img w-1/2 h-[70vh] rounded-2xl overflow-hidden bg-blue-600"><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
};

export default About;
