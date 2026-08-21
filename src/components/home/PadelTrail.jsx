import React from "react";
import FeaturesGridSection from "./FeaturesGridSection";

const PadelTrail = () => {
  return (
    <div className="w-full h-[200vh] relative overflow-hidden flex flex-col ">
      <img
        src="/images/home/PL.png"
        alt="IMG"
        className="w-full h-full object-cover object-center absolute top-0 left-0 -z-1"
      />

      {/* First-Cont */}
      <div className="w-[95%] h-[95vh] mt-[20vh] z-10 mx-auto relative py-[13vh] px-[5vw]">
        {/* BlackDrop */}
        <div className="w-full h-full absolute top-0 left-0 bg-black/70 backdrop-blur-md z-[-1] " />

        {/* Top */}
        <div className="w-full h-[60%] flex ">
          {/* Left */}
          <div className="h-full w-[50%]  flex flex-col gap-10">
            {/* 1 */}
            <div className="w-fit h-fit flex flex-col gap-5">
              <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
                COMPOSITION
              </span>
              <h5 className="NeueM text-white">16 men / 16 women / 16 pairs</h5>
            </div>

              {/* 2 */}
            <div className="w-fit h-fit flex flex-col gap-5">
              <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
                STANDARD
              </span>
              <h5 className="NeueM text-white">LEVEL 3.25 - 4</h5>
            </div>
              {/* 3 */}
            <div className="w-fit h-fit flex flex-col gap-5">
              <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
                SELECTION
              </span>
              <h5 className="NeueM text-white">APPLICATION & REVIEW</h5>
            </div>
          </div>
          {/* right */}
          <div className="h-full w-[50%]  flex flex-col justify-start items-end">
            <div>
              <h1 className="NeueM text-white">32</h1>
              <h4 className="NeueM text-white">PLAYERS</h4>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full h-[40%] flex justify-start  items-end text-white/80">
            <h4 className="NeueM">A private, invitation-only experience <br /> combining padel, competition, travel and <br /> exceptional experiences across Spain.</h4>
        </div>
      </div>

      {/* Middel */}
      <div className="px-10 mt-10">
        <h3 className=" NeueM uppercase text-white">the format makes the <br /> trail</h3>
      </div>

      <div className="w-full h-[100vh] absolute bottom-0 left-0 z-[-1]">
      <img src="/images/home/BGMark.png" alt="IMG" className=" w-full h-full object-cover object-center" />
      </div>

      <FeaturesGridSection/>
    </div>
  );
};

export default PadelTrail;
