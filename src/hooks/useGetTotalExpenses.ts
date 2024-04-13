/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getTotalExpense } from "../utils/getTotalExpense";

export const useGetTotalExpenses = (date: number) => {
    const [expense, setExpense] = useState<any>(0);
    useEffect(() => {
        const totalExpenses = async () => {
            const { services } = await getTotalExpense(date);
            setExpense(services?.find((service: any) => service).totalExpenses);
        };
        totalExpenses();
    }, [date, expense,]);
    return expense;
}