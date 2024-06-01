import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Card = () => {
  const cars = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cars[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cars[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-14">
        <h1 className="markes text-7xl">Featured Project</h1>
      </div>
      <div className="px-16">
        <div className="Cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-contener relative w-1/2 h-[75vh]"
          >
            <h1 className="card heading flex left-full text-[#CDEA68] overflow-hidden -translate-x-[50%] -translate-y-[50%] top-1/2 tracking-tighte leading-none absolute z-[9] text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cars[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden bg-green-500">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
           onHoverStart={() => handleHover(1)}
           onHoverEnd={() => handleHoverEnd(1)} 
          className="card-contener relative w-1/2 h-[75vh]">
            <h1 className="card heading flex overflow-hidden right-full text-[#CDEA68] translate-x-[50%] -translate-y-[50%] top-1/2 tracking-tighte leading-none absolute z-[9] text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={cars[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden bg-green-500">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
