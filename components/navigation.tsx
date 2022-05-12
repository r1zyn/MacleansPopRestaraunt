import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import type { NextComponent } from "../lib/next";
import { Link } from "./next";

import styles from "../styles/layout.module.scss";

export const Navigation: NextComponent = (): JSX.Element => {
    const [pageTop, setPageTop]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true) as [boolean, Dispatch<SetStateAction<boolean>>];
    const router: NextRouter = useRouter();

    useEffect((): void => {
        document.body.onscroll = (): void => {
            if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                setPageTop(false);
            } else {
                setPageTop(true);
            }
        };
    }, []);

    return (
        <section className={pageTop ? styles.nav : styles["nav-fixed"]}>
            <div className={styles.container}>
                <Link href="/" passHref>
                    <div className={styles["title-container"]}>
                        <div className={styles.logo} />
                        <a className={styles.title}>macleans.</a>
                    </div>
                </Link>

                <nav className={styles.links}>
                    <Link href="/" passHref>
                        <div className={router.pathname === "/" ? styles["link-active"] : styles["link"]}
                            onMouseOver={(): void => {
                                if (router.pathname !== "/") {
                                    const bar: HTMLElement = document.getElementById("link-bar-one") as HTMLElement;
                                    if (bar) bar.style.width = "100%";
                                }
                            }}

                            onMouseLeave={(): void => {
                                if (router.pathname !== "/") {
                                    const bar: HTMLElement = document.getElementById("link-bar-one") as HTMLElement;
                                    if (bar) bar.style.width = "0%";
                                }
                            }}>
                            <span className={styles["link-title"]}>Home</span>
                            <span className={styles["link-bar-container"]}>
                                <span className={router.pathname === "/" ? styles["link-bar-active"] : styles["link-bar"]} id="link-bar-one" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/about" passHref>
                        <div className={router.pathname === "/about" ? styles["link-active"] : styles["link"]}
                            onMouseOver={(): void => {
                                if (router.pathname !== "/about") {
                                    const bar: HTMLElement = document.getElementById("link-bar-two") as HTMLElement;
                                    if (bar) bar.style.width = "100%";
                                }
                            }}

                            onMouseLeave={(): void => {
                                if (router.pathname !== "/about") {
                                    const bar: HTMLElement = document.getElementById("link-bar-two") as HTMLElement;
                                    if (bar) bar.style.width = "0%";
                                }
                            }}>
                            <span className={styles["link-title"]}>About</span>
                            <span className={styles["link-bar-container"]}>
                                <span className={router.pathname === "/about" ? styles["link-bar-active"] : styles["link-bar"]} id="link-bar-two" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/menu" passHref>
                        <div className={router.pathname === "/menu" ? styles["link-active"] : styles["link"]}
                            onMouseOver={(): void => {
                                if (router.pathname !== "/menu") {
                                    const bar: HTMLElement = document.getElementById("link-bar-three") as HTMLElement;
                                    if (bar) bar.style.width = "100%";
                                }
                            }}

                            onMouseLeave={(): void => {
                                if (router.pathname !== "/menu") {
                                    const bar: HTMLElement = document.getElementById("link-bar-three") as HTMLElement;
                                    if (bar) bar.style.width = "0%";
                                }
                            }}>
                            <span className={styles["link-title"]}>Menu</span>
                            <span className={styles["link-bar-container"]}>
                                <span className={router.pathname === "/menu" ? styles["link-bar-active"] : styles["link-bar"]} id="link-bar-three" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/contact" passHref>
                        <div className={router.pathname === "/contact" ? styles["link-active"] : styles["link"]}
                            onMouseOver={(): void => {
                                if (router.pathname !== "/contact") {
                                    const bar: HTMLElement = document.getElementById("link-bar-four") as HTMLElement;
                                    if (bar) bar.style.width = "100%";
                                }
                            }}

                            onMouseLeave={(): void => {
                                if (router.pathname !== "/contact") {
                                    const bar: HTMLElement = document.getElementById("link-bar-four") as HTMLElement;
                                    if (bar) bar.style.width = "0%";
                                }
                            }}>
                            <span className={styles["link-title"]}>Contact</span>
                            <span className={styles["link-bar-container"]}>
                                <span className={router.pathname === "/contact" ? styles["link-bar-active"] : styles["link-bar"]} id="link-bar-four" />
                            </span>
                        </div>
                    </Link>
                </nav>

                <div className={styles["button-container"]}>
                    <span className={styles["book-button-container"]}>
                        <Link href="/book">
                            <div className={styles["book-button"]}>
                                Book
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    );
};