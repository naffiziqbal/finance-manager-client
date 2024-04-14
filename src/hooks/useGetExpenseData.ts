import { useEffect, useState } from "react";

import { getAllExpenses } from "../utils/getAllExpenses";

const useGetExpenseData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getExpenses = async () => {
            const data = await getAllExpenses("6611a7457be5f0742aa4a498")
            setData(data)
        }
        getExpenses();
    }, [])
    return data;

}
export default useGetExpenseData;
