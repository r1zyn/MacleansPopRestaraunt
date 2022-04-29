import type { AppProps } from "next/app";
import { NextRouter, useRouter } from "next/router";

import { useEffect } from "react";

import AOS from "aos";
import NProgress from "nprogress";

import "aos/dist/aos.css";
import "../lib/nprogress/nprogress.js";
import "../lib/nprogress/nprogress.css";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
    const router: NextRouter = useRouter();

    useEffect((): (() => void) => {
        if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        AOS.init();

        NProgress.configure({
            template: "<div class='bar' role='bar' style='height: 0.3rem; background: #1A1A1A;'></div>"
        });

        const handleStart: (_url: string) => NProgress.NProgress = (_url: string): NProgress.NProgress => NProgress.start();
        const handleStop: () => NProgress.NProgress = (): NProgress.NProgress => NProgress.done();

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return (): void => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
}

export default App;