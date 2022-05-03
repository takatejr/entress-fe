import React, { FormEventHandler, useCallback, useEffect, useState } from "react";
import { Input } from "../../shared/components/input/Input";

export const Offers = () => {

    const handleSubmit = useCallback<FormEventHandler<EventTarget>>((event) => {
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    };

    useEffect(() => {
        fetch("http://localhost:3030/api/v1/intership/offers?city=war.contains&industry=i.contains", {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);


    return (
        <div className="bg-white p-4 rounded-t-3xl mt-8">
            <button type="button">tutaj cos</button>
        </div>
    );
};

export default Offers;
