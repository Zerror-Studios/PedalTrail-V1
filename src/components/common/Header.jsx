'use client'

const NavLinks = [
  { name: `HOME`, link: `/` },
  { name: `THE TRAIL`, link: `/` },
  { name: `THE EDITION`, link: `/` },
  { name: `ABOUT`, link: `/` }, 
];

const Header = () => {
  return (
    <div className="w-full h-fit py-5 px-10 flex justify-between items-center fixed top-0 left-0 z-50">

      {/* Logo */}
      <div className="w-7 aspect-square z-10 cursor-pointer">
        <img
          src="/svg/logo.svg"
          alt="Ilogo"
          className="w-full h-full object-center object-cover"
        />
      </div>

      {/* Menu - Centered using absolute positioning */}
      <div className="absolute left-1/2 -translate-x-1/2 w-fit px-5 h-auto flex gap-5.5 justify-center items-center">
        {
          NavLinks.map((nav, i) => {
            return (
              <span key={i} className="text-white group relative cursor-pointer text-[0.7rem] leading-[0.7rem] ">
                {nav.name}

                <div className="w-0 h-[1px] transition-all duration-150 absolute bottom-[-15%] left-0 ease-in bg-white group-hover:w-full "></div>
              </span>
            )
          })
        }
      </div>
      
      {/* BTN */}
      <div className="w-fit h-fit flex gap-1.5 z-10 transition-all duration-150 ease-in group cursor-pointer">
        <div className="uppercase RedBG h-auto w-fit px-5  text-white group-hover:text-[#FE2115] flex justify-center items-center relative">

          <span  className=" z-20 text-[0.7rem] leading-[0.7rem]">Request an invitation</span>

          <div className=" absolute h-[75%] top-1/2 -translate-y-1/2 left-[2%] bg-white z-1 transition-all duration-150 ease-in w-0 group-hover:w-[96%] ">

          </div>

        </div>
        <div className="w-7 aspect-square RedBG flex justify-center items-center transition-all duration-150 ease-in group-hover:-rotate-90">
          <img
            src="/svg/Arrow.svg"
            alt="Arrow"
            className="h-[60%] object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;