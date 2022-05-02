import React, { memo } from "react";
import styles from "./layout.module.scss";
import Header from "../header/Header";

export type Theme = "light" | "dark";
export type LayoutProps = {
    theme: Theme;
    children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
export const Layout = memo<LayoutProps>(({ theme, children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    );
});

export default Layout;
