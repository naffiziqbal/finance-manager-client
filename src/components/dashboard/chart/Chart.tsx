/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart } from "@mui/x-charts";
import useGetIncomeData from "../../../hooks/useGetIncomeData";
import useGetExpenseData from "../../../hooks/useGetExpenseData";
import { Grid } from "@mui/material";

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
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <LineChart
          height={400}
          series={[
            { data: pData, label: "expenses", color: "#f00" },
            { data: uData, label: "income", color: "#0f0" },
          ]}
          margin={{ left: 80 }}
        />
      </Grid>
    </Grid>
  );
}
