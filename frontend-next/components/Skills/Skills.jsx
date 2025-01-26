import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "@/wrapper";
import { urlFor, client } from "@/lib/sanityClient";
import styles from "./skills.module.scss"
import globalStyles from "../../pages/index.module.scss"

const Skills = () => {

    const [experience, setExperience] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const experienceQuery = '*[_type == "experiences"] | order(year desc)';
        const skillsQuery = '*[_type == "skills"]';
  
        client.fetch(experienceQuery).then((experienceData) => {
            setExperience(experienceData);
        })

        client.fetch(skillsQuery).then((skillsData) => {
          setSkills(skillsData);
        })

      }, [])

    return (
        <>
            <h2 className={globalStyles.head_text}>Skills & Experience</h2>

            <div className={styles.app__skills_container}>
                <motion.div className={styles.app__skills_list}>
                    {skills?.map((skill) => (
                        <motion.div 
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className={`${styles.app__skills_item} ${globalStyles.app__flex}`}
                            key={skill.name}
                        >
                            <div className={globalStyles.app__flex} style={{backgroundColor: skill.bgColor}}>
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className={globalStyles.p_text}>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className={styles.app__skills_exp}>
                    {experience?.map((exp) => (
                        <motion.div 
                            className={styles.app__skills_exp_item}
                            key={exp.year}
                        >
                            <div className={styles.app__skills_exp_year}>
                                <p className={globalStyles.bold_text}>{exp.year}</p>
                            </div>
                            <motion.div className={styles.app__skills_exp_works}>
                                {exp.works.map((work) => (
                                    <div key={work.name}>
                                        <motion.div
                                            whileInView={{opacity: [0, 1]}}
                                            transition={{duration: 0.5}}
                                            className={styles.app__skills_exp_work}
                                            data-tip
                                            data-for={work.name}
                                            // key={work.name}
                                        >
                                            <h4 className={globalStyles.bold_text}>{work.name}</h4>
                                            <p className={globalStyles.p_text}>{work.company}</p>
                                        </motion.div>
                                        <div>{work.description}</div>
                                         <Tooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className={styles.skills_tooltip}
                                        >
                                        {work.description}
                                        </Tooltip> 
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};


export default AppWrap(
    MotionWrap(Skills, `${styles.app__skills}`),
    'skills',
    `${globalStyles.app__whitebg}`
);

