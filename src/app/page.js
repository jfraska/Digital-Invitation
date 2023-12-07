import "./style.css";

import { SmoothScrollProvider } from "@/contexts/SmoothScroll.context";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import ScrollVelocity from "@/components/ScrollVelocity";
import Template from "@/components/Template";
import Footer from "@/components/Footer";
import Message from "@/components/Message";

const settings = {
  options: {
    smooth: true,
    lerp: 0.2,
    multiplier: 0.3,
    mobile: {
      smooth: true,
    },
    // ... all available Locomotive Scroll instance options
  },
};

export default function Home() {
  return (
    <SmoothScrollProvider {...settings}>
      <Navbar />
      <main data-scroll-container>
        <Hero />
        <About />
        <Feature />
        <ScrollVelocity />
        <Template />
        {/* <Pricing /> */}
        <Message />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
