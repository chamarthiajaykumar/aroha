"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visibleHiddenYVariants, visibleHiddenVariants } from "../utils/utils";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { openInNewTab } from "../utils/utils";

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#3C3C3C] text-white px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
        <motion.div
          className="col-span-1 md:col-span-2"
          ref={ref}
          variants={visibleHiddenYVariants(1, 50, 0, 1)}
          initial="hidden"
          animate={controls}
        >
          <h5 className="mb-3 text-2xl font-bold font-playfairdisplay">
            Aroha
          </h5>
          <p className="font-raleway text-md">
            Aroha, based in Hyderabad, excels in event planning and themed
            decorations for birthdays, housewarmings, cradle ceremonies, saree
            ceremonies, and anniversaries. We also offer celebrity management,
            customized gifts, social events, brand promotion, production house
            services, themed parties, and entertainment solutions.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={visibleHiddenYVariants(1, -50, 0, 1.5)}
          initial="hidden"
          animate={controls}
        >
          <div>
            <h5 className="font-bold mb-3 text-xl sm:text-2xl mb-2 font-playfairdisplay">
              Get Social
            </h5>
            <p className="mb-4 font-raleway">
              Follow us to stay connected and receive instant updates.
            </p>
            <div className="flex items-start-center gap-x-8">
              <div>
                <FaFacebook
                  className="iconhover cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://www.facebook.com/profile.php?id=100063521479224&mibextid=JRoKGi"
                    )
                  }
                  size={28}
                />
              </div>
              <div>
                <FaWhatsapp
                  className="iconhover cursor-pointer"
                  size={28}
                  onClick={() =>
                    openInNewTab("https://wa.me/message/ZRXY6VBVBN5RF1")
                  }
                />
              </div>
              <div>
                <FaInstagram
                  className="iconhover cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://www.instagram.com/aroha.events?igsh=MWJwaG1oc3QydTE1Mw=="
                    )
                  }
                  size={28}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        variants={visibleHiddenVariants(1, 0, 2.8)}
        initial="hidden"
        animate={controls}
        className="mt-6"
      >
        <p className="font-raleway text-white text-center text-md">
          Copyright &#169; 2024 Aroha. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
}

export default Footer;
