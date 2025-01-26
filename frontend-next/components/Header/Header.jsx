import { motion } from "framer-motion"

import { AppWrap } from "@/wrapper"
import images from "@/constants/images"
import styles from "./header.module.scss"
import globalStyles from "../../pages/index.module.scss"


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className={`${styles.app__header} ${globalStyles.app__flex}`}>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className={styles.app__header_info}
      >
        <div className={styles.app__header_badge}>
          <div className={`${styles.badge_cmp} ${globalStyles.app__flex}`}>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className={globalStyles.p_text}>Hello, I am</p>
              <h1 className={globalStyles.head_text}>Selen</h1>
            </div>
          </div>

          <div className={`${styles.tag_cmp} ${globalStyles.app__flex}`}>
            <p className={globalStyles.p_text}>Software Engineer</p>
            <p className={globalStyles.p_text}>Frontend Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className={styles.app__header_img}
      >
        <img src="/assets/profile.png" alt="profile_bg" />
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: "easeInOut"}}
          src="/assets/circle.svg"
          alt="profile_circle"
          className={styles.overlay_circle}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.app__header_circles}
      >
        {images.map((circle, index) => (
          <div className={`${styles.circle_cmp} ${globalStyles.app__flex}`} key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home', `${globalStyles.home}`);