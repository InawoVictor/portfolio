import styles from "./Skills.module.scss";
import { staggerChildren } from "../../utils/motion";
import { sliderSettings, comments } from "../../utils/data";
import {motion} from "framer-motion";  
import Slider from "react-slick";

const Skills = () => {
  return (
    <motion.section 
    name="skills"
    variants={staggerChildren}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: .25}}  
      className={`paddings ${styles.wrapper}`}
    >
        
      <div className={`yPaddings innerWidth ${styles.container}`}
      >
          
        {/** Heading */}
        <div className={`flexCenter ${styles.heading}`}>
          <span className="primaryText">SKILLS</span>
          
        </div>

        {/** Carousel */}
        <div className={`yPaddings ${styles.comments}`}>
          <Slider {...sliderSettings} className={styles.slider}>
            {
              comments.map((comment, index) => {
                const {img, name} = comment;

                return (
                  <div className={`flexCenter ${styles.comment}`} key={index}> 
                    <img src={img} alt={name} />

                    <div className={styles.bio}> 
                      <span>{comment.name}</span>
                    </div> 
                  </div>
                )
              })
            }
          </Slider> 
        </div>

      </div>
 
    </motion.section>
  )
}

export default Skills
