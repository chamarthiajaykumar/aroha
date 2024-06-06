"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visibleHiddenYVariants } from "../utils/utils";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonialinfo } from "../data/testimonal";
import { Element } from "react-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Testimonals = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Element className="pt-28 md:pt-32 pb-8" name="testimonial">
      <div className="px-8 md:px-16">
        <motion.div
          ref={ref}
          variants={visibleHiddenYVariants(0.4, -15, 0, 0.6)}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-center font-semibold text-3xl font-playfairdisplay md:text-4xl">
            What Our Clients Say
          </h3>
        </motion.div>
        <div className="py-8 px-2 md:px-12 flex justify-center">
          <Carousel className="w-11/12">
            <CarouselContent>
              {testimonialinfo.map((data, index) => {
                return (
                  <TestimonialCarousel
                    key={index}
                    testimonial={data.testimonial}
                    client={data.client}
                  />
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Element>
  );
};

export default Testimonals;
