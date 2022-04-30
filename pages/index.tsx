import { Image, Link } from "../components/next";
import type { NextPage } from "next";
import { PageContainer } from "../components/layout";

import { useEffect } from "react";

import slideImageOne from "../public/images/1024px-Met_Scallops_(6766466185).jpg";
import slideImageTwo from "../public/images/beef-2509104_1920.jpg";
import slideImageThree from "../public/images/Hokey_pokey_ice_cream.jpg";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    useEffect((): void => {
        let slideIndex: number = 0;
        showSlides();

        function showSlides(): void {
            let i: number;
            const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
            const dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("slideshow-dot") as HTMLCollectionOf<HTMLElement>;

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }   

            slideIndex++;

            if (slideIndex > slides.length) slideIndex = 1;

            for (i = 0; i < dots.length; i++) {
                dots[i].style.backgroundColor = "#bbb";
            }

            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].style.backgroundColor = "#717171";
            setTimeout(showSlides, 5000);
        }
    });

    return <PageContainer meta={{
        title: "Macleans Pop Up Restaraunt",
        description: "Home"
    }}>
        <div className={styles.header} id="header" data-aos="fade-up" data-aos-duration="3000">
            <h1 className={styles.title}>Redefining outdoor dining.</h1>
            <p className={styles.description}>Immerse yourselves in the inviting atmosphere delicious food and stunning views of the Waitemata Harbour, brought to you by the Macleans College hospitality students.</p>
            <span className={styles["learn-more-button-container"]}>
                <div className={styles["learn-more-button"]}
                    onClick={(): void => window.scrollTo({ top: document.getElementById("section-one") ? (document.getElementById("section-one") as HTMLElement).offsetTop : 0, behavior: "smooth" })}>
                    Learn More
                </div>
            </span>
        </div>

        <div className={styles["section-one"]} id="section-one">
            <div className={styles["section-one-image-mobile"]} />

            <div className={styles["section-one-content"]} data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <h1 className={styles["section-one-title"]}>Experience dining with amazing views.</h1>
                <p className={styles["section-one-description"]}>Experience stunning views of the Auckland skyline and Waitemata Harbour to create an unforgettable dining experience for you.</p>
                <Link href="/book">
                    <span className={styles["section-button-container"]}>
                        <div className={styles["section-button"]}>
                            Book Now
                        </div>
                    </span>
                </Link>
            </div>

            <div className={styles["section-one-image"]} />
        </div>

        <div className={styles["section-two"]} id="section-two">
            <div className={styles["section-two-image"]} />

            <div className={styles["section-two-content"]} data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <h1 className={styles["section-two-title"]}>Top quality food anyone will enjoy.</h1>
                <p className={styles["section-two-description"]}>We ensure that we set high standards for high quality dishes, desserts and drinks for our customers.</p>
                <Link href="/menu">
                    <span className={styles["section-button-container"]}>
                        <div className={styles["section-button"]}>
                            View Menu
                        </div>
                    </span>
                </Link>
            </div>
        </div>

        <div className={styles["slideshow-container"]}>
            <div className={"slide" + " " + styles["slide"]} style={{ display: "none" }}>
                <Image className={styles["slide-image"]} src={slideImageOne} alt="" />
                <div className={styles["slide-content"]}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", columnGap: "0.5rem" }}>
                        <div style={{ height: "0.1rem", backgroundColor: "#1A1A1A", width: "1.7rem" }} />
                        Entree
                    </div>
                    <h1>Garlic lemon scallops</h1>
                    <p>Enjoy the exquisite seadfood delicacy of pan seared scallops served with garlic and lemon butter sauce.</p>
                    <br />
                    <p>$12</p>
                    <Link href="/menu#entrees">
                        <span className={styles["section-button-container"]}>
                            <div className={styles["section-button"]}>
                                View entrees
                            </div>
                        </span>
                    </Link>
                </div>
            </div>

            <div className={"slide" + " " + styles["slide"]} style={{ display: "none" }}>
                <Image className={styles["slide-image"]} src={slideImageTwo} alt="" />
                <div className={styles["slide-content"]}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", columnGap: "0.5rem" }}>
                        <div style={{ height: "0.1rem", backgroundColor: "#1A1A1A", width: "1.7rem" }} />
                        Main
                    </div>
                    <h1>Kiwi lamb cutlets</h1>
                    <p>A delicious crunch to these cutlets, using oregano and paprika. Drizzled with a tart lemon vinaigrette and served with a side of baby potatoes and leafy greens.</p>
                    <br />
                    <p>$16</p>
                    <Link href="/menu#main">
                        <span className={styles["section-button-container"]}>
                            <div className={styles["section-button"]}>
                                View mains
                            </div>
                        </span>
                    </Link>
                </div>
            </div>

            <div className={"slide" + " " + styles["slide"]} style={{ display: "none" }}>
                <Image className={styles["slide-image"]} src={slideImageThree} alt="" />
                <div className={styles["slide-content"]}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", columnGap: "0.5rem" }}>
                        <div style={{ height: "0.1rem", backgroundColor: "#1A1A1A", width: "1.7rem" }} />
                        Dessert
                    </div>
                    <h1>Hokey pokey icecream</h1>
                    <p>Cool off with our very own hokey pokey ice cream with hokey pokey toffee and hot toffee sauce.</p>
                    <br />
                    <p>$7</p>
                    <Link href="/menu#desserts">
                        <span className={styles["section-button-container"]}>
                            <div className={styles["section-button"]}>
                                View desserts
                            </div>
                        </span>
                    </Link>
                </div>
            </div>

            <br />

            <div style={{ textAlign: "center" }}>
                <span className="slideshow-dot" style={{
                    height: "15px",
                    width: "15px",
                    margin: "0 2px",
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                    display: "inline-block",
                    transition: "background-color 0.6s ease"
                }}></span>
                <span className="slideshow-dot" style={{
                    height: "15px",
                    width: "15px",
                    margin: "0 2px",
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                    display: "inline-block",
                    transition: "background-color 0.6s ease"
                }}></span>
                <span className="slideshow-dot" style={{
                    height: "15px",
                    width: "15px",
                    margin: "0 2px",
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                    display: "inline-block",
                    transition: "background-color 0.6s ease"
                }}></span>
            </div>
        </div>
    </PageContainer>;
};

export default Home;