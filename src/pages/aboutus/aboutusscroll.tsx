import { AboutUs } from "./aboutus";
import './aboutus.css'
import { motion, useScroll, useSpring } from "framer-motion";

export default function AboutUsScrollbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <div className="progress-bar-background">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <AboutUs />
      </div>
    );
  }