/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { getTotalIncome } from "../utils/getTotalIncome";

export const useGetALlIncome = (date: number) => {
    const [incomeAmount, setIncomeAmount] = useState<any>(0);
    useEffect(() => {
        const getIncomeData = async () => {
            const { services } = await getTotalIncome(date);
            setIncomeAmount(services.find((service: any) => service).totalIncome);
        };
        getIncomeData();
    }, [date, incomeAmount]);
    return incomeAmount;
}
