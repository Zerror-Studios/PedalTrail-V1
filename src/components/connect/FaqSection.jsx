"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const categories = ["GENERAL", "THE TRAIL", "APPLICATIONS", "PARTNERSHIPS"];

const faqData = [
  {
    question: "What is The Padel Trail?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
  },
  {
    question: "How many players take part?",
    answer: "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    question: "Is applying the same as booking?",
    answer: "Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.",
  },
  {
    question: "Can I attend without a partner?",
    answer: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.",
  },
  {
    question: "What's included in The Padel Trail?",
    answer: "Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  },
  {
    question: "Do you work with brands and partners?",
    answer: "Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#fcdccf]">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <p className="text-[#2d2d2d] NeueM text-lg text-[1.3rem]! font-medium ">
          {faq.question}
        </p>
        <span className="text-[#f36b35] text-[2rem]! font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <div className="pb-6 text-gray-600 text-base  pr-8">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("GENERAL");
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-fit w-full bg-white flex justify-center py-24 px-8 md:px-16 font-sans">
      <div className=" w-full flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left Column: Title & Navigation */}
        <div className="w-full md:w-[30%] flex flex-col">
          <h3 className="text-5xl NeueM md:text-6xl font-serif text-[#1a1a1a]  mb-16">
            FAQS
          </h3>
          <nav className="flex flex-col space-y-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Reset open accordion on category change
                }}
                className={`text-left text-sm NeueM ${
                  activeCategory === category
                    ? "text-[#f36b35]"
                    : "text-[#2d2d2d] hover:text-[#f36b35] transition-colors duration-300"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="w-full md:w-[70%] flex flex-col mt-4 border-t border-[#fcdccf]">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}