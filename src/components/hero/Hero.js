import styles from "./Hero.module.scss";
import certificate from "../../assets/certificate.png";
import person from "../../assets/person.png";
import {motion} from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";


const Hero = () => {

  let today = new Date();
  let currentYear = today.getFullYear();
  let experience = currentYear - 2021;

  return ( 
    <section className={` paddings ${styles.wrapper}`}
      name="hero"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: .25}}
        className={` innerWidth ${styles.container}`}
        
      >

        {/* Upper Elements */ }
        <div className={styles.upperElement}>
            <motion.span
              variants={fadeIn("right","tween", 0.2, 1)}
              className="primaryText">
              Hey There, <br/> I'm Inawo Victor.
            </motion.span>

            <motion.span 
            variants={fadeIn("left","tween", 0.2, 1)}
            className="secondaryText"            
            >
                I am a web developer,
                <br/> And I love what I do.
            </motion.span>
        </div>

        {/* Person Image */}
        <motion.div 
        variants={fadeIn("up","tween", 0.2, 1)}
        className={styles.person}
        >
          <motion.img 
          variants={slideIn("up","tween", 0.2, 1)}
          src={person} alt="person" />
        </motion.div>

        {/* Email */}
        <a href="https://formsubmit.co/el/xunuwa"
          target="_blank"
          rel="noreferrer"
          className={styles.email}
        >
          inawovictor004@gmail.com
        </a>


        {/* Lower Elements */ }
        <div className={styles.lowerElement}>
            <motion.div className={styles.experience}
            variants={fadeIn("right","tween", 0.2, 1)}
            >
                <div className="primaryText">{experience}</div>
                <div className="secondaryText">
                    <div>Years</div>
                    <div> Experience.</div>
                </div>
            </motion.div>
            <motion.div 
              variants={fadeIn("left","tween", 0.2, 1)}
            className={styles.certificate}>
                <img src={certificate} alt="certificate" />
                <span>CERTIFIED </span><span>FRONTEND DEVELOPER</span>
            </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
