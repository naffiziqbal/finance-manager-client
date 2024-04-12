import { useEffect, useState } from "react";

import { getAllExpenses } from "../utils/getAllExpenses";

const useGetExpenseData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getExpenses = async () => {
            const data = await getAllExpenses()
            setData(data)
        }
        getExpenses();
    }, [data])
    return data;

}
export default useGetExpenseData;
