/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart } from "@mui/x-charts/PieChart";
import { useGetMonthlyExpensesByCat } from "../../../hooks/useGetMonthlyExpensesByCat";
import { Grid } from "@mui/material";

export default function ExpensesChart() {
  const data: any = useGetMonthlyExpensesByCat();
  const pieData = data?.services?.map((service: any) => ({
    value: service?.totalAmount,
    label: service?._id,
  })) || [
    { value: 1, label: "A" },
    { value: 2, label: "B" },
    { value: 3, label: "C" },
  ];
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <PieChart
          series={[
            {
              data: pieData,
              highlightScope: { faded: "series", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={300}
        />
      </Grid>
    </Grid>
  );
}
