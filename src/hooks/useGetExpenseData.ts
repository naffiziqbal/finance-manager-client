import { useContext, useEffect, useState } from "react";

import { getAllExpenses } from "../utils/getAllExpenses";
import { ContextProvider } from "../context/UserContext";

const useGetExpenseData = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(ContextProvider);
    const id = user?._id;
    useEffect(() => {
        const getExpenses = async () => {
            const data = await getAllExpenses(id)
            setData(data)
        }
        getExpenses();
    }, [id])
    return data;

}
export default useGetExpenseData;
