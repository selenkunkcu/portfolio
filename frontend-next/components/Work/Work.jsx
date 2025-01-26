import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "@/wrapper";
import { urlFor, client } from "@/lib/sanityClient";
import styles from "./work.module.scss";
import globalStyles from "../../pages/index.module.scss"

const Work = () => {

    const [activeFilter, setActiveFilter] = useState("All")
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

    const [works, setWorks] = useState([])
    const [filterWork, setFilterWork] = useState([])

    useEffect(() => {
        const query = '*[_type == "works"] | order(year asc)';

      client.fetch(query).then((data) => {
        setWorks(data);
        setFilterWork(data)
      })
    }, [])
    

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard({y: 100, opacity: 0});
        
        setTimeout(() => {
            setAnimateCard([{y: 0, opacity: 1}])

            if(item === "All"){
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)))
            }
        }, 500)
    }


    return (
    <>
        <h2 className={globalStyles.head_text}>My Creative <span>Portfolio </span></h2>   

        <div className={styles.app__work_filter}>
            {["All" , "Web App", "UI/UX", "Full Stack" ].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`${styles.app__work_filter_item} ${globalStyles.app__flex} ${globalStyles.p_text} ${activeFilter === item ? styles.item_active : "" }`}
                >
                    {item}
                </div>
            ))}    
        </div>

        <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className={styles.app__work_portfolio}
        >
            {filterWork.map((work, index) => (
                <div className={`${styles.app__work_item} ${globalStyles.app__flex}`} key={index}>
                    <div className={`${styles.app__work_img} ${globalStyles.app__flex}`}>
                        <img src={urlFor(work.imgUrl)} alt={work.name} />

                        <motion.div
                            whileHover={{opacity: 1}}
                            transition={{ duration: 0.25, ease: "easeInOut"}}
                            className={`${styles.app__work_hover} ${globalStyles.app__flex}`}
                        >
                            <a href={work.projectLink} target="_blank" rel="noreferrer">
                                <motion.div
                                    whileInView={{scale: [0, 1]}}
                                    whileHover={{scale: [1, 0.9]}}
                                    transition={{ duration: 0.25 }}
                                    className={globalStyles.app__flex}
                                >
                                    <AiFillEye/>
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>

                    <div className={`${styles.app__work_content} ${globalStyles.app__flex}`}>
                        <h4 className={globalStyles.bold_text}>{work.title}</h4>
                        <p className={globalStyles.p_text} style={{ marginTop: 10 }}>{work.description}</p>

                        <div className={`${styles.app__work_tag} ${globalStyles.app__flex}`}>
                            <p className={globalStyles.p_text}>{work.tags[0]}</p>
                        </div>
                    </div>

                </div>
            ))}
        </motion.div>
    </>
    );
};

export default AppWrap(
    MotionWrap(Work, `${styles.app__works}`),
    'work',
    `${globalStyles.app__primarybg}`
);