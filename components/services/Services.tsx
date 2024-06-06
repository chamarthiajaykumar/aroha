"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visibleHiddenYVariants } from "../utils/utils";
import { servicesinfo } from "../data/servicesinfo";
import ServicesCard from "./ServicesCard";
import { Element } from "react-scroll";

function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Element className="pt-20 md:pt-24 pb-4 bg-[#F7F7F7]" name="services">
      <div className="px-4 md:px-16">
        <motion.div
          className="py-4"
          ref={ref}
          variants={visibleHiddenYVariants(1, 50, 0, 0.5)}
          initial="hidden"
          animate={controls}
        >
          <h3 className="text-center font-semibold text-3xl md:text-4xl font-playfairdisplay">
            What We Offer
          </h3>
        </motion.div>
        <motion.div
          className="flex justify-center"
          ref={ref}
          variants={visibleHiddenYVariants(1.5, -50, 0, 1)}
          initial="hidden"
          animate={controls}
        >
          <p className="py-5 font-raleway text-gray-500 text-center text-lg md:text-xl xl:w-8/12">
            Our team provides a variety of wedding-related services, from
            planning the ceremony to designing and organizing its every element.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-8 py-6 px-4 md:px-16">
        {servicesinfo.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <ServicesCard
                title={data.title}
                description={data.description}
                image={data.image}
              />
            </React.Fragment>
          );
        })}
      </div>
    </Element>
  );
}

export default Services;
