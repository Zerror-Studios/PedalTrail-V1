import React from "react";

const Win = () => {
  const Data1 = [
    {
      url: `/images/home/D1.png`,
      text1: "winner",
      text2: "Full invitation to Season 02.",
      logo: `/svg/DD1.svg`,
    },
    {
      url: `/images/home/D2.png`,
      text1: "1st runner up",
      text2: "Priority placement for future editions.",
      logo: `/svg/DD2.svg`,
    },
    {
      url: `/images/home/D3.png`,
      text1: "2nd runner up",
      text2: "Exclusive Trail merchandise.",
      logo: `/svg/DD3.svg`,
    },
  ];

  return (
    <div className="w-full h-fit p-10">
      <div className="w-full h-fit flex flex-col">
        <h3 className="NeueM">WIN YOUR WAY BACK.</h3>
        <p className="Inter mt-5 max-w-sm">
          The Trail is designed to seamlessly blend intense competition with
          world- class hospitality and cultural immersion.
        </p>
      </div>

      <div className="w-full grid grid-cols-3 grid-rows-1 gap-10 mt-10">

        {
            Data1.map((item, i)=>{
                return(
                    <div key={i} className="w-full aspect-5/4 overflow-hidden relative">
                        <img src={item.url} alt="IMg" className=" absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]" />

                        <div className="w-full h-full p-10 flex justify-between flex-col">

                            <div className="w-1/8 aspect-square relative overflow-hidden">
                             <img src={item.logo} alt="IMG" className="w-full h-full object-cover object-center" />
                            </div>

                            <div className="flex flex-col w-full text-white">
                                <h4 className="NeueM uppercase">{item.text1}</h4>
                                <span className="Inter mt-4 capitalize">{item.text2}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }

      </div>
    </div>
  );
};

export default Win;
