"use client";
import { Icon } from "@iconify/react";
import { feature } from "@/constants";

export default function Feature() {
  return (
    <section
      data-scroll-section
      className="relative w-full pb-20 h-fit mx-auto px-[3%]"
      id="feature"
    >
      <div className="w-full mt-2 border-b border-black" />
      <h1 className="text-sm align-text-bottom  mt-2">
        <span className="text-lg">● &nbsp;</span>Feature
      </h1>
      <div className="flex mt-10 w-full items-center">
        <div className="w-[40%]">
          <div className="w-[50%] m-auto">
            <h1 className="text-4xl">Feature</h1>
            <h2 className="font-bold text-4xl">Premium</h2>
            <p className="text-lg">
              Our seamless and stylish digital wedding invitations are designed
              to make your special moments even more memorable. With us, you'll
              discover an eco-friendly and user-friendly solution that can also
              be customized to reflect your unique style and love story.
            </p>
          </div>
        </div>

        <div className="w-[60%]">
          <div
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#feature"
            className="flex w-[70%] m-auto flex-col bg-[#013A81] p-4 justify-start items-center text-white rounded-lg"
          >
            {feature.map((e) => (
              <div
                key={e.id}
                className="flex w-full py-2 pr-2 border-b border-white m-2 items-end justify-between"
              >
                <h1 className="text-xl leading-tight">
                  {e.title} <br />
                  <span className="text-base">{e.desc}</span>
                </h1>
                <Icon icon="iconoir:arrow-bl" color="white" width="30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}