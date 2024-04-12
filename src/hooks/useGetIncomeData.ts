import { useEffect, useState } from "react";
import { getAllIncome } from "../utils/getAllIncome";

const useGetIncomeData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getIncome = async () => {
            const data = await getAllIncome()
            setData(data)
        }
        getIncome();
    }, [data])
    return data;

}
export default useGetIncomeData;
