import { useEffect, useState } from "react";
import { getMonthlyIncomeByCategory } from "../utils/getMonthlyIncomeBycat";

export const useMonthlyIncomeByCat = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getMonthlyIncomeByCat = async () => {
            const services = await getMonthlyIncomeByCategory("6611a7457be5f0742aa4a498")
            console.log(services, "month")
            setData(services)
        }
        getMonthlyIncomeByCat();
    }, [])
    return data
}
