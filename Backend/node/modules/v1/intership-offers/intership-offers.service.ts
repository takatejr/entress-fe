import {FilterQueryInterface} from "../types/filter-query.interface";
import {IntershipOffersInterface} from "../types/intership-offers.interface";
import {intershipOfferMock4} from "./intership-offers.utils";

export interface ResponseQueryInterface {
    [key: string]: string;
}

export const responseQueryToFilterQueries = (query: ResponseQueryInterface): FilterQueryInterface[] => {
    const filterQueryEntries = Object.entries(query);
    return filterQueryEntries.map(([filterBy, value]) => {
        const splitValue = value.split(".");

        return {
            filterBy,
            filterType: splitValue[1],
            filterValue: splitValue[0],
        }
    });
};

export const filterMock = (queries: FilterQueryInterface[]) => {
    return intershipOfferMock4.filter((element: IntershipOffersInterface) => {
        return queries.every((query: FilterQueryInterface) => {
            const {filterBy, filterType, filterValue} = query;

            if (filterType === 'contains') {
                //@ts-ignore
                return element[filterBy].toLowerCase().includes(filterValue.toLowerCase());
            }

            return false
        });
    })
}
