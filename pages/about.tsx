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
                <h1 className={styles.title}>Meet the team bringing the experience to you.</h1>
                <p className={styles.description}>We&apos;ve got a dedicated team of hard working students at Macleans to ensure you experience the best dining experience.</p>
                <span className={styles["learn-more-button-container"]}>
                    <div className={styles["learn-more-button"]}
                        onClick={(): void => window.scrollTo({ top: document.getElementById("section-one") ? (document.getElementById("section-one") as HTMLElement).offsetTop : 0, behavior: "smooth" })}>
                        Learn More
                    </div>
                </span>
            </div>

            <div className={styles["section"]} id="section-one" data-aos="fade-up" data-aos-duration="2000">
                <hr className={styles["styled-bar"]} />
                <h1 className={styles["section-title"]}>Our Story</h1>
                <p className={styles["section-description"]}>Once a term, they turn the Macleans College staff room into a pop-up restaurant, providing you with a warm and inviting atmosphere, delicious food and stunning views of the Waitemata Harbour. Not only can you enjoy a memorable evening with your family and friends, but you will also be participating in the training of our students.</p>
            </div>

            <div className={styles["section"]} id="section-two" data-aos="fade-up" data-aos-duration="2000">
                <hr className={styles["styled-bar"]} />
                <h1 className={styles["section-title"]}>What We Do</h1>
                <p className={styles["section-description"]}>The students will prepare and cook a three-course meal from a selected menu, designed by them, around a theme they choose themselves. Each course features several options so that each guest can have their own experience! The theme of the menu will change for every pop up. Students spend a day preparing their dishes and in the evening split into a kitchen team and a front of house team.</p>
            </div>

            <div className={styles["section"]} id="section-three" data-aos="fade-up" data-aos-duration="2000">
                <hr className={styles["styled-bar"]} />
                <h1 className={styles["section-title"]}>Meet The Team</h1>
                <br />
                <div className={styles["team-section"]}>
                    <div className={styles["team-card"]}>
                        <div className={styles["team-image"]} />
                        <div className={styles["team-info"]}>
                            <h1 className={styles["team-name"]}>John Doe</h1>
                            <p className={styles["team-position"]}>Head Chef</p>
                        </div>
                    </div>

                    <div className={styles["team-card"]}>
                        <div className={styles["team-image"]} />
                        <div className={styles["team-info"]}>
                            <h1 className={styles["team-name"]}>Jane Doe</h1>
                            <p className={styles["team-position"]}>Chef</p>
                        </div>
                    </div>

                    <div className={styles["team-card"]}>
                        <div className={styles["team-image"]} />
                        <div className={styles["team-info"]}>
                            <h1 className={styles["team-name"]}>Richard Doe</h1>
                            <p className={styles["team-position"]}>Waiter</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default About;