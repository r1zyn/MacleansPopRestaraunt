import { Map } from "../components/Map";
import { Marker } from "../components/Marker";
import type { NextPage } from "next";
import { PageContainer } from "../components/layout";
import { Wrapper } from "@googlemaps/react-wrapper";

import styles from "../styles/Contact.module.scss";

const Contact: NextPage = () => {
    const location: { lat: number, lng: number; } = { lat: -36.882576793148345, lng: 174.91429516570236 };

    return <PageContainer meta={{
        title: "Contact | Macleans Pop Up Restaurant",
        description: "Contact Macleans Pop Up Restaurant"
    }}>
        <div className={styles.header} id="header" data-aos="fade-up" data-aos-duration="3000">
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="module" src="./lib/scripts/map.ts"></script>

            <div className={styles["header-info"]}>
                <h1 className={styles["header-info-title"]}>Contact Us</h1>
                <p className={styles["header-info-description"]}>Got any enquiries or want to make a reservation booking? Feel free to contact us via email or phone, or view more information on our website.</p>
            </div>

            <div className={styles["location"]}>
                <span>Location</span>
                <p>
                    Macleans College
                    <br />
                    Staffroom
                    <br />
                    2 Macleans Road
                    <br />
                    Bucklands Beach
                    <br />
                    Auckland 2012
                    <br />
                    New Zealand
                </p>
            </div>

            <div className={styles["other-info"]}>
                <p>
                    <span>Ph:</span> 64 9 535 2620
                    <br />
                    <span>Email:</span> office@macleans.school.nz
                    <br />
                    <br />
                    <span>Hours</span>
                    <p>Friday 6-9pm  (Last Friday of each term)</p>
                </p>
            </div>
        </div>

        <Wrapper apiKey={process.env.API_KEY}>
            <Map
                center={location}
                style={{ height: "100%" }}
            >
                <Marker position={location} />
            </Map>
        </Wrapper>
    </PageContainer>;
};

export default Contact;