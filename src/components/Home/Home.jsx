import React from "react";
import css from "./Home.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

export const Home = () => {
  return (
    <section id="Home" className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.leftElement}>
          <motion.h2
            className="primaryText"
            variants={fadeIn("right", "tween", 0.4, 1)}
          >
            Hey There, <br />
            I'm Shireen.
            <br />
            <br />
          </motion.h2>
          <motion.h2
            className="secondaryText"
            variants={fadeIn("right", "tween", 0.4, 1)}
          >
            I design beautiful simple things,
            <br />
            And I love what I do.
          </motion.h2>
        </div>
        <motion.div
          variants={slideIn("up", "tween", 0.4, 1.3)}
          className={css.person}
        >
          <motion.img src="./person1.png" alt="person-home" variants={slideIn("up", "tween", 0.5, 1.3)}/>
        </motion.div>
        <div className={css.rightElement}>
          <motion.h2
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            Information Technology (IT) graduate
            <br />
            with a passion for fields concerning
            <br />
            web application development.
          </motion.h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
