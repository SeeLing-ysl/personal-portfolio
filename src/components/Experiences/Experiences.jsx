import React from "react";
import css from "./Experiences.module.scss";
import { useInView } from "react-intersection-observer";
import { workExp, education, skill, project } from "../../utils/data";
import Typewriter from "../../hooks/useTypewriteEffect";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
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
  return (
    <section id="Experiences" className={`paddings ${css.wrapper}`}>
      <motion.div className={`paddings flexCenter innerWidth ${css.container}`}>
        <h2 className={`primaryText yPaddings`}>My Resume</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: false, amount: 0.2 }}
          className={`${css.resume}`}
        >
          <ResumeCategory word="Work Experience" loop={2} />
          <motion.div className={`flexStart ${css.resumeDetail}`}>
            {workExp.map((exp, i) => {
              return (
                <motion.div className={`${css.exp}`} key={i}>
                  <motion.h2
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className={`secondaryTextTitle`}
                  >
                    {exp.role}, {exp.place}
                  </motion.h2>
                  <motion.h4 variants={fadeIn("left", "tween", 0.4, 1)}>
                    {exp.tenure}
                  </motion.h4>
                  <motion.ul variants={fadeIn("left", "tween", 0.6, 1)}>
                    {exp.details.map((detail, i) => {
                      return <li key={i}>{detail}</li>;
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
          <ResumeCategory word="Education" loop={2} />
          <div className={`flexStart ${css.resumeDetail}`}>
            {education.map((edu, i) => {
              return (
                <div className={`${css.exp}`} key={i}>
                  <h2 className={`secondaryTextTitle`}>{edu.place}</h2>
                  <h4>{edu.period}</h4>
                  <ul>
                    {edu.details.map((detail, i) => {
                      return <li key={i}>{detail}</li>;
                    })}
                  </ul>
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
          <ResumeCategory word="Skills" loop={2} />
          <div className={`flexStart ${css.resumeDetail}`}>
            {skill.map((ski, i) => {
              return (
                <div className={`${css.exp}`} key={i}>
                  <h2 className={`secondaryTextTitle`}>{ski.title}</h2>
                  <p>{ski.details}</p>
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
          <ResumeCategory word="Projects" loop={2} />
          <div className={`flexStart ${css.resumeDetail}`}>
            {project.map((pro, i) => {
              return (
                <div className={`${css.exp}`} key={i}>
                  <h2 className={`secondaryTextTitle`}>{pro.title}</h2>
                  <ul>
                    {pro.details.map((detail, i) => {
                      return <li key={i}>{detail}</li>;
                    })}
                  </ul>
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
