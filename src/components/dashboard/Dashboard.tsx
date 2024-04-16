/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Chart from "../../components/dashboard/chart/Chart";
import { useGetALlIncome } from "../../hooks/useGetTotalIncome";
import { useGetTotalExpenses } from "../../hooks/useGetTotalExpenses";
import BasicBars from "./chart/CategoryChart";
import ExpensesChart from "./chart/expensesChart";

const Dash = () => {
  const [date, setDate] = useState<number>(30);

  // Get Total Income  //*Custom Hook
  const incomeAmount = useGetALlIncome(date);

  // Get Total Expenses //*Custom Hook
  const expense = useGetTotalExpenses(date);

  return (
    <div className="w-full">
      {/* Date Filter */}
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

      {/* Income and Expense */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5  items-center -500 md:pr-12">
        {/* Total Income ================= */}
        <div className="rounded-lg bg-[#0000001a] bg-opacity-10 backdrop-filter backdrop-blur-2xl px-4 py-5 shadow-md">
          <p className="text-xl font-semibold">Total Income</p>
          <span className="text-2xl  font-bold">
            &#x9F3;{incomeAmount || 0}
          </span>
        </div>
        {/* Total Expenses ================= */}

        <div className="rounded-lg bg-[#0000001a] bg-opacity-10 backdrop-filter backdrop-blur-2xl px-4 py-5 shadow-md">
          <p className="text-xl font-semibold">Total Expense</p>
          <span className="font-bold text-2xl">&#x9F3;{expense || 0}</span>
        </div>

        {/* Net Profit ================= */}
        <div className="rounded-lg bg-[#0000001a] bg-opacity-10 backdrop-filter backdrop-blur-2xl px-4 py-5 shadow-md">
          <p className="text-xl font-semibold">Net Profit</p>
          <span className="font-bold text-2xl">
            &#x9F3;{incomeAmount > expense ? incomeAmount - expense : 0}
          </span>
        </div>
        {/* Net Losses ==================== */}
        {expense > incomeAmount && (
          <div className="rounded-lg bg-[#0000001a] text-red-500 bg-opacity-10 backdrop-filter backdrop-blur-2xl px-4 py-5 shadow-md">
            <p className="text-xl font-semibold">Net losses</p>
            <span className="font-bold text-2xl">
              &#x9F3;{expense - incomeAmount}
            </span>
          </div>
        )}
      </div>

      {/* Charts ===================== */}
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 w-full  ">
        <div className=" mt-12">
          <h3 className="text-center md:text-start text-2xl font-bold mt-12">
            Total Income and Expenses Analytics
          </h3>
          <Chart />
        </div>
        <div className=" mt-12  flex flex-col h-ful  w-full">
          <h3 className="text-center md:text-start text-2xl font-bold my-12">
            Monthly Expenses By Category
          </h3>
          <ExpensesChart />
        </div>
        <div className=" mt-12">
          <h3 className="text-center md:text-start text-2xl font-bold mt-12">
            Monthly Income By Category
          </h3>
          <BasicBars />
        </div>
      </div>
    </div>
  );
};

export default Dash;
