import React, {memo} from "react";
import useSWR from "swr";
import {
    IntershipOfferGridItem,
    IntershipOffersInterface
} from "../../shared/components/intershipOfferGridItem/Intership-offer-grid-item";

const fetcher = (...args: any[]) => fetch(...args)
    .then((res) => res.json())
    .then((e) => e.queryResult);

export const Offers = memo(() => {
    const {data, error} = useSWR('http://localhost:3030/api/v1/intership/offers', fetcher)


    return (
        <div className="bg-white p-4 rounded-t-3xl mt-8">
            <button type="button">tutaj cos</button>
            <section className="">
                {
                    data?.map(({industry, title, country, createdAt, updatedAt}: IntershipOffersInterface) =>
                        <IntershipOfferGridItem key={title} industry={industry} title={title} country={country}
                                                createdAt={createdAt} updatedAt={updatedAt}/>)
                }
            </section>
            {error && <div>Failed to load</div>}
        </div>
    );
});

export default Offers;
