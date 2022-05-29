import type { NextPage } from "next";
import { useEffect } from "react";
import { PageContainer } from "../components/layout";

import styles from "../styles/Book.module.scss";

const Book: NextPage = () => {
    useEffect((): void => {
        let currentDateTime: Date = new Date();
        let year: string = currentDateTime.getFullYear().toString();
        let month: string = (currentDateTime.getMonth() + 1).toString();
        let date: string = (currentDateTime.getDate() + 1).toString();

        if (parseInt(date) < 10) {
            date = "0" + date;
        }
        if (parseInt(month) < 10) {
            month = "0" + month;
        }

        const dateTomorrow: string = year + "-" + month + "-" + date;
        const checkinElem: HTMLInputElement = document.querySelector("#checkin-date") as HTMLInputElement;

        checkinElem.setAttribute("min", dateTomorrow);
    });

    return <PageContainer meta={{
        title: "Book | Macleans Pop Up Restaurant",
        description: ""
    }}>
        <div className={styles.header} id="header" data-aos="fade-up" data-aos-duration="3000">
            <h1 className={styles.title}>Bookings</h1>
            <p className={styles.description}>Book reservations for our restaurant. For parties of six or more, we recommend making reservations at least two weeks in advance. No walk-ins. Please advise any specific dietary requirements.</p>
            <span className={styles["learn-more-button-container"]}>
                <div className={styles["learn-more-button"]}
                    onClick={(): void => window.scrollTo({ top: document.getElementById("form") ? (document.getElementById("form") as HTMLElement).offsetTop : 0, behavior: "smooth" })}>
                    Book Now
                </div>
            </span>
        </div>

        <form className={styles.form} onSubmit={(): void => window.alert("Successfully booked reservation.")} method="post" id="form">
            <div className="elem-group">
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input className={styles.input} type="text" id="name" name="visitor_name" placeholder="John Doe" pattern="[A-Z\sa-z]{3,20}" required />
            </div>
            <div className="elem-group">
                <label className={styles.label} htmlFor="email">Your E-mail</label>
                <input className={styles.input} type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required />
            </div>
            <div className="elem-group">
                <label className={styles.label} htmlFor="phone">Your Phone</label>
                <input className={styles.input} type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" required />
            </div>
            <hr />
            <div className="elem-group inlined">
                <label className={styles.label} htmlFor="adult">Adults</label>
                <input className={styles.input} type="number" id="adult" name="total_adults" placeholder="2" min={1} required />
            </div>
            <div className="elem-group inlined">
                <label className={styles.label} htmlFor="child">Children</label>
                <input className={styles.input} type="number" id="child" name="total_children" placeholder="2" min={0} required />
            </div>
            <div className="elem-group inlined">
                <label className={styles.label} htmlFor="checkin-date">Reservation Date</label>
                <input className={styles.input} type="date" id="checkin-date" name="checkin" required />
            </div>
            <hr className={styles.hr} />
            <div className="elem-group">
                <label className={styles.label} htmlFor="message">Anything Else?</label>
                <textarea className={styles.textarea} id="message" name="visitor_message" placeholder="Tell us anything else that might be important." defaultValue={""} />
            </div>
            <button className={styles.button} type="submit">Book Reservation</button>
        </form>
    </PageContainer>;
};

export default Book;