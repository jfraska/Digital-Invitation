"use client";
import { useEffect, useRef, useContext } from "react";
import { SmoothScrollContext } from "@/contexts/SmoothScroll.context";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scroll } = useContext(SmoothScrollContext);
  const y = useSpring(0, {
    damping: 100,
    stiffness: 400,
  });

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", ({ scroll }) => {
        y.set(scroll.y);
      });
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);

  const scrollVelocity = useVelocity(y);
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div data-scroll className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity() {
  return (
    <section data-scroll-section className="w-full h-fit py-6">
      <div className="w-full px-[3%]">
        <div className="w-full mb-4 border-b border-black" />
      </div>
      <ParallaxText baseVelocity={-1.5}>zoejeton zoejeton</ParallaxText>
      <ParallaxText baseVelocity={1.5}>digital invitation</ParallaxText>
    </section>
  );
}
