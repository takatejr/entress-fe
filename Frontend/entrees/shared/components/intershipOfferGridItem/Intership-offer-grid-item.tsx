import React, {memo} from "react";
import styles from "./Intership-offer-grid-item.module.scss";

export interface IntershipOffersInterface {
    industry: string,
    title: string,
    country: string,
    createdAt: string,
    updatedAt: string,
    createdBy?: string,
    updatedBy?: string,
    companyName?: string,
    // tags?: string[],
    city?: string,
    address?: string,
    lat?: number,
    long?: number,
    shortDesc?: string,
    longDesc?: string,
    salary?: string,
    url?: string,
    allowedFrom?: number,
    allowedTo?: number,
    allowedAddDesc?: string
    linkedin?: string,
    facebook?: string,
    instagram?: string,
    mail?: string,
    phone?: string,
    website?: string,
    logo?: string,
    cover?: string,
    // images?: string[],
    // videos?: string[],
    // videosDesc?: string[],
    // videosTitle?: string[],
    // videosThumb?: string[],
    // videosLink?: string[],
}


export const IntershipOfferGridItem = memo<IntershipOffersInterface>(
    ({city, industry, createdAt, title, updatedAt}) => {
        return (
            <article className={styles.container}>
                <span>{city}</span>
                <span>{industry}</span>
                <span>{createdAt}</span>
                <span>{title}</span>
                <span>{updatedAt}</span>

            </article>
        );
    },
);

IntershipOfferGridItem.displayName = "IntershipOfferGridItem";
