import { useContext, useEffect, useState } from "react";
import { getAllIncome } from "../utils/getAllIncome";
import { ContextProvider } from "../context/UserContext";

const useGetIncomeData = () => {
    const { user } = useContext(ContextProvider);
    const id = user?._id;
    const [data, setData] = useState([]);
    useEffect(() => {
        const getIncome = async (id: string) => {
            const data = await getAllIncome(id)
            setData(data)
        }
        getIncome(id);
    }, [id])
    return data;

}
export default useGetIncomeData;
