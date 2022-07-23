import React, {memo, useEffect, useState} from "react";
import styles from "./Table.module.scss";
import {generateUUID} from "../../utils/uuid";

export type TablePropsType = {
    headers: string[];
    body: { [objKey: string]: string | JSX.Element }[];
};

export type TableUUIDsType = {
    headerUUID: string | null;
    bodyUUIDs: string[] | null;
}

export const Table = memo(({headers, body}: TablePropsType) => {
    const [UUIDs, setBodyUUIDs] = useState<TableUUIDsType>({
        headerUUID: null,
        bodyUUIDs: null
    });

    useEffect(() => {
        if (checkDataCompatibility() && !UUIDs.headerUUID) {
            generateTableUUIDs();
        }
    }, [headers, body])

    const checkDataCompatibility = (): boolean => {
        return headers.length === Object.keys(body[0]).length
    }

    const generateTableUUIDs = (): void => {
        const headerUUID = generateUUID();
        const bodyUUIDs = body.map(() => generateUUID());

        setBodyUUIDs({
            headerUUID,
            bodyUUIDs
        });
    }

    const generateTable = () => {
        return (
            checkDataCompatibility() ?
                <table className={styles['table']}>
                    {generateHeader()}
                    {generateDataRows()}
                </table>
                :
                <div>Data is not compatible with headers</div>
        )
    }

    const generateHeader = (): JSX.Element => {
        return (
            <tr className={styles['header']}>
                {headers.map((header, index) => <th className={styles['header-cell']}
                                                    key={header + index}>{header}</th>)}
            </tr>
        )
    }

    const generateDataRows = (): JSX.Element[] => {
        const rowKeys = Object.keys(body[0]) as string[];

        return body.map((row, index) => {
            // @ts-ignore
            return <tr className={styles['data-row']} key={UUIDs.bodyUUIDs[index]}>
                {rowKeys.map((objKey: string, index) => <td className={styles['data-cell']}
                                                            key={objKey + index}>{row[objKey]}</td>)}
            </tr>
        })
    }

    return (
        <>
            {
                UUIDs.headerUUID ? generateTable() : null
            }
        </>
    );
});

Table.displayName = "Table";

export default Table;
