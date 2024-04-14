/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart } from "@mui/x-charts/PieChart";
import { useGetMonthlyExpensesByCat } from "../../../hooks/useGetMonthlyExpensesByCat";

export default function ExpensesChart() {
  const data: any = useGetMonthlyExpensesByCat();
  console.log(data);
  const pieData = data?.services?.map((service: any) => ({
    value: service?.totalAmount,
    label: service?._id?.toUpperCase(),
  })) || [
    { value: 1, label: "A" },
    { value: 2, label: "B" },
    { value: 3, label: "C" },
  ];
  return (
    <PieChart
      series={[
        {
          data: pieData,
        },
      ]}
      margin={{ top: 40 }}
      width={800}
      height={400}
    />
  );
}
