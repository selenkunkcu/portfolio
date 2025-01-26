import { Navbar, Header, Footer, About, Work, Skills } from "@/components";

import styles from "./index.module.scss";

export default function Home() {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <section id="about">
                <About />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <Footer />
        </div>
    );
}
