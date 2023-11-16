import React from "react";
import css from "./Experiences.module.scss";
import { useInView } from "react-intersection-observer";
import { workExp, education, skill, project } from "../../utils/data";
import { Typewriter, Typewriter1 } from "../../hooks/useTypewriteEffect";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const ResumeCategory = ({ word, loop }) => {
  const [ref, inView] = useInView();

  return (
    <motion.div
      variants={textVariant2}
      className={`flexStart ${css.resumeCategory}`}
      ref={ref}
    >
      {inView && <Typewriter word={word} loop={loop} />}
    </motion.div>
  );
};

const Experiences = () => {
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  return (
    <section id="Experiences" className={`paddings ${css.wrapper}`}>
      <motion.div className={` flexCenter innerWidth bottomPaddings ${css.container}`}>
        <h2 className={`primaryText yPaddings`} ref={ref}>
          {inView && <Typewriter1 word="My Resume" loop={2} typeSpeed={200} />}
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.2 }}
          className={`${css.resume}`}
        >
          <ResumeCategory word="Work Experience" loop={1} />
          <motion.div className={`flexStart ${css.resumeDetail}`}>
            {workExp.map((exp, i) => {
              return (
                <motion.div className={`${css.exp}`} key={i}>
                  <motion.h3
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`secondaryTextTitle`}
                  >
                    {/* <Typewriter1 word={`${exp.role}, ${exp.place}`}  loop={1} typeSpeed={80}/> */}
                    {exp.role}, {exp.place}
                  </motion.h3>
                  <motion.h4
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className="resumeText"
                  >
                    {exp.tenure}
                  </motion.h4>
                  <motion.ul variants={fadeIn("left", "tween", 0.6, 1)}>
                    {exp.details.map((detail, i) => {
                      return (
                        <li key={i} className="resumeText">
                          {detail}
                        </li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.25 }}
          className={`${css.resume}`}
        >
          <ResumeCategory word="Education" loop={1} />
          <div className={`flexStart ${css.resumeDetail}`}>
            {education.map((edu, i) => {
              return (
                <div className={`${css.exp}`} key={i}>
                  <motion.h3
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`secondaryTextTitle`}
                  >
                    {edu.place}
                  </motion.h3>
                  <motion.h4
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className="resumeText"
                  >
                    {edu.period}
                  </motion.h4>
                  <motion.ul variants={fadeIn("left", "tween", 0.6, 1)}>
                    {edu.details.map((detail, i) => {
                      return (
                        <li key={i} className="resumeText">
                          {detail}
                        </li>
                      );
                    })}
                  </motion.ul>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.25 }}
          className={`${css.resume}`}
        >
          <ResumeCategory word="Skills" loop={1} />
          <div className={`flexStart ${css.resumeDetail}`}>
            {skill.map((ski, i) => {
              return (
                <div className={`${css.exp}`} key={i}>
                  <motion.h3
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`secondaryTextTitle`}
                  >
                    {ski.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.4, 1)}
                    className="resumeText"
                  >
                    {ski.details}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.25 }}
          className={`${css.resume}`}
        >
          <ResumeCategory word="Projects" loop={1} />
          <div className={`flexStart ${css.resumeDetail}`}>
            {project.map((pro, i) => {
              return (
                <div className={`${css.exp}`} key={i}>
                  <motion.h3
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`secondaryTextTitle`}
                  >
                    {pro.title}
                  </motion.h3>
                  <motion.ul variants={fadeIn("left", "tween", 0.4, 1)}>
                    {pro.details.map((detail, i) => {
                      return (
                        <li key={i} className="resumeText">
                          {detail}
                        </li>
                      );
                    })}
                  </motion.ul>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experiences;
