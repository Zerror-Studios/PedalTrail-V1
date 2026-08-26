import React from 'react'

const TTHero = () => {
  return (
    <div className='w-full h-svh grid grid-cols-1 grid-rows-2' >
      <div className='w-full h-full flex flex-col justify-end items-center pb-[10vh]'>
        <p>SEASON 01 · SPAIN · AUTUMN 2026</p>
        <h1 className='NeueM'>THE TRAIL</h1>
      </div>
      <div className='w-full h-full overflow-hidden'>
        <img src="/images/the-trail/TTHome.png" alt="IMG" className='w-full h-full object-cover object-center' />
      </div>

    </div>
  )
}

export default TTHero 
