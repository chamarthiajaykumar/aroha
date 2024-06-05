import HeroSection from "@/components/herosection/HeroSection";
import Services from "@/components/services/Services";
import Testimonals from "@/components/testimonals/Testimonals";
import Enquiry from "@/components/Enquiry/Enquiry";
import Footer from "@/components/footer/Footer";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <Services />
      <Testimonals />
      <Enquiry />
      <Footer />
    </>
  );
}

export default LandingPage;
