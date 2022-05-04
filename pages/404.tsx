import { Link, Meta } from "../components/next";
import type { NextPage } from "next";

const Error404: NextPage = () => {
    return <div style={{
        color: "#000",
        background: "#fff",
        fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans&quot\", Avenir, \"Helvetica Neue&quot\", \"Lucida Grande\", sans-serif",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Meta title="Error 404 | Page Not Found" description="Page not found" />

        <main>
            <style>{`
                body {
                    margin: 0 
                }
            `}</style>

            <h1 style={{
                display: "inline-block",
                borderRight: "1px solid rgba(0, 0, 0, .3)",
                margin: 0,
                marginRight: "20px",
                padding: "10px 23px 10px 0",
                fontSize: "24px",
                fontWeight: 500,
                verticalAlign: "top"
            }}>404</h1>
            <div style={{
                display: "inline-block",
                textAlign: "left",
                lineHeight: "49px",
                height: "49px",
                verticalAlign: "middle"
            }}>
                <h2 style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }}>This page could not be found
                </h2>
            </div>
        </main>

        <footer style={{
            position: "absolute",
            bottom: 30,
            textAlign: "center"
        }}>
            <Link href="/">
                <span style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    cursor: "pointer",
                    transform: "transition 500ms ease-in-out",
                    paddingBottom: "0.2rem"
                }} onMouseEnter={(): void => {
                    const returnToHome: HTMLElement = document.getElementById("return-to-home") as HTMLElement;
                    returnToHome.style.borderBottom = "1px solid #1A1A1A";
                }} onMouseLeave={(): void => {
                    const returnToHome: HTMLElement = document.getElementById("return-to-home") as HTMLElement;
                    returnToHome.style.borderBottom = "none";
                }} id="return-to-home">Return to home</span>
            </Link>
        </footer>
    </div>;
};

export default Error404;