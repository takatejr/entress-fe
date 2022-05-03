import Link from "next/link";
import React, { memo } from "react";
import styles from "./header.module.scss";

export type navbarItemProps = {
    title: string;
    link: string;
};

export const Header = memo(() => {
    const navbarItems: navbarItemProps[] = [
        { link: "/", title: "Home" },
        // { link: "/login", title: "Login" },
        { link: "/offers", title: "Offers" },
    ];

    return (
        <header className={styles.container}>
            <ul className="w-fit flex flex-row px-4 gap-4 rounded-full bg-yellow-500">
                {navbarItems.map((item) => (
                    <li key={item.title}>
                        <Link href={item.link}>
                            <a className={styles.link}>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
});

export default Header;
