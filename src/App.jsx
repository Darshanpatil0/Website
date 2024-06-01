import React from 'react'
import Navbar from './Components/Navbar'
import Landingpage from "./Components/Landingpage"
import Markey from './Components/Markey'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Card from './Components/Card'
import Cardpay from './Components/Cardpay'
import Last from './Components/Last'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='fonts font-bold w-full min-h-screen text-white bg bg-zinc-950'>
      <Navbar />
      <Landingpage />
      <Markey />
      <About />
      <Eyes />
     <Card />
      <Cardpay /> 
    <Last />
    </div>
  )
}

export default App