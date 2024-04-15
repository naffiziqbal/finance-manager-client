import { useContext, useEffect, useState } from "react";
import { getMonthlyExpensesByCategory } from "../utils/getMonthlyExpensesByCat";
import { ContextProvider } from "../context/UserContext";

export const useGetMonthlyExpensesByCat = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(ContextProvider);
    const id = user?._id;

    useEffect(() => {
        const getMonthlyExpensesByCat = async () => {
            const services = await getMonthlyExpensesByCategory(id)
            // console.log(services, "month")
            setData(services)
        }
        getMonthlyExpensesByCat();
    }, [id])
    return data
}
