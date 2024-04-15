import { useEffect, useState } from "react";
import { addRecord } from "../utils/addData";

export const useAddNewData = (data) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const addData = async () => {
            const services = await addRecord(data)
            console.log(services, "month")
            setData(services)
        }
        addData();
    }, [])
}

