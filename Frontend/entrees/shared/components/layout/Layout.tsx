import React, {memo, useEffect, useState} from "react";
import styles from "./Layout.module.scss";
import clsx from "clsx";
import Header from "../header/Header";
import {supabase} from "../../db/db.connector";
import Nav from "./aside/Nav";

export type Theme = "light" | "dark";
export type LayoutProps = {
    theme: Theme;
    children: React.ReactNode;
};


export const Layout = memo<LayoutProps>(({theme, children}) => {
    const [isContextMenu, toggleContextMenu] = useState<boolean>(false);
    const [listeners, setListeners] = useState(null);

    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session() as any)

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session as any)
        })
    }, [])

    //
    // useEffect(() => {
    //     document.addEventListener('contextmenu', event => {
    //         event.preventDefault()
    //         console.log(event)
    //         toggleContextMenu(true)
    //     });
    //
    //     document.addEventListener('mousedown', () => {
    //         toggleContextMenu(false)
    //     })
    // })
    return (
        <div className={clsx(styles.container, theme)}>
            {isContextMenu ? <div className="fixed w-32 h-60 z-10 left-1/2 top-1/4 bg-sky-300"> heyooo</div> : null}
            <Nav/>
            <main className={styles.main}>
                <Header/>
                <section className="h-full">{children}</section>
            </main>
        </div>
    );
});

Layout.displayName = "Layout";

export default Layout;
