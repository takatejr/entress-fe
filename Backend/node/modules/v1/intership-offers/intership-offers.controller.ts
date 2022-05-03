import {Request, Response} from "express";
import {filterMock, ResponseQueryInterface, responseQueryToFilterQueries} from "./intership-offers.service";

export const getIntershipOffers = (req: Request, res: Response) => {
    const {query} = req;
    const filterableQueries = responseQueryToFilterQueries(query as ResponseQueryInterface)

    res
        .status(200)
        .send({
            queryResult: filterMock(filterableQueries),
            queryParams: filterableQueries
        })
};

export const postIntershipOffers = (req: Request, res: Response) => {
    const {body} = req;
    const {intershipOffer} = body;

    res
        .status(201)
        .send({
            intershipOffer
        })
};
