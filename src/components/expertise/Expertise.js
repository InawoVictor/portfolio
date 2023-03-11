import { projectExperience, WhatDoIHelp } from "../../utils/data";
import styles from "./Expertise.module.scss";
import {motion} from "framer-motion";
import { fadeIn, footerVariants, staggerContainer, textVariant } from "../../utils/motion";

const Expertise = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: .25}}
        className={` ${styles.wrapper}`}
        name="expertise"
    >

      <motion.div 
        className={`paddings yPaddings flexCenter
        innerWidth ${styles.container}`}
        variants={footerVariants}
        >
            <div className={styles.leftSide}>
                {
                    projectExperience.map((exp, i) => {
                        return (
                            <motion.div 
                            variants={fadeIn("right","tween", (i+1)*0.2, 1)}
                            className={styles.exp} key={i}>
                                <div className="flexCenter" 
                                    style={{background: exp.bg}} 
                                >
                                    <exp.icon size={20} color="#fff" />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className="secondaryText">{exp.projects}</span>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
            <motion.div 
                variants={textVariant(0.5)}
            className={styles.RightSide}>
                <span className="primaryText">About Me? </span>
                {
                    WhatDoIHelp.map((paragraph, index) => {
                        return(
                            <span className="secondaryText" key={index}>
                                {paragraph}
                            </span>
                        )
                    })
                }
            </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Expertise
