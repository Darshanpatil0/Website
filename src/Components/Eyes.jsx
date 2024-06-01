import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [Rotate, setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX ;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
      setRotate(angle-180);
    })
  })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div  data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-full relative bg-cove bg-center  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className=" absolute gap-10 top-1/2 left-1/2 flex items-center justify-between -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative  rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%,-50%) rotate(${Rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 rotate-180">

              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative  rounded-full bg-zinc-900">
            <div style={{transform: `translate(-50%,-50%) rotate(${Rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 rotate-180">

<div className="w-10 h-10 rounded-full bg-zinc-100"></div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
