import { useEffect } from "react";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
    useEffect(() => {
        const menu = document.getElementById("menu");
        Array.from(document.getElementsByClassName("menu_item"))
            .forEach((item, index) => {
                item.onmouseover = () => {
                    menu.dataset.activeIndex = index;
                }
            });
    }, [])

    return (
        <>
            <div id="menu" className={styles.menu}>
                <div id="menu-items" className={styles.menu_items}>
                    <a href="/" className={styles.menu_item}>Home</a>
                    <a href="/" className={styles.menu_item}>Shop</a>
                    <a href="/" className={styles.menu_item}>About</a>
                    <a href="/" className={styles.menu_item}>Contact</a>
                </div>
                <div id="menu-bg-image" className={styles.menu_bg_image}>
                </div>
            </div>
        </>
    )
}
