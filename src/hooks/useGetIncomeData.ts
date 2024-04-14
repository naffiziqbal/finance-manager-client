import { useEffect, useState } from "react";
import { getAllIncome } from "../utils/getAllIncome";

const useGetIncomeData = () => {
    const id = "6611a7457be5f0742aa4a498"
    const [data, setData] = useState([]);
    useEffect(() => {
        const getIncome = async (id: string) => {
            const data = await getAllIncome(id)
            setData(data)
        }
        getIncome(id);
    }, [data])
    return data;

}
export default useGetIncomeData;
