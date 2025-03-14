"use client";
import Image from "next/image";
import { useState } from "react";
import { faq } from "../constants";

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);  // Track the index of the expanded FAQ

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);  // Toggle the expansion of the selected FAQ
    };

    return (
        <section className="bg-black h-[800px] max-lg:h-[850px] max-md:h-[900px] max-sm:h-[850px]">
            <div className="max-w-screen-xl h-full mx-auto">
                <div className="flex flex-col">
                    <h1 className="text-5xl max-md:text-4xl text-center text-white font-bold max-md:w-[26rem] max-sm:w-[22rem] max-xs:w-[18rem] mx-auto mt-28 max-xl:mt-20">Frequently as<span className="max-md:hidden">ked</span> questions</h1>
                    <p className="text-lg max-sm:text-sm text-center text-white max-sm:leading-5 w-[50rem] max-2xl:w-[45rem] max-xl:w-[38rem] max-lg:w-[32rem] max-md:w-[28rem] max-sm:w-[24rem] max-xs:w-[19.7rem] mx-auto mt-4 mb-12">Explore our FAQ section to get detailed insights into the features, functionalities, and benefits of using SASS for streamlining operations and boosting sales.</p>
                </div>
                {faq.map(({ key, heading, content }, index) => (
                    <div key={key} className="flex flex-col w-full max-w-[50rem] mx-auto px-2">
                        <div className={`${expandedIndex === index ? "max-h-[10rem] max-md:max-h-[14rem]" : "max-h-[2rem] max-md:max-h-[3.4rem] max-sm:max-h-[2.6rem]"} overflow-hidden mt-6 transition-all duration-700 `}>
                            <div className="flex justify-between">
                                <h3 className="text-lg max-sm:text-sm text-white max-md:w-[42rem] font-bold">{heading}</h3>
                                <button className={`flex transition-all duration-500 ${expandedIndex === index ? "rotate-180" : ""}`} onClick={() => toggleAccordion(index)}>
                                    <Image width={25} height={25} src={"/ArrowDown.svg"} alt="arrow down" className="max-lg:w-6 max-md:w-6 max-sm:w-8 max-xs:w-10" />
                                </button>
                            </div>
                            <p className="max-sm:text-sm text-white w-full max-w-[50rem] max-lg:max-w-[42rem] mt-4 max-md:mt-6 max-sm:mt-5">{content}</p>
                        </div>
                        <div className="border-b-[2px] border-[#27272A] mt-4" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
