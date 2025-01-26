import { useState, useEffect } from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

import styles from "./navbar.module.scss"
import globalStyles from "../../pages/index.module.scss"

const Navbar = () => {

  const sections = ["home", "about", "work", "skills", "contact"]

  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section)
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
    


  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        {sections.map((item) => (
          <li className={`${globalStyles.app__flex} ${globalStyles.bold_text}`} key={`link-${item}`}>
            <div className={active === item ? styles.active_dot : ""}/>
            <a href={`#${item}`} className={active === item ? styles.active : ""} onClick={() => setActive(item)}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={styles.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => {
          setToggle(true)
        }}/>

        {toggle && (
          <motion.div
            whileInView={{x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)}/>
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar