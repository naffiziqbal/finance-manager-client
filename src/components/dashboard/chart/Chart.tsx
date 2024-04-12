/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart } from "@mui/x-charts";
import useGetIncomeData from "../../../hooks/useGetIncomeData";
import useGetExpenseData from "../../../hooks/useGetExpenseData";

export default function Chart() {
  const income: any = useGetIncomeData();
  const expenses: any = useGetExpenseData();
  const data = income?.services?.map((service: any) => service.amount);
  const expenseData = expenses?.services?.map((service: any) => service.amount);
  
  const expenseDate = expenses?.services?.map(
    (service: any) => new Date(service?.createdAt).getMonth() + 1
  );

  const uData = data || [];
  const pData = expenseData || [];
  const xLabels = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  return (
    <LineChart
      width={800}
      height={500}
      series={[
        { data: pData, label: "expenses" },
        { data: uData, label: "income" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
