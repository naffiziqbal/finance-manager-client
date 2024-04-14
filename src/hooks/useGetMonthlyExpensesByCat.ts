import { useEffect, useState } from "react";
import { getMonthlyExpensesByCategory } from "../utils/getMonthlyExpensesByCat";

export const useGetMonthlyExpensesByCat = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getMonthlyExpensesByCat = async () => {
            const services = await getMonthlyExpensesByCategory("6611a7457be5f0742aa4a498")
            console.log(services, "month")
            setData(services)
        }
        getMonthlyExpensesByCat();
    }, [])
    return data
}
