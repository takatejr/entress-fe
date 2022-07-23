import React, {memo} from "react";
import Table from "../shared/components/table/Table";

export const Home = memo(() => {
    const headers = ["Name", "Age", "Custom Component"];
    const createComponent = () => {
        return (
            <div className="border-2 border-r-blue-500 border-solid w-32 h-10">
                heyo
            </div>
        )
    }

    const body = [{
        name: "John",
        age: "30",
        component: createComponent()
    }, {
        name: "Jane",
        age: "25",
        component: createComponent()
    }]


    return (
        <div className="pt-6">
            <article>
                <h3>Co mozna jeszcze dorzucić</h3>
                <ul>
                    <li>fingerprint do rozpoznania kto wchodzi z jakiego sprzetu</li>
                    <li>pobranie komend glosowych z backendu</li>
                    <li>hostowanie za free na netlify</li>
                    <Table headers={headers} body={body}/>
                </ul>
            </article>
        </div>
    );
});

Home.displayName = "Home";

export default Home;
