import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "@/wrapper";
import { urlFor, client } from "@/lib/sanityClient";
import styles from "./about.module.scss";
import globalStyles from "../../pages/index.module.scss"

// const abouts = [
//     { title: "Frontend Development", description: "I am a good web developer", imgUrl: "/assets/about01.png" },
//     { title: "Web Design", description: "I am a good web developer", imgUrl: "/assets/about02.png" },
//     { title: "UI/UX", description: "I am a good web developer", imgUrl: "/assets/about03.png" },
//     { title: "Full Stack", description: "I am a good web developer", imgUrl: "/assets/about04.png" },// MERN stack ??
// ]

const About = () => {

    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => setAbouts(data))
    }, [])


    return <>
        <h2 className={globalStyles.head_text}>I Know That <span>Good Development</span><br />means <span>Good Business</span>
        </h2>

        <div className={styles.app__profiles}>
            {abouts.map((about, index) => (
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}    
                    className={styles.app__profile_item}
                    key={about.title + index}
                >
                    <img src={urlFor(about.imageUrl)} alt={about.title} />
                    <h2 className={globalStyles.bold_text} style={{ marginTop: 20 }}>{about.title}</h2>
                    <p className={globalStyles.p_text} style={{ marginTop: 10 }}>{about.description}</p>
                </motion.div>
            ))}

        </div>
    </>;
};

export default AppWrap(
    MotionWrap(About, `${styles.app__about}`),
    'about',
    `${globalStyles.app__whitebg}`
);

