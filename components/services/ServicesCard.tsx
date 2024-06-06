"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visibleHiddenYVariants } from "../utils/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
interface Props {
  title: string;
  description: string;
  image: string | any;
}

function ServicesCard({ title, description, image }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={visibleHiddenYVariants(1.2, 30, 0, 0.8)}
      initial="hidden"
      animate={controls}
    >
      <Card className="border-none rounded-md cardResponsiveHeight transform transition duration-200 ease-in hover:scale-105">
        <CardDescription>
          <Image
            src={image}
            className="object-cover h-[160px] w-full"
            alt={title}
            placeholder="blur"
            quality={70}
          />
        </CardDescription>
        <CardHeader className="px-2 md:px-3 py-6">
          <CardTitle className="text-center text-md md:text-lg font-playfairdisplay">
            {title}
          </CardTitle>
          <CardDescription className="text-center text-sm text-grey fs-raleway">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export default ServicesCard;
