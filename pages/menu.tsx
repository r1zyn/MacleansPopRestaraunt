import type { NextPage } from "next";
import { useEffect } from "react";
import { Item } from "../components/item";
import { PageContainer } from "../components/layout";

import dishes from "../lib/data/menu.json";
import styles from "../styles/Menu.module.scss";

const Menu: NextPage = () => {
    useEffect(() => {
        document.querySelectorAll('*').forEach((el) => {
            if ((el as HTMLElement).offsetWidth > window.outerWidth) {
                console.log('Overflowing element: ', el);
            }
        });
    });

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

        <div className={styles.menu} id="menu">
            <div className={styles["course-dish-container"]} data-aos="fade-up" data-aos-duration="2000">
                <h1>Entrees</h1>
                <div className={styles["dishes"]}>
                    {dishes.entree.map((dish): JSX.Element => <Item key={dish.name} description={dish.description} title={dish.name} imageURL={dish.imageURL} price={dish.price} />)}
                </div>
            </div>

            <div className={styles["course-dish-container"]} data-aos="fade-up" data-aos-duration="2000">
                <h1>Mains</h1>
                <div className={styles["dishes"]}>
                    {dishes.main.map((dish): JSX.Element => <Item key={dish.name} description={dish.description} title={dish.name} imageURL={dish.imageURL} price={dish.price} />)}
                </div>
            </div>

            <div className={styles["course-dish-container"]} data-aos="fade-up" data-aos-duration="2000">
                <h1>Desserts</h1>
                <div className={styles["dishes"]}>
                    {dishes.dessert.map((dish): JSX.Element => <Item key={dish.name} description={dish.description} title={dish.name} imageURL={dish.imageURL} price={dish.price} />)}
                </div>
            </div>
        </div>
    </PageContainer>;
};

export default Menu;