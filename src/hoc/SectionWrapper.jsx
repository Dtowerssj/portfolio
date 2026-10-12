
import { motion } from 'motion/react';

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// The `amount` prop is the share of the section that must be on screen to start its animation. A
// section taller than the viewport divided by `amount` never gets there, so tall ones pass less.
const StarWrapper = (Component, idName, amount = 0.25) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
