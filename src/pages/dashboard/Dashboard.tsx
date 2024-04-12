/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getTotalIncome } from "../../utils/getTotalIncome";
import { getTotalExpense } from "../../utils/getTotalExpense";
import Chart from "../../components/dashboard/chart/Chart";

const Dashboard = () => {
  const [incomeAmount, setIncomeAmount] = useState<any>([]);
  const [expense, setExpense] = useState<any>([]);
  const [date, setDate] = useState<number>(30);

  // Get Total Income
  useEffect(() => {
    const getIncomeData = async () => {
      const { services } = await getTotalIncome(date);
      setIncomeAmount(services);
    };
    getIncomeData();
  }, [date]);

  // Get Total Expenses
  useEffect(() => {
    const totalExpenses = async () => {
      const { services } = await getTotalExpense(date);
      setExpense(services);
    };
    totalExpenses();
  }, [date]);
  return (
    <>
      <select
        className="outline-none duration-300 border border-gray-300 rounded-md p-2 w-1/4  focus:ring-opacity-50 mb-2 *:rounded-sm "
        name="Date"
        defaultValue={30}
        onChange={(e) => setDate(parseInt(e.target.value))}
      >
        <option value="1">Day</option>
        <option value="7">Week</option>
        <option value="30">Monthly</option>
        <option value="360">Yearly</option>
      </select>
      <div className="w-full grid md:grid-cols-2  grid-cols-1 gap-5 *:max-w-md">
        <div className="rounded-lg bg-[#0000001a] bg-opacity-10 backdrop-filter backdrop-blur-2xl px-4 py-5 shadow-md">
          <p className="text-xl font-semibold">Total Income</p>
          {incomeAmount?.map((data: { totalIncome: number }) => (
            <span className="text-3xl font-bold">
              {" "}
              &#x9F3;{data.totalIncome}
            </span>
          ))}
        </div>
        <div className="rounded-lg bg-[#0000001a] bg-opacity-10 backdrop-filter backdrop-blur-2xl px-4 py-5 shadow-md">
          <p className="text-xl font-semibold">Total Expense</p>
          {expense?.map((data: { totalExpenses: number }) => (
            <span className="text-3xl font-bold">
              &#x9F3;{data.totalExpenses}
            </span>
          ))}
        </div>
        <Chart />
      </div>
    </>
  );
};

export default Dashboard;
