import React from 'react';

export default function PartnersSection() {
  const partners = [
    {
      name: 'Adidas',
      logo: (
        <svg className="h-10 md:h-12 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M23.167 19.34L13.14 2.833h-3.411l7.85 12.923-3.69 2.083L7.766 7.421H4.355l6.702 11.02-3.69 2.083L3.411 14.15H0l5.068 8.35h18.099l.008-.838-.008-2.322z" />
        </svg>
      ),
    },
    {
      name: 'Otto Group',
      logo: (
        <span className="font-sans font-bold text-2xl md:text-3xl tracking-tighter lowercase">
          otto group
        </span>
      ),
    },
    {
      name: 'Ralph Lauren',
      logo: (
        <span className="font-serif text-xs md:text-sm tracking-[0.35em] uppercase font-light">
          Ralph Lauren
        </span>
      ),
    },
    {
      name: 'Laudes Foundation',
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm md:text-base font-serif tracking-wide">
            <span>Laudes</span>
            <div className="w-8 md:w-12 h-[1px] bg-black"></div>
          </div>
          <span className="text-[10px] md:text-xs tracking-widest uppercase text-gray-700 font-sans">
            Foundation
          </span>
        </div>
      ),
    },
    {
      name: 'Norrøna',
      logo: (
        <div className="flex items-center gap-1">
          <span className="font-sans font-black tracking-wider text-base md:text-xl uppercase">
            Norrøna
          </span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-36 px-6 md:px-10 lg:px-10">
      <div className=" mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-32">
          <h4 className="NeueM text-3xl md:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.15] tracking-tight max-w-xl">
            Built With People Who<br />
            Share The Vision.
          </h4>
          <p className="text-xs md:text-sm text-[#555555] max-w-[260px] ">
            The Trail Comes To Life Through The People And Brands We Work With.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 items-center justify-items-center opacity-90">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-full h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              {partner.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}