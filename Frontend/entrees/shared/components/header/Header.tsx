import Link from "next/link";
import React, { memo } from "react";
import styles from "./Header.module.scss";

export type navbarItemProps = {
    title: string;
    link: string;
};

export const Header = memo(() => {
    const navbarItems: navbarItemProps[] = [
        { link: "/", title: "Home" },
        // { link: "/login", title: "Login" },
        // { link: "/invoices", title: "Invoices" },
    ];

    return (
        <header className={styles.container}>
            <ul className="flex flex-row px-4 gap-4 w-full h-20">
                {navbarItems.map((item) => (
                    <ul key={item.title}>
                        <Link href={item.link}>
                            <a className={styles.link}>{item.title}</a>
                        </Link>
                    </ul>
                ))}
            </ul>
        </header>
    );
});

Header.displayName = "Header";

export default Header;
