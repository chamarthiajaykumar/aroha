"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Header from "../header/Header";

function HeroSection() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.7,
  });

  return (
    <Element name="home">
      <section
        ref={heroRef}
        className="h-screen bg-cover flex flex-col justify-center bg-center overflow-x-hidden headerBg"
      >
        <Header inView={heroInView} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 py-8 px-6 md:px-16">
          <div className="col-span-3 md:col-span-2 mt-[60px]">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [30, -30, 15, -15, 0] }}
              transition={{ delay: 0.7 }}
              className="text-white text-4xl md:text-5xl font-playfairdisplay"
            >
              Event Planning
            </motion.h1>
            <div className="px-6 py-3">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-2xl md:text-3xl text-white font-playfairdisplay"
              >
                Create & plan your perfect event with us.
              </motion.p>
            </div>
          </div>
          <div className="hidden md:block col-span-1 mt-[60px]"></div>
        </div>
      </section>
    </Element>
  );
}

export default HeroSection;
