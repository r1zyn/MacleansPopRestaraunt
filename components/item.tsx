import type { GenericProps, Union } from "../lib/types";
import type { NextComponent } from "../lib/next";

import styles from "../styles/layout.module.scss";

type ItemProps = Union<GenericProps, {
    imageURL: string;
    title: string;
    description?: string;
    price: string;
}>

export const Item: NextComponent<ItemProps> = ({ className, style, imageURL, title, description, price }: ItemProps): JSX.Element => {
    return <div className={styles["item-container"] + " " + className} style={style}>
        <div className={styles["item-image"]} style={{
            backgroundImage: `url("${imageURL}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "8rem",
            width: "11rem"
        }} />

        <div className={styles["item-details"]}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p> - {price}</p>
        </div>
    </div>
}