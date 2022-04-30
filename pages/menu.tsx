import type { NextPage } from "next";
import { PageContainer } from "../components/layout";

import styles from "../styles/Menu.module.scss";

const Menu: NextPage = () => {
    return <PageContainer meta={{
        title: "Menu | Macleans Pop Up Restaurant",
        description: "Menu"
    }}>
        <div className={styles.header} id="header" data-aos="fade-up" data-aos-duration="3000">
            <h1 className={styles.title}>Menu - Kiwiana Theme</h1>
            <p className={styles.description}>View our wide variety of delicious, enriching Kiwana-themed dishes produced by our very own culinary students.</p>
            <span className={styles["learn-more-button-container"]}>
                <div className={styles["learn-more-button"]}
                    onClick={(): void => window.scrollTo({ top: document.getElementById("menu") ? (document.getElementById("menu") as HTMLElement).offsetTop : 0, behavior: "smooth" })}>
                    View Menu
                </div>
            </span>
        </div>
    </PageContainer>;
};

export default Menu;