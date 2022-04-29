import { Footer } from "./footer";
import { Meta, MetaProps } from "./next";
import { Navigation } from "./navigation";
import type { NextComponent } from "../lib/next";
import type { PropsWithChildren } from "react";

import styles from "../styles/layout.module.scss";

type PageContainerProps = PropsWithChildren<{
    meta: MetaProps;
}>;

export const PageContainer: NextComponent<PageContainerProps> = ({ children, meta }): JSX.Element => {
    return <div className={styles.layout}>
        <Meta title={meta.title} description={meta.description} />
        <Navigation />

        <main className={styles.main}>
            <div className={styles.content}>
                {children}
                <Footer />
            </div>
        </main>


    </div>;
};

type WhitespaceProps = {
    height?: number;
    style?: Omit<React.CSSProperties, "height" | "width" | "background">;
    className?: string;
    id?: string;
}

export const Whitespace: NextComponent<WhitespaceProps> = ({ height, style, className, id }: WhitespaceProps): JSX.Element => {
    return <div style={{
        height: height ? height + "rem" : "0",
        width: "max-content",
        background: "transparent",
        ...style
    }} id={id} className={className} />
}