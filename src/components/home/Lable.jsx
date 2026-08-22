import React from 'react'

const Lable = () => {
  return (
    <div className='w-full h-fit flex justify-center items-center py-[10vh]'>
      <div className='max-w-2xl h-fit'>
        <h1 className='NeueM'>NOT JUST A <br />PADEL TRIP.</h1>

        <div className='w-full aspect-square overflow-hidden mt-5 flex justify-center items-center relative'>
            <img src='/images/home/E1.png' alt="img" className='w-full h-full object-center object-cover z-10 ' />

            <div className='w-full h-full absolute top-0 left-0 z-20 text-white p-10 flex items-end'>
                 <h3 className='NeueM'>A JOURNEY <br />WORTH BEING <br /> INVITED TO.</h3>
            </div>
        </div>

        <div className='w-fit h-fit px-20 text-white bg-[#FE2115] py-5 mt-10'>
            <p className='Inter uppercase'>Request for invitation</p>
        </div>

        <p className='NeueM text-[black]/40 mt-5'>Applications Reviewed Privately</p>
      </div>
    </div>
  )
}

export default Lable
