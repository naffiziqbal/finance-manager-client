/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { getTotalExpense } from "../utils/getTotalExpense";
import { ContextProvider } from "../context/UserContext";

export const useGetTotalExpenses = (date: number) => {
    const [expense, setExpense] = useState<any>(0);
    const { user } = useContext(ContextProvider);
    useEffect(() => {
        const totalExpenses = async () => {
            const { services } = await getTotalExpense(date, user?._id);
            setExpense(services?.find((service: any) => service).totalExpenses);
        };
        totalExpenses();
    }, [date, expense, user?._id]);
    return expense;
}
