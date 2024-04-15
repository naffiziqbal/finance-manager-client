import { useContext, useEffect, useState } from "react";
import { getMonthlyIncomeByCategory } from "../utils/getMonthlyIncomeBycat";
import { ContextProvider } from "../context/UserContext";

export const useMonthlyIncomeByCat = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(ContextProvider);
    const id = user?._id;

    useEffect(() => {
        const getMonthlyIncomeByCat = async () => {
            const services = await getMonthlyIncomeByCategory(id)
            setData(services)
        }
        getMonthlyIncomeByCat();
    }, [id])
    return data
}
