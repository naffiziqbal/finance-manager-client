/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { addRecord } from "../utils/addData";

export const useAddNewData = (newData: any) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const addData = async () => {
            const services = await addRecord(newData)
            console.log(services, "month")
            setData(services)
        }
        addData();
    })
    return data
}

