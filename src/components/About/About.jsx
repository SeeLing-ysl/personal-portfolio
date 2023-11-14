import React, { useEffect } from "react";
import css from "./About.module.scss";
import { motion } from "framer-motion";
import { fadeIn, floatIng, textVariant2, staggerContainer } from "../../utils/motion";
 

const About = () => {
 
  return (  
    <section id="About" className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.4 }}
        className={`innerWidth ${css.container}`}
      >
        <motion.div 
        variants={fadeIn("right", "tween", 0.3, 1)}
        className={`${css.leftElement}`}>
          <motion.img src="./about-1.svg" alt="" variants={floatIng(0.5, 1.6)}  className={css.about_img_1} />
          
        </motion.div>
        <div className={` ${css.rightElement}`}>
          <motion.h2 className={`primaryText ${css.title}`} variants={fadeIn("left", "tween", 0.2, 1)}>
            About Me
          </motion.h2>
          <motion.p className={`${css.pText}`} variants={fadeIn("left", "tween", 0.4, 1)}>
            Graduate of BSc Information Technology (IT) from Universiti
            Teknologi PETRONAS (UTP). Deeply passionate about web application
            development. Always be an active, dependable and open minded in
            continuing learning and experiencing challenges. I thrive in dynamic
            environments, pride myself on adaptability, and see challenges as
            opportunities for growth and innovation. With industrial experience
            in technical support and customer relationship management, I have a
            good foundation in communication. Worked on several accomplished
            projects, including the development of a construction company's
            website, a retail website for clocks and watches, a billing system,
            and automation solutions for finance-related processes. My skills
            include Python, HTML, CSS, JavaScript, VBA, Java, and MySQL.
            <br />
            <br />
          </motion.p>
          <motion.p className={`${css.pText}`} variants={fadeIn("left", "tween", 0.5, 1)}>
            Currently, I'm expanding my skill set by exploring modern web
            development frameworks like Vue and React, which are in high
            demand in the industry.I am eager to utilize my skills and knowledge
            to contribute positively to any institution I'm a part of. Whether
            it's creating user-friendly web applications, optimizing existing
            systems, or collaborating with a team to find innovative solutions,
            I'm committed to making a meaningful impact and helping
            organizations achieve their goals. <br />
            <br />
          </motion.p>
        </div>
        
      </motion.div>
    </section>
  );
};

export default About;
