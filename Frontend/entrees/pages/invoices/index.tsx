import React, { FormEventHandler, useCallback, useEffect, useState } from "react";
import { Input } from "../../shared/components/input/Input";

export const InvoicePDFGenerator = () => {
    const [invoiceData, setInvoiceData] = useState({
        saleDate: "",
    });
    const [tableData, setTableData] = useState([
        {
            lp: "1",
            name: "taka usluga",
            unit: "metry",
            quantity: "3",
            netPrice: "170",
            grossPrice: "180",
            vat: "10",
            vatAmount: "17",
            grossAmount: "187",

        },
    ]);

    const handleSubmit = useCallback<FormEventHandler<EventTarget>>((event) => {
        event.preventDefault();
        //@ts-ignore
        console.log(event.currentTarget.value);
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvoiceData({
            ...invoiceData,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    useEffect(() => console.log(invoiceData, tableData), [invoiceData, tableData]);

    const updatexD = () => setTableData([]);

    return (
        <div className="bg-white p-4 rounded-t-3xl">
            <button onClick={updatexD}>rehehe</button>
            <form onSubmit={handleSubmit} className="h-full p-8 bg-sky-200 rounded-2xl gap-4 flex flex-col">
                {/*<section className="flex flex-row gap-4">*/}
                {/*    {InvoiceDates.map((date, index) => (*/}
                {/*        <Input*/}
                {/*            key={index}*/}
                {/*            name={date.name}*/}
                {/*            type={date.type}*/}
                {/*            handleChange={handleOnChange}*/}
                {/*            htmlFor={date.htmlFor}*/}
                {/*            text={date.text}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</section>*/}
                {/*<section className="grid grid-cols-2">*/}
                {/*    <div className="w-3/4">*/}
                {/*        {InvoiceSeller.map((seller, index) => (*/}
                {/*            <Input*/}
                {/*                key={index}*/}
                {/*                name={seller.name}*/}
                {/*                type={seller.type}*/}
                {/*                handleChange={handleOnChange}*/}
                {/*                htmlFor={seller.htmlFor}*/}
                {/*                text={seller.text}*/}
                {/*                containerStyle={seller.containerStyle}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <div className="w-3/4">*/}
                {/*        {InvoiceBuyer.map((buyer, index) => (*/}
                {/*            <Input*/}
                {/*                key={index + buyer.name}*/}
                {/*                name={buyer.name}*/}
                {/*                type={buyer.type}*/}
                {/*                handleChange={handleOnChange}*/}
                {/*                htmlFor={buyer.htmlFor}*/}
                {/*                text={buyer.text}*/}
                {/*                containerStyle={buyer.containerStyle}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="w-full gap-2 flex flex-row justify-between">*/}
                {/*    <table className="w-11/12">*/}
                {/*        <thead>*/}
                {/*        <tr className="grid grid-cols-9">*/}
                {/*            <th className="border-2 border-solid border-sky-100">Lp.</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Nazwa towaru lub usługi</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Jednostka</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Ilość</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Cena netto</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Wartość netto</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Stawka VAT</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Kwota VAT</th>*/}
                {/*            <th className="border-2 border-solid border-sky-100">Wartość brutto</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {tableData.map((data, index) => (*/}
                {/*            <tr key={data.lp + index} className="grid grid-cols-9">*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.lp}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.name}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.unit}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.quantity}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.netPrice}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.grossPrice}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.vat}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.vatAmount}</td>*/}
                {/*                <td className="border-2 border-solid border-sky-100">{data.grossAmount}</td>*/}
                {/*            </tr>*/}
                {/*        ))}*/}
                {/*        <tr className="grid grid-cols-9">*/}
                {/*            {TableRow.map((data, index) => (*/}
                {/*                <td key={data.text}>*/}
                {/*                    <Input text={data.text} htmlFor={data.htmlFor} type={data.type}*/}
                {/*                           name={data.name} containerStyle="w-full" />*/}
                {/*                </td>*/}
                {/*            ))}*/}
                {/*        </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*    <div className="w-1/12">*/}
                {/*        <button type="button">*/}
                {/*            Dodaj pozycję*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="w-full">*/}
                {/*    {AdditionalText.map((data, index) => (*/}
                {/*        <Input key={index} text={data.text} htmlFor={data.htmlFor} type={data.type}*/}
                {/*               handleChange={handleOnChange}*/}
                {/*               name={data.name} containerStyle={data.containerStyle} />*/}
                {/*    ))}*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <div className="w-full">*/}
                {/*        {InvoiceFooter.map((footer, index) => (*/}
                {/*            <Input*/}
                {/*                key={index}*/}
                {/*                name={footer.name}*/}
                {/*                type={footer.type}*/}
                {/*                handleChange={handleOnChange}*/}
                {/*                htmlFor={footer.htmlFor}*/}
                {/*                text={footer.text}*/}
                {/*                containerStyle={footer.containerStyle}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}
            </form>
        </div>
    );
};

export default InvoicePDFGenerator;
