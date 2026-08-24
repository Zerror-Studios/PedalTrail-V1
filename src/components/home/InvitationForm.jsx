// // // // 'use client';

// // // // import React, { useState } from 'react';

// // // // export default function InvitationForm() {
// // // //   const [formData, setFormData] = useState({
// // // //     player01: '',
// // // //     player02: '',
// // // //     email: '',
// // // //     whatsapp: '',
// // // //     city: '',
// // // //     padelLevel: '',
// // // //     notes: '',
// // // //     acceptedTerms: false,
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: type === 'checkbox' ? checked : value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log('Form submitted:', formData);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-white flex items-center justify-center p-6 relative">

// // // //         <div className='w-[1px] h-[85vh] bg-gray-200 absolute top-1/2 left-[20%] -translate-y-1/2'/>
// // // //         <div className='w-[1px] h-[85vh] bg-gray-200 absolute top-1/2 right-[20%] -translate-y-1/2'/>

// // // //       <div className="w-full max-w-2xl bg-white border border-gray-200 p-8 md:p-12 ">
        
// // // //         {/* Header */}
// // // //         <div className="mb-8">
// // // //           <h5 className=" NeueM text-red-600 mb-2">
// // // //             APPLY FOR AN INVITATION
// // // //           </h5>
// // // //           <p className="text-gray-500 text-sm">
// // // //             Book Your Trial And Get On Court.
// // // //           </p>
// // // //         </div>

// // // //         {/* Form */}
// // // //         <form onSubmit={handleSubmit} className="space-y-6">
          
// // // //           {/* Row 1: Player 01 & Player 02 */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //             <div>
// // // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //                 Player 01
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="player01"
// // // //                 placeholder="Name"
// // // //                 value={formData.player01}
// // // //                 onChange={handleChange}
// // // //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //                 Player 02
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="player02"
// // // //                 placeholder="Name"
// // // //                 value={formData.player02}
// // // //                 onChange={handleChange}
// // // //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {/* Row 2: Email & Whatsapp Number */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //             <div>
// // // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //                 Email
// // // //               </label>
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //                 Whatsapp Number
// // // //               </label>
// // // //               <input
// // // //                 type="tel"
// // // //                 name="whatsapp"
// // // //                 placeholder="1 (555) 000-0000"
// // // //                 value={formData.whatsapp}
// // // //                 onChange={handleChange}
// // // //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {/* Row 3: City & Padel Level */}
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //             <div>
// // // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //                 City
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="city"
// // // //                 placeholder="City"
// // // //                 value={formData.city}
// // // //                 onChange={handleChange}
// // // //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // // //               />
// // // //             </div>
// // // //             <div>
// // // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //                 Padel Level
// // // //               </label>
// // // //               <div className="relative">
// // // //                 <select
// // // //                   name="padelLevel"
// // // //                   value={formData.padelLevel}
// // // //                   onChange={handleChange}
// // // //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-400 focus:text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
// // // //                 >
// // // //                   <option value="" disabled>Level 04.45</option>
// // // //                   <option value="beginner">Beginner (1.0 - 2.0)</option>
// // // //                   <option value="intermediate">Intermediate (2.5 - 3.5)</option>
// // // //                   <option value="advanced">Advanced (4.0+)</option>
// // // //                 </select>
// // // //                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
// // // //                   <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // //                   </svg>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Textarea: Anything we should know? */}
// // // //           <div>
// // // //             <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // // //               Anything we should know?
// // // //             </label>
// // // //             <input
// // // //               type="text"
// // // //               name="notes"
// // // //               placeholder="A little context about you and your partner"
// // // //               value={formData.notes}
// // // //               onChange={handleChange}
// // // //               className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // // //             />
// // // //           </div>

// // // //           {/* Terms Checkbox */}
// // // //           <div className="flex items-start space-x-3 pt-2">
// // // //             <input
// // // //               type="checkbox"
// // // //               name="acceptedTerms"
// // // //               id="terms"
// // // //               checked={formData.acceptedTerms}
// // // //               onChange={handleChange}
// // // //               className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
// // // //             />
// // // //             <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
// // // //               I accept Padel Elite's{' '}
// // // //               <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I <br/> have read the{' '}
// // // //               <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
// // // //             </label>
// // // //           </div>

// // // //           {/* Submit Button */}
// // // //           <div className="pt-4 flex flex-col items-center">
// // // //             <button
// // // //               type="submit"
// // // //               className="w-full md:w-auto px-12 py-3.5 bg-red-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm"
// // // //             >
// // // //               SUBMIT
// // // //             </button>
// // // //             <span className="text-xs text-gray-400 mt-4">
// // // //               We'll contact you to confirm your session.
// // // //             </span>
// // // //           </div>

// // // //         </form>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // 'use client';

// // // import React, { useState, useEffect, useRef } from 'react';
// // // import gsap from 'gsap';
// // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // gsap.registerPlugin(ScrollTrigger);

// // // export default function InvitationForm() {
// // //   const [formData, setFormData] = useState({
// // //     player01: '',
// // //     player02: '',
// // //     email: '',
// // //     whatsapp: '',
// // //     city: '',
// // //     padelLevel: '',
// // //     notes: '',
// // //     acceptedTerms: false,
// // //   });

// // //   const containerRef = useRef(null);
// // //   const leftLineRef = useRef(null);
// // //   const rightLineRef = useRef(null);
// // //   const formBoxRef = useRef(null);
// // //   const contentRef = useRef(null);

// // //   useEffect(() => {
// // //     const ctx = gsap.context(() => {
// // //       const tl = gsap.timeline({
// // //         scrollTrigger: {
// // //           trigger: containerRef.current,
// // //           start: "top 75%",
// // //           toggleActions: "play none none reverse",
// // //           // markers: true, // Uncomment for debugging
// // //         },
// // //       });

// // //       // 1. Set initial states
// // //       tl.set(leftLineRef.current, { scaleY: 0, transformOrigin: "top center" })
// // //         .set(rightLineRef.current, { scaleY: 0, transformOrigin: "top center" })
// // //         .set(formBoxRef.current, { opacity: 0, scale: 0.98 })
// // //         .set(contentRef.current.children, { opacity: 0, y: 30 });

// // //       // 2. Draw background vertical lines down simultaneously
// // //       tl.to([leftLineRef.current, rightLineRef.current], {
// // //         scaleY: 1,
// // //         duration: 1.2,
// // //         ease: "power3.inOut",
// // //       })
// // //       // 3. Fade in/scale up the form wrapper border box
// // //       .to(
// // //         formBoxRef.current,
// // //         {
// // //           opacity: 1,
// // //           scale: 1,
// // //           duration: 0.8,
// // //           ease: "power2.out",
// // //         },
// // //         "-=0.8" // Overlap with line drawing
// // //       )
// // //       // 4. Stagger animate inner form fields and headers
// // //       .to(
// // //         contentRef.current.children,
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 0.6,
// // //           stagger: 0.1,
// // //           ease: "power3.out",
// // //         },
// // //         "-=0.4"
// // //       );
// // //     }, containerRef);

// // //     return () => ctx.revert();
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: type === 'checkbox' ? checked : value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log('Form submitted:', formData);
// // //   };

// // //   return (
// // //     <div ref={containerRef} className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
// // //       {/* Background Vertical Lines for Draw Animation */}
// // //       <div 
// // //         ref={leftLineRef} 
// // //         className="w-[1px] h-[85vh] bg-gray-500 absolute top-1/2 left-[20%] -translate-y-1/2 will-change-transform"
// // //       />
// // //       <div 
// // //         ref={rightLineRef} 
// // //         className="w-[1px] h-[85vh] bg-gray-500 absolute top-1/2 right-[20%] -translate-y-1/2 will-change-transform"
// // //       />

// // //       {/* Form Container */}
// // //       <div 
// // //         ref={formBoxRef}
// // //         className="w-full max-w-2xl bg-white border border-gray-500 p-8 md:p-12 will-change-transform opacity-0 shadow-sm"
// // //       >
// // //         <div ref={contentRef} className="space-y-6">
          
// // //           {/* Header */}
// // //           <div className="mb-8">
// // //             <h5 className="NeueM text-red-600 mb-2">
// // //               APPLY FOR AN INVITATION
// // //             </h5>
// // //             <p className="text-gray-500 text-sm">
// // //               Book Your Trial And Get On Court.
// // //             </p>
// // //           </div>

// // //           {/* Form */}
// // //           <form onSubmit={handleSubmit} className="space-y-6">
            
// // //             {/* Row 1: Player 01 & Player 02 */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                   Player 01
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="player01"
// // //                   placeholder="Name"
// // //                   value={formData.player01}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                   Player 02
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="player02"
// // //                   placeholder="Name"
// // //                   value={formData.player02}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Row 2: Email & Whatsapp Number */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                   Email
// // //                 </label>
// // //                 <input
// // //                   type="email"
// // //                   name="email"
// // //                   placeholder="Email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                   Whatsapp Number
// // //                 </label>
// // //                 <input
// // //                   type="tel"
// // //                   name="whatsapp"
// // //                   placeholder="1 (555) 000-0000"
// // //                   value={formData.whatsapp}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Row 3: City & Padel Level */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                   City
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   name="city"
// // //                   placeholder="City"
// // //                   value={formData.city}
// // //                   onChange={handleChange}
// // //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                   Padel Level
// // //                 </label>
// // //                 <div className="relative">
// // //                   <select
// // //                     name="padelLevel"
// // //                     value={formData.padelLevel}
// // //                     onChange={handleChange}
// // //                     className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-400 focus:text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
// // //                   >
// // //                     <option value="" disabled>Level 04.45</option>
// // //                     <option value="beginner">Beginner (1.0 - 2.0)</option>
// // //                     <option value="intermediate">Intermediate (2.5 - 3.5)</option>
// // //                     <option value="advanced">Advanced (4.0+)</option>
// // //                   </select>
// // //                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
// // //                     <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                     </svg>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Textarea: Anything we should know? */}
// // //             <div>
// // //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// // //                 Anything we should know?
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="notes"
// // //                 placeholder="A little context about you and your partner"
// // //                 value={formData.notes}
// // //                 onChange={handleChange}
// // //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// // //               />
// // //             </div>

// // //             {/* Terms Checkbox */}
// // //             <div className="flex items-start space-x-3 pt-2">
// // //               <input
// // //                 type="checkbox"
// // //                 name="acceptedTerms"
// // //                 id="terms"
// // //                 checked={formData.acceptedTerms}
// // //                 onChange={handleChange}
// // //                 className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
// // //               />
// // //               <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
// // //                 I accept Padel Elite's{' '}
// // //                 <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I <br/> have read the{' '}
// // //                 <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
// // //               </label>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <div className="pt-4 flex flex-col items-center">
// // //               <button
// // //                 type="submit"
// // //                 className="w-full md:w-auto px-12 py-3.5 bg-red-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
// // //               >
// // //                 SUBMIT
// // //               </button>
// // //               <span className="text-xs text-gray-400 mt-4">
// // //                 We'll contact you to confirm your session.
// // //               </span>
// // //             </div>

// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // 'use client';

// // import React, { useState, useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // gsap.registerPlugin(ScrollTrigger);

// // export default function InvitationForm() {
// //   const [formData, setFormData] = useState({
// //     player01: '',
// //     player02: '',
// //     email: '',
// //     whatsapp: '',
// //     city: '',
// //     padelLevel: '',
// //     notes: '',
// //     acceptedTerms: false,
// //   });

// //   const containerRef = useRef(null);
// //   const formBoxRef = useRef(null);
// //   const contentRef = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline({
// //         scrollTrigger: {
// //           trigger: containerRef.current,
// //           start: "top 110%",
// //           toggleActions: "play none none reverse",
// //         },
// //       });

// //       // 1. Set initial states
// //       tl.set('.court-line', { strokeDashoffset: 1 })
// //         .set(formBoxRef.current, { opacity: 0, scale: 0.95, y: 20 })
// //         .set(contentRef.current.children, { opacity: 0, y: 20 });

// //       // 2. Draw background tennis court lines
// //       tl.to('.court-line', {
// //         strokeDashoffset: 0,
// //         duration: 1.5,
// //         ease: "power2.inOut",
// //         stagger: 0.1, // Staggers the drawing of each line
// //       })
// //       // 3. Fade in/scale up the form wrapper box
// //       .to(
// //         formBoxRef.current,
// //         {
// //           opacity: 1,
// //           scale: 1,
// //           y: 0,
// //           duration: 0.8,
// //           ease: "power3.out",
// //         },
// //         "-=0.6" // Overlap with line drawing
// //       )
// //       // 4. Stagger animate inner form fields and headers
// //       .to(
// //         contentRef.current.children,
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.5,
// //           stagger: 0.1,
// //           ease: "power3.out",
// //         },
// //         "-=0.4"
// //       );
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted:', formData);
// //   };

// //   // Base styling for the SVG lines to enable the draw effect
// //   const lineStyle = {
// //     fill: 'none',
// //     stroke: '#d1d5db', // Tailwind gray-300
// //     strokeWidth: 4,
// //     strokeDasharray: 1,
// //     strokeDashoffset: 1,
// //   };

// //   return (
// //     <div 
// //       ref={containerRef} 
// //       className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6 relative overflow-hidden"
// //     >
// //       {/* 1. MOBILE SVG (Portrait) - Hidden on medium screens and up */}
// //       <svg
// //         className="absolute inset-0 w-full h-full pointer-events-none z-0 block md:hidden"
// //         viewBox="0 0 500 1000"
// //         preserveAspectRatio="xMidYMid meet"
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         <rect x="50" y="68" width="400" height="864" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="100" y1="68" x2="100" y2="932" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="400" y1="68" x2="400" y2="932" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="20" y1="500" x2="480" y2="500" pathLength="1" className="court-line" style={{...lineStyle, strokeWidth: 6, stroke: '#9ca3af'}} />
// //         <line x1="100" y1="268" x2="400" y2="268" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="100" y1="732" x2="400" y2="732" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="250" y1="268" x2="250" y2="732" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="250" y1="68" x2="250" y2="88" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="250" y1="932" x2="250" y2="912" pathLength="1" className="court-line" style={lineStyle} />
// //       </svg>

// //       {/* 2. DESKTOP SVG (Landscape) - Hidden on small screens */}
// //       <svg
// //         className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
// //         viewBox="0 0 1000 500"
// //         preserveAspectRatio="xMidYMid meet"
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         {/* Outer Doubles Boundaries */}
// //         <rect x="68" y="50" width="864" height="400" pathLength="1" className="court-line" style={lineStyle} />
// //         {/* Singles Sidelines */}
// //         <line x1="68" y1="100" x2="932" y2="100" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="68" y1="400" x2="932" y2="400" pathLength="1" className="court-line" style={lineStyle} />
// //         {/* Net (Vertical) */}
// //         <line x1="500" y1="20" x2="500" y2="480" pathLength="1" className="court-line" style={{...lineStyle, strokeWidth: 6, stroke: '#9ca3af'}} />
// //         {/* Left Service Line */}
// //         <line x1="268" y1="100" x2="268" y2="400" pathLength="1" className="court-line" style={lineStyle} />
// //         {/* Right Service Line */}
// //         <line x1="732" y1="100" x2="732" y2="400" pathLength="1" className="court-line" style={lineStyle} />
// //         {/* Center Service Line (Horizontal) */}
// //         <line x1="268" y1="250" x2="732" y2="250" pathLength="1" className="court-line" style={lineStyle} />
// //         {/* Center Marks */}
// //         <line x1="68" y1="250" x2="88" y2="250" pathLength="1" className="court-line" style={lineStyle} />
// //         <line x1="932" y1="250" x2="912" y2="250" pathLength="1" className="court-line" style={lineStyle} />
// //       </svg>

// //       {/* Form Container */}
// //       <div 
// //         ref={formBoxRef}
// //         className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-md border border-gray-200 p-8 md:p-12 will-change-transform opacity-0 shadow-2xl rounded-sm"
// //       >
// //         <div ref={contentRef} className="space-y-6">
          
// //           {/* Header */}
// //           <div className="mb-8">
// //             <h5 className="font-bold text-red-600 mb-2 tracking-wide">
// //               APPLY FOR AN INVITATION
// //             </h5>
// //             <p className="text-gray-500 text-sm">
// //               Book Your Trial And Get On Court.
// //             </p>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleSubmit} className="space-y-6">
            
// //             {/* Row 1: Player 01 & Player 02 */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                   Player 01
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="player01"
// //                   placeholder="Name"
// //                   value={formData.player01}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                   Player 02
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="player02"
// //                   placeholder="Name"
// //                   value={formData.player02}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// //                 />
// //               </div>
// //             </div>

// //             {/* Row 2: Email & Whatsapp Number */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                   Whatsapp Number
// //                 </label>
// //                 <input
// //                   type="tel"
// //                   name="whatsapp"
// //                   placeholder="1 (555) 000-0000"
// //                   value={formData.whatsapp}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// //                 />
// //               </div>
// //             </div>

// //             {/* Row 3: City & Padel Level */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                   City
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="city"
// //                   placeholder="City"
// //                   value={formData.city}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                   Padel Level
// //                 </label>
// //                 <div className="relative">
// //                   <select
// //                     name="padelLevel"
// //                     value={formData.padelLevel}
// //                     onChange={handleChange}
// //                     className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-400 focus:text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
// //                   >
// //                     <option value="" disabled>Level 04.45</option>
// //                     <option value="beginner">Beginner (1.0 - 2.0)</option>
// //                     <option value="intermediate">Intermediate (2.5 - 3.5)</option>
// //                     <option value="advanced">Advanced (4.0+)</option>
// //                   </select>
// //                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
// //                     <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                     </svg>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Textarea: Anything we should know? */}
// //             <div>
// //               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
// //                 Anything we should know?
// //               </label>
// //               <input
// //                 type="text"
// //                 name="notes"
// //                 placeholder="A little context about you and your partner"
// //                 value={formData.notes}
// //                 onChange={handleChange}
// //                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
// //               />
// //             </div>

// //             {/* Terms Checkbox */}
// //             <div className="flex items-start space-x-3 pt-2">
// //               <input
// //                 type="checkbox"
// //                 name="acceptedTerms"
// //                 id="terms"
// //                 checked={formData.acceptedTerms}
// //                 onChange={handleChange}
// //                 className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
// //               />
// //               <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
// //                 I accept Padel Elite's{' '}
// //                 <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I <br className="hidden md:block"/> have read the{' '}
// //                 <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
// //               </label>
// //             </div>

// //             {/* Submit Button */}
// //             <div className="pt-4 flex flex-col items-center">
// //               <button
// //                 type="submit"
// //                 className="w-full md:w-auto px-12 py-3.5 bg-red-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
// //               >
// //                 SUBMIT
// //               </button>
// //               <span className="text-xs text-gray-400 mt-4">
// //                 We'll contact you to confirm your session.
// //               </span>
// //             </div>

// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// /**
//  * ============================================================================
//  * HOW TO FIND YOUR GOOGLE FORM'S entry.XXXXXXXXX IDs (one-time setup, ~2 min)
//  * ============================================================================
//  * 1. Open your form's live edit/view URL in a normal browser tab:
//  *    https://docs.google.com/forms/d/e/1FAIpQLSedxrlrtWliiHXKGNc27va03s5k-b3Xf_7EIJrkYdK4_gfHNg/viewform
//  * 2. Right-click the page -> "View Page Source" (or press Ctrl+U / Cmd+Option+U).
//  * 3. Press Ctrl+F / Cmd+F and search for: entry.
//  * 4. You'll see chunks like ["First Name",...,[[123456789,...  the number right
//  *    before/after each question's label is that field's entry ID.
//  *    (Easier alternative: Chrome DevTools -> Network tab -> fill out and submit
//  *    the real form once -> look at the "formResponse" request -> its Form Data
//  *    payload lists every entry.XXXXXXXXX key directly.)
//  * 5. Paste each number into the FIELD_IDS object below, replacing the
//  *    placeholder strings.
//  *
//  * Date of Birth is a special "date" field type in Google Forms: it actually
//  * submits as THREE entries: entry.XXXXXXXXX_month, _day, _year. Find the base
//  * number the same way and I've already appended the suffixes for you.
//  *
//  * "Any sporting background?" is a checkbox field with an "Other" option, so it
//  * submits as entry.XXXXXXXXX (one value per checked box, repeated) plus
//  * entry.XXXXXXXXX.other_option_response for free text typed into "Other".
//  * ============================================================================
//  */

// const GOOGLE_FORM_ACTION_URL =
//   'https://docs.google.com/forms/d/e/1FAIpQLSedxrlrtWliiHXKGNc27va03s5k-b3Xf_7EIJrkYdK4_gfHNg/formResponse';

// const FIELD_IDS = {
//   firstName: 'entry.REPLACE_ME_1',
//   lastName: 'entry.REPLACE_ME_2',
//   gender: 'entry.REPLACE_ME_3',
//   dobMonth: 'entry.REPLACE_ME_4_month',
//   dobDay: 'entry.REPLACE_ME_4_day',
//   dobYear: 'entry.REPLACE_ME_4_year',
//   city: 'entry.REPLACE_ME_5',
//   phone: 'entry.REPLACE_ME_6',
//   email: 'entry.REPLACE_ME_7',
//   instagram: 'entry.REPLACE_ME_8',
//   tagSocials: 'entry.REPLACE_ME_9',
//   profession: 'entry.REPLACE_ME_10',
//   sportingBackground: 'entry.REPLACE_ME_11', // checkbox group, repeat key per value
//   sportingBackgroundOther: 'entry.REPLACE_ME_11.other_option_response',
//   playingSince: 'entry.REPLACE_ME_12',
//   selfLevel: 'entry.REPLACE_ME_13',
// };

// const GENDER_OPTIONS = ['Male', 'Female'];
// const YES_NO_OPTIONS = ['Yes', 'No'];
// const SPORT_OPTIONS = ['Tennis', 'Squash', 'Badminton', 'Cricket', 'Football'];
// const PLAYING_SINCE_OPTIONS = [
//   'Under 3 months',
//   '3 months to 1 Year',
//   '1 year to 2 years',
//   '2 years to 3 years',
//   'More than 3 years',
// ];
// const LEVEL_OPTIONS = ['2.0 - 2.5', '2.5 - 3.0', '3.0 - 3.5', '3.5 - 4.0', '4.0 - 4.5', '4.5 - 5.0'];

// export default function InvitationForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     dobMonth: '',
//     dobDay: '',
//     dobYear: '',
//     city: '',
//     phone: '',
//     email: '',
//     instagram: '',
//     tagSocials: '',
//     profession: '',
//     sportingBackground: [], // array of checked sports
//     sportingBackgroundOther: '',
//     playingSince: '',
//     selfLevel: '',
//     acceptedTerms: false,
//   });

//   const [status, setStatus] = useState('idle'); // idle | submitting | success | error

//   const containerRef = useRef(null);
//   const formBoxRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top 110%',
//           toggleActions: 'play none none reverse',
//         },
//       });

//       tl.set('.court-line', { strokeDashoffset: 1 })
//         .set(formBoxRef.current, { opacity: 0, scale: 0.95, y: 20 })
//         .set(contentRef.current.children, { opacity: 0, y: 20 });

//       tl.to('.court-line', {
//         strokeDashoffset: 0,
//         duration: 1.5,
//         ease: 'power2.inOut',
//         stagger: 0.1,
//       })
//         .to(
//           formBoxRef.current,
//           { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' },
//           '-=0.6'
//         )
//         .to(
//           contentRef.current.children,
//           { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
//           '-=0.4'
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSportToggle = (sport) => {
//     setFormData((prev) => {
//       const already = prev.sportingBackground.includes(sport);
//       return {
//         ...prev,
//         sportingBackground: already
//           ? prev.sportingBackground.filter((s) => s !== sport)
//           : [...prev.sportingBackground, sport],
//       };
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('submitting');

//     const payload = new FormData();
//     payload.append(FIELD_IDS.firstName, formData.firstName);
//     payload.append(FIELD_IDS.lastName, formData.lastName);
//     payload.append(FIELD_IDS.gender, formData.gender);
//     payload.append(FIELD_IDS.dobMonth, formData.dobMonth);
//     payload.append(FIELD_IDS.dobDay, formData.dobDay);
//     payload.append(FIELD_IDS.dobYear, formData.dobYear);
//     payload.append(FIELD_IDS.city, formData.city);
//     payload.append(FIELD_IDS.phone, formData.phone);
//     payload.append(FIELD_IDS.email, formData.email);
//     payload.append(FIELD_IDS.instagram, formData.instagram);
//     payload.append(FIELD_IDS.tagSocials, formData.tagSocials);
//     payload.append(FIELD_IDS.profession, formData.profession);
//     formData.sportingBackground.forEach((sport) => {
//       payload.append(FIELD_IDS.sportingBackground, sport);
//     });
//     if (formData.sportingBackgroundOther) {
//       payload.append(FIELD_IDS.sportingBackground, '__other_option__');
//       payload.append(FIELD_IDS.sportingBackgroundOther, formData.sportingBackgroundOther);
//     }
//     payload.append(FIELD_IDS.playingSince, formData.playingSince);
//     payload.append(FIELD_IDS.selfLevel, formData.selfLevel);

//     try {
//       // Google Forms doesn't return CORS headers, so the response is opaque.
//       // 'no-cors' still delivers the POST; we just can't read a real status back.
//       await fetch(GOOGLE_FORM_ACTION_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         body: payload,
//       });
//       setStatus('success');
//     } catch (err) {
//       console.error('Submission failed:', err);
//       setStatus('error');
//     }
//   };

//   const lineStyle = {
//     fill: 'none',
//     stroke: '#d1d5db',
//     strokeWidth: 4,
//     strokeDasharray: 1,
//     strokeDashoffset: 1,
//   };

//   if (status === 'success') {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="max-w-md text-center bg-white/90 border border-gray-200 shadow-2xl rounded-sm p-10">
//           <h5 className="font-bold text-red-600 mb-2 tracking-wide">THANK YOU</h5>
//           <p className="text-gray-500 text-sm">
//             Your application has been received. We'll be in touch to confirm your session.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6 relative overflow-hidden"
//     >
//       {/* MOBILE SVG (Portrait) */}
//       <svg
//         className="absolute inset-0 w-full h-full pointer-events-none z-0 block md:hidden"
//         viewBox="0 0 500 1000"
//         preserveAspectRatio="xMidYMid meet"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect x="50" y="68" width="400" height="864" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="100" y1="68" x2="100" y2="932" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="400" y1="68" x2="400" y2="932" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="20" y1="500" x2="480" y2="500" pathLength="1" className="court-line" style={{ ...lineStyle, strokeWidth: 6, stroke: '#9ca3af' }} />
//         <line x1="100" y1="268" x2="400" y2="268" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="100" y1="732" x2="400" y2="732" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="250" y1="268" x2="250" y2="732" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="250" y1="68" x2="250" y2="88" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="250" y1="932" x2="250" y2="912" pathLength="1" className="court-line" style={lineStyle} />
//       </svg>

//       {/* DESKTOP SVG (Landscape) */}
//       <svg
//         className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
//         viewBox="0 0 1000 500"
//         preserveAspectRatio="xMidYMid meet"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect x="68" y="50" width="864" height="400" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="68" y1="100" x2="932" y2="100" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="68" y1="400" x2="932" y2="400" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="500" y1="20" x2="500" y2="480" pathLength="1" className="court-line" style={{ ...lineStyle, strokeWidth: 6, stroke: '#9ca3af' }} />
//         <line x1="268" y1="100" x2="268" y2="400" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="732" y1="100" x2="732" y2="400" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="268" y1="250" x2="732" y2="250" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="68" y1="250" x2="88" y2="250" pathLength="1" className="court-line" style={lineStyle} />
//         <line x1="932" y1="250" x2="912" y2="250" pathLength="1" className="court-line" style={lineStyle} />
//       </svg>

//       {/* Form Container */}
//       <div
//         ref={formBoxRef}
//         className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-md border border-gray-200 p-8 md:p-12 will-change-transform opacity-0 shadow-2xl rounded-sm max-h-[90vh] overflow-y-auto"
//       >
//         <div ref={contentRef} className="space-y-6">
//           <div className="mb-8">
//             <h5 className="font-bold text-red-600 mb-2 tracking-wide">APPLY FOR AN INVITATION</h5>
//             <p className="text-gray-500 text-sm">Book Your Trial And Get On Court.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* First / Last Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Gender */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Gender
//               </label>
//               <div className="flex gap-6">
//                 {GENDER_OPTIONS.map((opt) => (
//                   <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value={opt}
//                       checked={formData.gender === opt}
//                       onChange={handleChange}
//                       required
//                       className="h-4 w-4 text-red-600 focus:ring-red-500"
//                     />
//                     {opt}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Date of Birth */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Date of Birth
//               </label>
//               <div className="grid grid-cols-3 gap-4">
//                 <input
//                   type="number"
//                   name="dobMonth"
//                   placeholder="MM"
//                   min="1"
//                   max="12"
//                   value={formData.dobMonth}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//                 <input
//                   type="number"
//                   name="dobDay"
//                   placeholder="DD"
//                   min="1"
//                   max="31"
//                   value={formData.dobDay}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//                 <input
//                   type="number"
//                   name="dobYear"
//                   placeholder="YYYY"
//                   min="1900"
//                   max="2100"
//                   value={formData.dobYear}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* City / Phone */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="1 (555) 000-0000"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Email / Instagram */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                   Instagram Handle
//                 </label>
//                 <input
//                   type="text"
//                   name="instagram"
//                   placeholder="@handle"
//                   value={formData.instagram}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Can we tag you on socials */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Can we tag you on our socials?
//               </label>
//               <div className="flex gap-6">
//                 {YES_NO_OPTIONS.map((opt) => (
//                   <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="tagSocials"
//                       value={opt}
//                       checked={formData.tagSocials === opt}
//                       onChange={handleChange}
//                       required
//                       className="h-4 w-4 text-red-600 focus:ring-red-500"
//                     />
//                     {opt}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Profession */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Profession — Industry, Company, Designation
//               </label>
//               <input
//                 type="text"
//                 name="profession"
//                 placeholder="e.g. Finance, Acme Corp, VP"
//                 value={formData.profession}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//               />
//             </div>

//             {/* Sporting background (checkboxes + other) */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Any sporting background?
//               </label>
//               <div className="flex flex-wrap gap-4 mb-3">
//                 {SPORT_OPTIONS.map((opt) => (
//                   <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={formData.sportingBackground.includes(opt)}
//                       onChange={() => handleSportToggle(opt)}
//                       className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
//                     />
//                     {opt}
//                   </label>
//                 ))}
//               </div>
//               <input
//                 type="text"
//                 name="sportingBackgroundOther"
//                 placeholder="Other (optional)"
//                 value={formData.sportingBackgroundOther}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
//               />
//             </div>

//             {/* Playing Padel since */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Playing Padel since
//               </label>
//               <div className="relative">
//                 <select
//                   name="playingSince"
//                   value={formData.playingSince}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
//                 >
//                   <option value="" disabled>Select duration</option>
//                   {PLAYING_SINCE_OPTIONS.map((opt) => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                   <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Self-assessed level */}
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
//                 Self-assessed level?
//               </label>
//               <div className="relative">
//                 <select
//                   name="selfLevel"
//                   value={formData.selfLevel}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
//                 >
//                   <option value="" disabled>Select level</option>
//                   {LEVEL_OPTIONS.map((opt) => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                   <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-start space-x-3 pt-2">
//               <input
//                 type="checkbox"
//                 name="acceptedTerms"
//                 id="terms"
//                 checked={formData.acceptedTerms}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
//               />
//               <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
//                 I accept Padel Elite's{' '}
//                 <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I{' '}
//                 <br className="hidden md:block" />have read the{' '}
//                 <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
//               </label>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4 flex flex-col items-center">
//               <button
//                 type="submit"
//                 disabled={status === 'submitting'}
//                 className="w-full md:w-auto px-12 py-3.5 bg-red-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
//               </button>
//               {status === 'error' && (
//                 <span className="text-xs text-red-500 mt-3">
//                   Something went wrong. Please try again.
//                 </span>
//               )}
//               <span className="text-xs text-gray-400 mt-4">
//                 We'll contact you to confirm your session.
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ============================================================================
 * HOW TO FIND YOUR GOOGLE FORM'S entry.XXXXXXXXX IDs (one-time setup, ~2 min)
 * ============================================================================
 * 1. Open your form's live edit/view URL in a normal browser tab:
 *    https://docs.google.com/forms/d/e/1FAIpQLSedxrlrtWliiHXKGNc27va03s5k-b3Xf_7EIJrkYdK4_gfHNg/viewform
 * 2. Right-click the page -> "View Page Source" (or press Ctrl+U / Cmd+Option+U).
 * 3. Press Ctrl+F / Cmd+F and search for: entry.
 * 4. You'll see chunks like ["First Name",...,[[123456789,... the number right
 *    before/after each question's label is that field's entry ID.
 *    (Easier alternative: Chrome DevTools -> Network tab -> fill out and submit
 *    the real form once -> look at the "formResponse" request -> its Form Data
 *    payload lists every entry.XXXXXXXXX key directly.)
 * 5. Paste each number into the FIELD_IDS object below, replacing the
 *    placeholder strings.
 *
 * Date of Birth is a special "date" field type in Google Forms: it actually
 * submits as THREE entries: entry.XXXXXXXXX_month, _day, _year. Find the base
 * number the same way and I've already appended the suffixes for you.
 *
 * "Any sporting background?" is a checkbox field with an "Other" option, so it
 * submits as entry.XXXXXXXXX (one value per checked box, repeated) plus
 * entry.XXXXXXXXX.other_option_response for free text typed into "Other".
 * ============================================================================
 */

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSedxrlrtWliiHXKGNc27va03s5k-b3Xf_7EIJrkYdK4_gfHNg/formResponse';

const FIELD_IDS = {
  firstName: 'entry.REPLACE_ME_1',
  lastName: 'entry.REPLACE_ME_2',
  gender: 'entry.REPLACE_ME_3',
  dobMonth: 'entry.REPLACE_ME_4_month',
  dobDay: 'entry.REPLACE_ME_4_day',
  dobYear: 'entry.REPLACE_ME_4_year',
  city: 'entry.REPLACE_ME_5',
  phone: 'entry.REPLACE_ME_6',
  email: 'entry.REPLACE_ME_7',
  instagram: 'entry.REPLACE_ME_8',
  tagSocials: 'entry.REPLACE_ME_9',
  profession: 'entry.REPLACE_ME_10',
  sportingBackground: 'entry.REPLACE_ME_11', // checkbox group, repeat key per value
  sportingBackgroundOther: 'entry.REPLACE_ME_11.other_option_response',
  playingSince: 'entry.REPLACE_ME_12',
  selfLevel: 'entry.REPLACE_ME_13',
};

const GENDER_OPTIONS = ['Male', 'Female'];
const YES_NO_OPTIONS = ['Yes', 'No'];
const SPORT_OPTIONS = ['Tennis', 'Squash', 'Badminton', 'Cricket', 'Football'];
const PLAYING_SINCE_OPTIONS = [
  'Under 3 months',
  '3 months to 1 Year',
  '1 year to 2 years',
  '2 years to 3 years',
  'More than 3 years',
];
const LEVEL_OPTIONS = ['2.0 - 2.5', '2.5 - 3.0', '3.0 - 3.5', '3.5 - 4.0', '4.0 - 4.5', '4.5 - 5.0'];

export default function InvitationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    city: '',
    phone: '',
    email: '',
    instagram: '',
    tagSocials: '',
    profession: '',
    sportingBackground: [], // array of checked sports
    sportingBackgroundOther: '',
    playingSince: '',
    selfLevel: '',
    acceptedTerms: false,
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const containerRef = useRef(null);
  const formBoxRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 110%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.set('.court-line', { strokeDashoffset: 1 })
        .set(formBoxRef.current, { opacity: 0, scale: 0.95, y: 20 })
        .set(contentRef.current.children, { opacity: 0, y: 20 });

      tl.to('.court-line', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        stagger: 0.1,
      })
        .to(
          formBoxRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .to(
          contentRef.current.children,
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSportToggle = (sport) => {
    setFormData((prev) => {
      const already = prev.sportingBackground.includes(sport);
      return {
        ...prev,
        sportingBackground: already
          ? prev.sportingBackground.filter((s) => s !== sport)
          : [...prev.sportingBackground, sport],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = new FormData();
    payload.append(FIELD_IDS.firstName, formData.firstName);
    payload.append(FIELD_IDS.lastName, formData.lastName);
    payload.append(FIELD_IDS.gender, formData.gender);
    payload.append(FIELD_IDS.dobMonth, formData.dobMonth);
    payload.append(FIELD_IDS.dobDay, formData.dobDay);
    payload.append(FIELD_IDS.dobYear, formData.dobYear);
    payload.append(FIELD_IDS.city, formData.city);
    payload.append(FIELD_IDS.phone, formData.phone);
    payload.append(FIELD_IDS.email, formData.email);
    payload.append(FIELD_IDS.instagram, formData.instagram);
    payload.append(FIELD_IDS.tagSocials, formData.tagSocials);
    payload.append(FIELD_IDS.profession, formData.profession);
    formData.sportingBackground.forEach((sport) => {
      payload.append(FIELD_IDS.sportingBackground, sport);
    });
    if (formData.sportingBackgroundOther) {
      payload.append(FIELD_IDS.sportingBackground, '__other_option__');
      payload.append(FIELD_IDS.sportingBackgroundOther, formData.sportingBackgroundOther);
    }
    payload.append(FIELD_IDS.playingSince, formData.playingSince);
    payload.append(FIELD_IDS.selfLevel, formData.selfLevel);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });
      setStatus('success');
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
    }
  };

  const lineStyle = {
    fill: 'none',
    stroke: '#d1d5db',
    strokeWidth: 4,
    strokeDasharray: 1,
    strokeDashoffset: 1,
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md text-center bg-white/90 border border-gray-200 shadow-2xl rounded-sm p-10">
          <h5 className="font-bold text-red-600 mb-2 tracking-wide">THANK YOU</h5>
          <p className="text-gray-500 text-sm">
            Your application has been received. We'll be in touch to confirm your session.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6 relative overflow-hidden"
    >
      {/* MOBILE SVG (Portrait - Increased Height ViewBox) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 block md:hidden"
        viewBox="0 0 500 1200"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="50" width="400" height="1100" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="100" y1="50" x2="100" y2="1150" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="400" y1="50" x2="400" y2="1150" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="20" y1="600" x2="480" y2="600" pathLength="1" className="court-line" style={{ ...lineStyle, strokeWidth: 6, stroke: '#9ca3af' }} />
        <line x1="100" y1="325" x2="400" y2="325" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="100" y1="875" x2="400" y2="875" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="250" y1="325" x2="250" y2="875" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="250" y1="50" x2="250" y2="70" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="250" y1="1150" x2="250" y2="1130" pathLength="1" className="court-line" style={lineStyle} />
      </svg>

      {/* DESKTOP SVG (Landscape - Increased Height ViewBox) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="50" width="900" height="500" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="50" y1="125" x2="950" y2="125" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="50" y1="475" x2="950" y2="475" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="500" y1="20" x2="500" y2="580" pathLength="1" className="court-line" style={{ ...lineStyle, strokeWidth: 6, stroke: '#9ca3af' }} />
        <line x1="275" y1="125" x2="275" y2="475" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="725" y1="125" x2="725" y2="475" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="275" y1="300" x2="725" y2="300" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="50" y1="300" x2="70" y2="300" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="950" y1="300" x2="930" y2="300" pathLength="1" className="court-line" style={lineStyle} />
      </svg>

      {/* Form Container (Y-scroll removed) */}
      <div
        ref={formBoxRef}
        className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-md border border-gray-200 p-8 md:p-12 will-change-transform opacity-0 shadow-2xl rounded-sm"
      >
        <div ref={contentRef} className="space-y-6">
          <div className="mb-8">
            <h5 className="font-bold text-red-600 mb-2 tracking-wide">APPLY FOR AN INVITATION</h5>
            <p className="text-gray-500 text-sm">Book Your Trial And Get On Court.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Gender
              </label>
              <div className="flex gap-6">
                {GENDER_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={opt}
                      checked={formData.gender === opt}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-red-600 focus:ring-red-500"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Date of Birth
              </label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="number"
                  name="dobMonth"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={formData.dobMonth}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                <input
                  type="number"
                  name="dobDay"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={formData.dobDay}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
                <input
                  type="number"
                  name="dobYear"
                  placeholder="YYYY"
                  min="1900"
                  max="2100"
                  value={formData.dobYear}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            {/* City / Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            {/* Email / Instagram */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@handle"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            {/* Can we tag you on socials */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Can we tag you on our socials?
              </label>
              <div className="flex gap-6">
                {YES_NO_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="tagSocials"
                      value={opt}
                      checked={formData.tagSocials === opt}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-red-600 focus:ring-red-500"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Profession */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Profession — Industry, Company, Designation
              </label>
              <input
                type="text"
                name="profession"
                placeholder="e.g. Finance, Acme Corp, VP"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            {/* Sporting background (checkboxes + other) */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Any sporting background?
              </label>
              <div className="flex flex-wrap gap-4 mb-3">
                {SPORT_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sportingBackground.includes(opt)}
                      onChange={() => handleSportToggle(opt)}
                      className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                    />
                    {opt}
                  </label>
                ))}
              </div>
              <input
                type="text"
                name="sportingBackgroundOther"
                placeholder="Other (optional)"
                value={formData.sportingBackgroundOther}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>

            {/* Playing Padel since */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Playing Padel since
              </label>
              <div className="relative">
                <select
                  name="playingSince"
                  value={formData.playingSince}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select duration</option>
                  {PLAYING_SINCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Self-assessed level */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Self-assessed level?
              </label>
              <div className="relative">
                <select
                  name="selfLevel"
                  value={formData.selfLevel}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select level</option>
                  {LEVEL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                name="acceptedTerms"
                id="terms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                I accept Padel Elite's{' '}
                <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I{' '}
                <br className="hidden md:block" />have read the{' '}
                <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col items-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-12 py-3.5 bg-red-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
              {status === 'error' && (
                <span className="text-xs text-red-500 mt-3">
                  Something went wrong. Please try again.
                </span>
              )}
              <span className="text-xs text-gray-400 mt-4">
                We'll contact you to confirm your session.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}