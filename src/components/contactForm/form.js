import React from 'react'

const Form = () => {
  return (
    <div className='flex  mt-14 mb-14 items-center flex-col gap-7 w-full'>
        <h1 className='sm:text-3xl  max-sm:text-base max-sm:font-semibold'>Let's talk about your Dream home</h1>
      <form action="" className="flex gap-10 max-md:flex-col items-center justify-center w-full">
        <input type="text" className='border-b-[2px] md:w-1/4 max-md:w-2/3  focus:outline-0 ' placeholder='Name' />
        <input type="email" className="border-b-[2px] focus:outline-0 max-md:w-2/3   md:w-1/4"  placeholder='Email' />
         <button style={{width:'200px',height: '60px'
  }} className="text-white font-bold  bg-purple-900  ">Send</button>
    
      </form>
    </div>
  )
}

export default Form
