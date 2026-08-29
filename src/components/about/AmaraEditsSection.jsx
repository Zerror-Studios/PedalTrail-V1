import React from 'react';

export default function AmaraEditsSection() {
  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between w-full overflow-hidden">
      
      {/* Left Column: Text Content */}
      <div className="w-full lg:w-1/2 p-8 pt-16  flex flex-col justify-start pl-10">
        {/* Eyebrow text */}
        <span className="text-[#E08565] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
          Amara Edits
        </span>
        
        {/* Main Heading */}
        <h4 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] NeueM text-[#2C2C2C] mb-8">
          The World behind <br className="hidden md:block" />
          The Padel trial.
        </h4>
        
        {/* Accent Divider Line */}
        <div className="w-12 h-[2px] bg-[#E08565] mb-8"></div>
        
        {/* Paragraphs */}
        <div className="space-y-6 text-[#6B6B6B] text-sm md:text-base max-w-[500px] leading-relaxed ">
          <p>
            The Padel Trail Is Part Of Amara Edits, A Company Creating Considered 
            Experiences Across Travel, Sport, Culture, And Hospitality. We Believe 
            The Way An Experience Comes Together Matters Just As Much As 
            Where It Takes You.
          </p>
          <p>
            From The Destination And The Details To The People And The Pace, 
            Every Experience Is Shaped With Intention. Amara Edits Brings This 
            Philosophy To Every Project, Creating Experiences That Feel Thoughtful, 
            Authentic, And Worth Remembering.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full lg:w-1/2 p-8 lg:p-24 lg:pr-[10%] lg:pl-10 flex justify-center items-center">
        <div className="w-full relative shadow-sm">
          <img 
            src="/images/about/AGI.png" 
            alt="Indoor Padel Court with wooden aesthetics" 
            className="w-full h-auto max-h-[85vh] object-cover"
          />
        </div>
      </div>
      
    </main>
  );
}