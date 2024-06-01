import React from 'react'

const Cardpay = () => {
  return (
    <div className='w-full h-screen rounded-xl  flex items-center px-20 gap-5 '>
        <div className="cardcomtaner h-[50vh]  w-1/2">
            <div className="card  relative rounded-xl w-full h-full flex items-center justify-center bg-[#004d43]">
                <img className='w-32'src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 '>&copy; 2019-2024</button>
            </div>
        </div>
        <div className="cardcomtaner flex gap-5 h-[50vh] w-1/2">
            <div className="card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#002721]">
            <img className='w-32 mb-20'src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className=' absolute px-5 py-1 border-2 rounded-full  bottom-10 '>Rating 5.0 on Clutch</button>
            </div>
            <div className="card flex items-center justify-center relative rounded-xl w-1/2 h-full  bg-[#014038]">
            <img className='w-32 mb-20'src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className=' l absolute px-5 py-1 border-2 rounded-full  bottom-10 '>Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cardpay