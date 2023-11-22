"use client";
import { Icon } from "@iconify/react";
import Statue from "./canvas/Statue";

export default function About() {
  return (
    <section
      data-scroll-section
      className="relative w-full h-fit mb-16 px-[3%]"
      id="about"
    >
      <div className="w-full mt-2 border-b border-black" />
      <h1 className="text-sm align-text-bottom  mt-2">
        <span className="text-lg">● &nbsp;</span>About Us
      </h1>
      <p className="mt-8 text-2xl max-w-4xl">
        &emsp; HERE ARE SOME BEAUTIFUL PROJECTS SHOWCASING OUR WEDDING
        INVITATIONS ● YOU CAN EXPLORE OUR INSPIRATION SECTION, AND PLEASE DON'T
        HESITATE TO SHARE YOUR WEDDING INVITATION PROJECTS WITH US TO GET
        FEATURED.
      </p>

      <div className="flex justify-center mt-20">
        <div className="w-[40%]">
          <div className="w-4/5 h-[450px] bg-[#000000] rounded-lg">
            {/* <Statue /> */}
          </div>
          <div className="flex w-3/4 m-2 items-end gap-[40%]">
            <h1 className="text-lg">Our CLient</h1>
            <h2 className="text-base font-thin">testimoni</h2>
          </div>
        </div>

        <div className="w-[30%]">
          <div className="flex hover-underline-animation w-full border-b py-2 pr-1 border-black-100 mx-4 items-end justify-between">
            <h1 className="text-lg text-black-200">More About Us</h1>
            <Icon
              icon="carbon:arrow-up"
              className="text-black-200"
              width="20"
              rotate={1}
            />
          </div>
          <div className="flex hover-underline-animation w-full border-b py-2 pr-1 border-black-100 mx-4 items-end justify-between">
            <h1 className="text-xl text-black-200">Instagram</h1>
            <Icon
              icon="carbon:arrow-up"
              className="text-black-200"
              width="20"
              rotate={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
