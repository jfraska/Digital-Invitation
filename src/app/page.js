"use client";

import { SmoothScrollProvider } from "@/contexts/SmoothScroll.context";

import About from "@/components/About";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ScrollVelocity from "@/components/ScrollVelocity";
import Template from "@/components/Template";
import Navbar from "@/components/Navbar";

export default function Home() {
  const settings = {
    options: {
      smooth: true,
      lerp: 0.4,
      multiplier: 0.5,
      // ... all available Locomotive Scroll instance options
    },
  };

  return (
    <SmoothScrollProvider {...settings}>
      <div data-scroll-container>
        <Navbar />
        <Hero />
        <ScrollVelocity />
        <About />
        <Feature />
        <Template />
        {/* <Pricing /> */}
      </div>
    </SmoothScrollProvider>
  );
}
