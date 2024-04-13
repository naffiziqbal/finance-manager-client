/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart } from "@mui/x-charts";
import useGetIncomeData from "../../../hooks/useGetIncomeData";
import useGetExpenseData from "../../../hooks/useGetExpenseData";

export default function Chart() {
  const income: any = useGetIncomeData();
  const expenses: any = useGetExpenseData();
  const data = income?.services?.map((service: any) => service.amount);
  const expenseData = expenses?.services?.map((service: any) => service.amount);

  //   const expenseDate = expenses?.services?.map(
  //     (service: any) => new Date(service?.createdAt).getMonth() + 1
  //   );

  const uData = data || [];
  const pData = expenseData || [];
  return (
    <LineChart
      width={1400}
      sx={{ overflow: "auto" }}
      height={600}
      margin={{ top: 50, right: 10, bottom: 50, left: 100 }}
      series={[
        { data: pData, label: "expenses", color: "#f00" },
        { data: uData, label: "income", color: "#0f0" },
      ]}
    />
  );
}
