import { motion } from 'framer-motion'
import React, { useState } from 'react'

const App = () => {
  const [a, b] = useState(false)
  console.log(a);

  return (
    <div className='relative overflow-hidden w-full h-screen bg-zinc-800 text-white px-5 py-5 '>
      <nav className='flex justify-between items-center'>
        <motion.h1 initial={{ opacity: 0,x:10, y:-10 , color:"black" }} animate={{ opacity: 1, x:-10, y:10,color:"white"}} transition={{ ease: [0.45, 0, 0.55, 1], duration: 2 }} className='font-semibold text-2xl'>logo</motion.h1>
        <div className='flex items-center gap-10'>{["home", "about", "compony", "contact us"].map((item, index) => (
          <motion.a initial={{ opacity: 0,x:10, y:-10 , color:"black" }} animate={{ opacity: 1,x:-10, y:10,color:"white" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 2 }} key={index} href="#">{item}</motion.a >
        ))}</div>
        <motion.button onClick={()=>b(!a)}  initial={{ opacity: 0,x:10, y:-10 , color:"black" }} animate={{ opacity: 1,x:-10, y:10,color:"white" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 2 }} className='bg-zinc-900 px-2 py-1'>open nav</motion.button>
      </nav>
      <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: 2 }} initial={{x:100}}
          animate={a?{x:0}:{x:"100%"}} className='w-96 h-full bg-zinc-500 absolute top-0 right-0 p-10 '>
        <button onClick={()=>b(!a)} className='bg-zinc-900 px-2 py-1'>close nav</button><br /><br />
np
        <div 
        className='flex items-center gap-10 '>{["helpcenter", "compony", "compony", "contactus"].map((item, index) => (
          <a key={index} href="#">{item}</a>
        ))}</div>



      </motion.div>

    </div>
  )
}

export default App