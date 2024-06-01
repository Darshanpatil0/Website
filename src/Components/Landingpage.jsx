import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textsturac mt-[134px] px-16  ">
        {["WE Create", "Eye Opening", "presentation"].map((item, index) => {
          return (
            <div className="markes ">
              <div className="item w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ease: [0.76, 0, 0.24,1] ,duration: 1}}
                    className=" mr-[1vw] rounded-md relative  w-[9vw] h-[5.80vw] -top[1vw] mt-1 bg-green-500"
                  ></motion.div>
                )}
                <h1 className=" marke uppercase leading-[7vw] tracking-tighter font-semibold text-[7.5vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 bg-zinc-800 mt-12 "></div>
      <div className="item flex items-center justify-between py-5 px-20">
        {[
          "For public and private companies",
          "Form the first pitch to IPO",
        ].map((item, index) => (
          <p className=" text-md  font-light uppercase tracking-tighte leading-none">
            {item}
          </p>
        ))}
        <div className=" flex items-center gap-5">
          <div className="start px-5 py-2 border-[2px] border-zinc-400 font-light  capitalize rounded-full">
            Start The Project
          </div>
          <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full">
            <span className=" rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
