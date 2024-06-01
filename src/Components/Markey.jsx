import { motion } from "framer-motion";
import React from "react";

const Markey = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20  bg-[#004D43]">
      <div className="text border-t-2 border-b-2 relativ  overflow-hidden border-zinc-500 flex whitespace-nowrap">
      <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none markes uppercase mb-7 mt-7 pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none markes uppercase mb-7 mt-7 pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Markey;
