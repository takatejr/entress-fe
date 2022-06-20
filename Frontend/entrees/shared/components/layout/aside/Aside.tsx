import React, {memo, SetStateAction, useEffect, useState} from "react";
import styles from "./Aside.module.scss";
import Link from "next/link";
import clsx from "clsx";
import {useRouter} from 'next/router'

export type AsideProps = {};

const navigationTabs = [
    {
        title: "Home",
        icon: "home",
        link: "/home",
        children: [
            {
                title: "Home1",
                link: "/",
            },
            {
                title: "Home2",
                link: "/",
            },
            {
                title: "Home3",
                link: "/",
            },
        ]
    },
    {
        title: "Login",
        link: "/login",
        icon: "login",
        children: [
            {
                title: "login1",
                link: "/login",
            },
            {
                title: "login2",
                link: "/login",
            },
        ]
    }
]

export const Aside = memo<AsideProps>(() => {
    const [activeTab, setActiveTab] = useState<SetStateAction<number>>(0);
    const router = useRouter();

    useEffect(() => {
        handleChangeUrl();
    }, [router.asPath])

    const handleChangeUrl = (): void => {
        navigationTabs.forEach(({link}, index) => {
            if (router.asPath.toLowerCase().includes(link.toLowerCase())) {
                setActiveTab(index);
            }
        })
    }

    const handleTabChange = (index: number): void => {
        setActiveTab(index);
    }

    return (
        <aside className={styles.aside}>
            <figure className="pt-10 pl-10">obrazek</figure>
            <ul className="pt-52">
                {navigationTabs.map(({title, link, icon, children}, i) => (
                    <li key={title} className="w-full flex flex-col"
                        onClick={() => handleTabChange(i)}>
                                <span
                                    className={clsx(i === activeTab ? 'bg-red-400' : '', 'cursor-pointer', 'text-2xl', 'pl-10',)}>
                                    {title}
                                </span>
                        <ul>
                            {i === activeTab && children.map(({title, link}) => (
                                <li key={title} className="pl-14 pt-4">
                                    <Link href={link}>
                                        <a>{title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
                }
            </ul>
        </aside>
    );
});

Aside.displayName = "Aside";

export default Aside;
