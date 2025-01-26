import { SiLinkedin, SiGithub } from "react-icons/si";

import { SOCIAL_LINKS } from "../constants/constant";
import globalStyles from "../pages/index.module.scss"

const SocialMedia = () => {
  return (
    <div className={globalStyles.app__social}>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
              <SiLinkedin/>
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
            <SiGithub/>
          </a>


    </div>
  )
}

export default SocialMedia