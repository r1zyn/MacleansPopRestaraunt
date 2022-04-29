import type { NextPage } from "next";
import { PageContainer } from "../components/layout";

import styles from "../styles/About.module.scss";

const About: NextPage = () => {
    return (
        <PageContainer meta={{
            title: "About | Macleans Pop Up Restaraunt",
            description: ""
        }}>
            <div className={styles.header} id="header" data-aos="fade-up" data-aos-duration="3000">
                <h1></h1>
                <p></p>
            </div>
        </PageContainer>
    );
};

export default About;