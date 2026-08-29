// 'use client'

// import { useState, useEffect } from "react";
// import AnimatedTitle from "./AnimatedTitle";
// import Link from "next/link";

// const NavLinks = [
//   { name: `HOME`, link: `/` },
//   { name: `THE TRAIL`, link: `/the-trail` },
//   { name: `THE EDITION`, link: `/` },
//   { name: `ABOUT`, link: `/` }, 
// ];

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // lock body scroll while the mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   const handleScrollToForm = () => {
//   const formElement = document.getElementById('FORMDIV');
//   if (formElement) {
//     formElement.scrollIntoView({ behavior: 'smooth' });
//   }
// };

//   return (
//     <>
//       <div className="w-full h-fit py-5 px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 z-[60]">

//         {/* Logo */}
//         <div className="w-7 aspect-square z-10 cursor-pointer">
//           <img
//             src="/svg/logo.svg"
//             alt="Ilogo"
//             className="w-full h-full object-center object-cover"
//           />
//         </div>

//         {/* Desktop Menu - Centered using absolute positioning */}
//         <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-fit px-5 h-auto gap-5.5 justify-center items-center">
//           {
//             NavLinks.map((nav, i) => {
//               return (
//                 <Link key={i} href={nav.link} >
//                 <span className="text-white group relative cursor-pointer text-[0.7rem] leading-[0.7rem] ">
//                   <AnimatedTitle text={nav.name} />
//                 </span>
//                 </Link>
//               )
//             })
//           }
//         </div>
        
//         {/* Desktop BTN */}
//         <div onClick={handleScrollToForm} className="hidden md:flex w-fit h-fit gap-1.5 z-10 transition-all duration-150 ease-in group cursor-pointer">
//           <div className="uppercase  h-auto w-fit px-5  text-white bg-[#FF6D35] flex justify-center items-center relative">
//             <span className=" z-20 text-[0.7rem] leading-[0.7rem]"> <AnimatedTitle text={'Request An Invitation'} /> </span>
//           </div>
//           <div className="w-7 aspect-square bg-[#FF6D35] flex justify-center items-center transition-all duration-150 ease-in ">
//             <img
//               src="/svg/Arrow.svg"
//               alt="Arrow"
//               className="h-[60%] object-center object-cover -rotate-z-180"
//             />
//           </div>
//         </div>

//         {/* Mobile Toggle - Menu / Close text swap */}
//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="flex md:hidden items-center justify-center z-10 cursor-pointer"
//           aria-label="Toggle menu"
//         >
//           <span className="text-white uppercase text-[1rem] leading-[1rem] relative overflow-hidden h-[1rem] block w-[3.2rem] text-right">
//             <span
//               className={`block transition-transform duration-400 ease-in-out ${isOpen ? "-translate-y-[0.9rem]" : "translate-y-0"}`}
//             >
//               Menu
//             </span>
//             <span
//               className={`block absolute top-[0.9rem] left-0 w-full text-right transition-transform duration-400 ease-in-out ${isOpen ? "-translate-y-[0.9rem]" : "translate-y-0"}`}
//             >
//               Close
//             </span>
//           </span>
//         </button>
//       </div>

//       {/* Mobile Fullscreen Overlay Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-[100dvh] bg-[#0987D8] z-50 flex md:hidden flex-col justify-between px-6 pt-24 pb-10 transition-opacity duration-500 ease-in-out ${
//           isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* Nav Links */}
//         <div className="flex flex-col gap-5">
//           {
//             NavLinks.map((nav, i) => (
//               <Link href={nav.link}>
//               <span
//                 key={i}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-white uppercase text-[2.2rem]! leading-none cursor-pointer transition-all duration-500 ease-out ${
//                   isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 }`}
//                 style={{ transitionDelay: isOpen ? `${i * 70 + 150}ms` : "0ms" }}
//                 >
//                 {nav.name}
//               </span>
//                 </Link>
//             ))
//           }
//         </div>

//         {/* CTA */}
//         <div
//           className={`w-full flex gap-1.5 cursor-pointer transition-all duration-500 ease-out ${
//             isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//           style={{ transitionDelay: isOpen ? `${NavLinks.length * 70 + 200}ms` : "0ms" }}
//           onClick={() => {
//     setIsOpen(false);
//     handleScrollToForm();
//   }}
//         >
//           <div className="uppercase bg-[#FF6D35] flex-1 h-12 text-white flex justify-center items-center">
//             <span className="text-[0.75rem]">Request An Invitation</span>
//           </div>
//           <div className="w-12 aspect-square bg-[#FF6D35] flex justify-center items-center">
//             <img src="/svg/Arrow.svg" alt="Arrow" className="h-[45%] object-center object-cover" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;


'use client'

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedTitle from "./AnimatedTitle";
import Link from "next/link";

const NavLinks = [
  { name: `HOME`, link: `/` },
  { name: `THE TRAIL`, link: `/the-trail` },
  { name: `THE EDITION`, link: `/` },
  { name: `ABOUT`, link: `/about` }, 
  { name: `CONTACT`, link: `/connect` }, 
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current URL path

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleScrollToForm = () => {
    const formElement = document.getElementById('FORMDIV');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine background class based on current route
 const headerBgClass = pathname === '/the-trail' || pathname === '/connect' ? 'bg-[#0987D8]' : 'bg-transparent';

  return (
    <>
      <div className={`w-full h-fit py-5 px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 z-[60] transition-colors duration-300 ${headerBgClass}`}>

        {/* Logo */}
        <div className="w-7 aspect-square z-10 cursor-pointer">
          <img
            src="/svg/logo.svg"
            alt="Ilogo"
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Desktop Menu - Centered using absolute positioning */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-fit px-5 h-auto gap-5.5 justify-center items-center">
          {
            NavLinks.map((nav, i) => {
              return (
                <Link key={i} href={nav.link} >
                  <span className="text-white group relative cursor-pointer text-[0.7rem] leading-[0.7rem]">
                    <AnimatedTitle text={nav.name} />
                  </span>
                </Link>
              )
            })
          }
        </div>
        
        {/* Desktop BTN */}
        <div onClick={handleScrollToForm} className="hidden md:flex w-fit h-fit gap-1.5 z-10 transition-all duration-150 ease-in group cursor-pointer">
          <div className="uppercase  h-auto w-fit px-5  text-white bg-[#FF6D35] flex justify-center items-center relative">
            <span className=" z-20 text-[0.7rem] leading-[0.7rem]"> <AnimatedTitle text={'Request An Invitation'} /> </span>
          </div>
          <div className="w-7 aspect-square bg-[#FF6D35] flex justify-center items-center transition-all duration-150 ease-in ">
            <img
              src="/svg/Arrow.svg"
              alt="Arrow"
              className="h-[60%] object-center object-cover -rotate-z-180"
            />
          </div>
        </div>

        {/* Mobile Toggle - Menu / Close text swap */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex md:hidden items-center justify-center z-10 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="text-white uppercase text-[1rem] leading-[1rem] relative overflow-hidden h-[1rem] block w-[3.2rem] text-right">
            <span
              className={`block transition-transform duration-400 ease-in-out ${isOpen ? "-translate-y-[0.9rem]" : "translate-y-0"}`}
            >
              Menu
            </span>
            <span
              className={`block absolute top-[0.9rem] left-0 w-full text-right transition-transform duration-400 ease-in-out ${isOpen ? "-translate-y-[0.9rem]" : "translate-y-0"}`}
            >
              Close
            </span>
          </span>
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-[#0987D8] z-50 flex md:hidden flex-col justify-between px-6 pt-24 pb-10 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav Links */}
        <div className="flex flex-col gap-5">
          {
            NavLinks.map((nav, i) => (
              <Link key={i} href={nav.link}>
                <span
                  onClick={() => setIsOpen(false)}
                  className={`text-white uppercase text-[2.2rem]! leading-none cursor-pointer transition-all duration-500 ease-out ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isOpen ? `${i * 70 + 150}ms` : "0ms" }}
                >
                  {nav.name}
                </span>
              </Link>
            ))
          }
        </div>

        {/* CTA */}
        <div
          className={`w-full flex gap-1.5 cursor-pointer transition-all duration-500 ease-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isOpen ? `${NavLinks.length * 70 + 200}ms` : "0ms" }}
          onClick={() => {
            setIsOpen(false);
            handleScrollToForm();
          }}
        >
          <div className="uppercase bg-[#FF6D35] flex-1 h-12 text-white flex justify-center items-center">
            <span className="text-[0.75rem]">Request An Invitation</span>
          </div>
          <div className="w-12 aspect-square bg-[#FF6D35] flex justify-center items-center">
            <img src="/svg/Arrow.svg" alt="Arrow" className="h-[45%] object-center object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;