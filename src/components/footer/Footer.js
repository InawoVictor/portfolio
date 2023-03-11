import styles from "./Footer.module.scss";
import {motion} from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { Link } from "react-scroll";
import {AiFillLinkedin}from "react-icons/ai"

const Footer = () => {
  return (
    <motion.footer
    variants={staggerChildren} 
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: .25}}
    className={`paddings ${styles.wrapper}`}
    >
      
        <div 
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${styles.container}`}>
            {/** Left */}
            <div className={styles.left}>
                <span className="primaryText">
                    Let's make something <br/> amazing together.
                </span>
                <span className="primaryText">
                  Start by <a href="https://formsubmit.co/el/xunuwa">
                    saying hi
                  </a>
                </span>
            </div>

            {/**Right */}
            <div className={styles.right}>
              <div className={styles.info}>
                <span className="secondaryText">Connect With Me</span>
                <p>Egbeda, Lagos State,Nigeria.</p>

                <div className={styles.menu}>
                  <li><a href="https://wa.link/o7xnep" 
                    target="_blank"
                    rel="noreferrer">
                      +234 81 000 875 08
                      <img src="https://i.ibb.co/7bsgSdW/whatsapp.png" 
                  alt="Whatsapp" 
                  width={20}
                  height={20}
                /> 
                  </a></li>
                  <li>
                    <a href="https://www.linkedin.com/in/victor-inawo-776275260/"
                    target="_blank"
                    rel="noreferrer"><AiFillLinkedin size={20} color="var(--primary)"/></a></li>
                  <li>
                    &nbsp;
                    &nbsp;
                  </li>
                  <li>
                    <Link to="hero" smooth={true} duration={300}>
                      Back to top &rarr;
                    </Link>
                  </li>
                </div>

              </div>
            </div>
        </div>

    </motion.footer>
  )
}

export default Footer
