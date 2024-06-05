"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visibleHiddenVariants } from "../utils/utils";
import { CarouselItem } from "../ui/carousel";

interface Props {
  testimonial: string;
  client: string;
}

function TestimonialCarousel({ testimonial, client }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <CarouselItem>
      <div className="flex flex-col items-center justify-center py-6 md:py-10 position-relative">
        <motion.div
          className="w-11/12 md:w-10/12"
          ref={ref}
          variants={visibleHiddenVariants(0.4, 0, 0.8)}
          initial="hidden"
          animate={controls}
        >
          <p className="text-center text-lg md:text-xl">{testimonial}</p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={visibleHiddenVariants(0.6, 0, 1)}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-center font-semibold my-4 text-xl md:text-2xl">
            {client}
          </h3>
        </motion.div>
      </div>
    </CarouselItem>
  );
}

export default TestimonialCarousel;
