import React from 'react'

const Data = [
    {
        url:`/images/home/C1.png`,
        text1:'Ibiza',
        text2:'late nights, by the sea',
    },
    {
        url:`/images/home/C2.png`,
        text1:'Mallorca',
        text2:'sunset, by sail',
    },
    {
       url:`/images/home/C3.png`,
        text1:'costa brava',
        text2:'lunch, by the coast',
    },
    {
        url:`/images/home/C4.png`,
        text1:'barcelona',
        text2:'after hours, in the city',
    },
]

const BeyondTheCourt = () => {
  return (
    <div className='w-full min-h-screen grid grid-rows-2 grid-cols-3 p-10  gap-10 space-y-[2vh] pt-[10vh]'>

        <div>
            <h3 className=' uppercase NeueM '>Beyond <br /> the <br /> court</h3>
        </div>

        {
            Data.map((item, i)=>{
                return(
                    <div key={i} className='w-full h-full flex flex-col'>
                    <div className='w-full aspect-4/5 overflow-hidden'>
                        <img src={item.url} alt="img" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='w-full h-[100px] mt-10'>
                        <span className=' uppercase Inter font-bold'>{item.text1}</span>
                        <p className=' capitalize Inter'>{item.text2}</p>
                    </div>
                    </div>
                )
            })
        }


        <div className='w-full h-full flex justify-center items-center'>
            <p className='Inter capitalize w-[70%]'>From ancient streets to modern courts, Spain has always known how to bring people together.</p>
        </div>
      
    </div>
  )
}

export default BeyondTheCourt
