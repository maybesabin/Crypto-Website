import Homepage from "./components/Homepage"
import Portfolio from "./components/Features"
import TrustedPartner from "./components/TrustedPartner"
import { useEffect } from "react";
import gsap from "gsap"
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fadedown",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      ".fadeup",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      ".faderight",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      ".fadeleft",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      ".fade",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 3, ease: 'power3.out' }
    );
  }, []);
  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden">
      <Homepage />
      <TrustedPartner />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App