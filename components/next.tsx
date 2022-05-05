import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import type { NextComponent } from "../lib/next";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

type MetaProps = {
    title: string;
    description: string;
};

const Meta: NextComponent<MetaProps> = ({ title, description }: MetaProps): JSX.Element => {
    return <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NODE_ENV === "production" ? "" : "http:/localhost:3000/"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/icons/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.NODE_ENV === "production" ? "" : "http:/localhost:3000/"} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/icons/logo.png" />

        <title>{title}</title>
        <link rel="icon" type="png" href="/icons/logo.png" />
        <link rel="shortcut icon" type="png" href="/icons/logo.png" />
        <link rel="apple-touch-icon" type="png" href="/icons/logo.png" />
    </Head>;
};

export {
    Head,
    Icon,
    Image,
    Link,
    Meta,
    Script
};

export type {
    MetaProps
};