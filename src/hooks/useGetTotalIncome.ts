/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react"
import { getTotalIncome } from "../utils/getTotalIncome";
import { ContextProvider } from "../context/UserContext";

export const useGetALlIncome = (date: number) => {
    const [incomeAmount, setIncomeAmount] = useState<any>(0);
    const { user } = useContext(ContextProvider);
    useEffect(() => {
        const getIncomeData = async () => {
            const { services } = await getTotalIncome(date, user?._id);
            setIncomeAmount(services?.find((service: any) => service).totalIncome);
        };
        getIncomeData();
    }, [date, user?._id]);
    return incomeAmount;
}
