import styles from "./Header.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import { MdOutlineLightMode } from "react-icons/md"
import {motion} from 'framer-motion';
import { headerVariants} from "../../utils/motion"
import { useState } from "react";
import useHeaderShadow from "../../hooks/useHeaderShadow";

import {Link} from "react-scroll";

const Header = ({mode, toggleMode}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow()

  const handleMenu = () => {
    setMenuOpen(!menuOpen) 
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView={"show"}
      variants={headerVariants}
      viewport={{once:false, amount: 0.25}}
      className={`paddings ${styles.wrapper}`}
      style={{borderBottom: headerShadow}}
    >
      <div className={ `flexCenter innerWidth ${styles.container}` }>
        <div className={styles.name}
        onClick={handleMenu}>
          <Link to='/'>
            IVictor
          </Link>
        </div>

        <div 
        className={menuOpen ? `${styles["close-nav"]} ${styles.show2}` : styles["close-nav"]}        
        onClick={handleMenu}></div>

        <ul 
          // style={getMenuStyles(menuOpen)}
          className={menuOpen ? `${styles.show} flexCenter ${styles.menu}`:
          `flexCenter ${styles.menu}` } 
          onClick={handleMenu}
        >
            <li ><Link onClick={handleMenu} to="work" smooth={true} duration={500}>Services</Link></li>
            <li ><Link onClick={handleMenu} to="expertise" smooth={true} duration={500}>Experience</Link></li>
            <li ><Link onClick={handleMenu} to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
            <li ><Link onClick={handleMenu} to="skills" smooth={true} duration={500}>Tools</Link></li>
            <li className={`flexCenter ${styles.phone}`}>
                
                <p>+234 810 008 7508</p>
                <a href="https://wa.link/o7xnep" 
                target="_blank"
                rel="noreferrer">
                <img src="https://i.ibb.co/7bsgSdW/whatsapp.png" 
                  alt="Whatsapp" 
                  width={30}
                  height={30}
                /> 
                </a>  
                
                
            </li>
            <li  onClick={toggleMode} >
              <MdOutlineLightMode size={"30px"}/>
            </li>
        </ul> 
        <div className={styles.menuIcon}
          onClick={handleMenu}
        >
          <BiMenuAltRight size={30}/>
        </div>
          
      </div>
    </motion.div>
  )
}

export default Header;
