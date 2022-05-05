import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "./next";
import type { NextComponent } from "../lib/next";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/layout.module.scss";

export const ScrollButton: NextComponent = () => {
    const [visible, toggleVisbility]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const id: string = "_23rf4dqoE0PM";

    useEffect((): void => {
        const button: HTMLElement = document.getElementById(id) as HTMLElement;
        if (button && button.style.opacity === "0") button.style.display = "none";
        if (button && button.style.opacity === "1") button.style.display = "block";

        document.addEventListener("scroll", (_e: Event): void => {
            if (window.pageYOffset > 300) {
                toggleVisbility(true);
            } else {
                toggleVisbility(false);
            }
        });
    });

    return <div className={`${visible ? "fade-in" : "fade-out"} ${styles["scroll-top-button"]}`} style={{ zIndex: 1005 }} onClick={(): void => window.scrollTo({
        top: 0,
        behavior: "smooth"
    })}
        id={id}>
        <Icon icon={faArrowUp} className={styles["scroll-top-icon"]} />
    </div>;
};