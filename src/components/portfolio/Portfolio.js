import styles from "./Portfolio.module.scss";
import {motion} from "framer-motion";  
import showCase1 from "../../assets/showCase1.png";
import showCase2 from "../../assets/showCase2.png";
import showCase3 from "../../assets/showCase3.png";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
    name="portfolio"
      variants={staggerChildren}
      initial="hidden" 
      whileInView={"show"}
      viewport={{once: false, amount: .25}} 
      className={`paddings ${styles.wrapper}`}
    >
      <div className={`innerWidth flexCenter ${styles.container}`}
      >

        {/** Heading */}
        <div className={`flexVenter ${styles.heading}`}>

            <div>
                <span className="primaryText">
                    My Latest Works
                </span>
                <p style={{marginTop: "10px"}}>
                    Perfect solution for digital experience
                </p>
            </div>

            <span className="secondaryText">
                Explore More Works
            </span>

        </div>

        {/** Images */}
        <div className={`flexCenter ${styles.showCase}`}>
            <motion.img 
            variants={fadeIn("up", "tween", .5, .6)}
            src={showCase1} alt="Project" />
            <motion.img 
            variants={fadeIn("up", "tween", .7, .6)}
            src={showCase2} alt="Project" />
            <motion.img 
            variants={fadeIn("up", "tween", .9, .6)}
            src={showCase3} alt="Project" />
        </div>

      </div>
    </motion.section>
  )
}

export default Portfolio;
