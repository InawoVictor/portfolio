import styles from "./Works.module.scss";
import { staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import {motion} from "framer-motion"; 
import { workExp } from "../../utils/data";

const Works = () => {
  return (
    <motion.section
      name="work"
      variants={staggerChildren}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: .25}}       
      className={`padings ${styles.wrapper}`}     
     >

      <div 
        className={`flexCenter innerWidth ${styles.container}`}
      >
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${styles.experiences}`}>
          
          {
            workExp.map((exp, index) => {
              return (
                <motion.div 
                variants={textVariant2}
                className={styles.exps} key={index}>

                  <div className={styles.post}>
                    <h1>{exp.place}</h1>
                    <p>{exp.tenure}</p>
                  </div>

                  <div                   
                  className={styles.role}>
                    <h1>{exp.role}</h1>
                    <p>{exp.detail}</p>
                  </div>

                </motion.div> 
              )
            })
          }
          <motion.div 
          variants={zoomIn(1,1)}
          className={styles.progressBar}>

            <div className={styles.line}></div>
            <div className={styles.circle} style={{background: "#286F6C"}}>
            
            </div>
            <div className={styles.circle} style={{background: "#F2704E"}}>
            &nbsp;
            </div>          
          </motion.div>
        </div>
      </div>

    </motion.section>
  )
}

export default Works
