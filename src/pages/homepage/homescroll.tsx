import { Homepage } from "./homepage";
import './homepage.css'
import { motion, useScroll, useSpring } from "framer-motion";

export default function Scrollbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <div className="progress-bar-background">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Homepage />
      </div>
    );
  }