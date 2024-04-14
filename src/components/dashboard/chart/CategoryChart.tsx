/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart } from "@mui/x-charts/BarChart";
import { useMonthlyIncomeByCat } from "../../../hooks/useGetMonthlyIncomeBycat";
import { Grid } from "@mui/material";

export default function BasicBars() {
  const data: any = useMonthlyIncomeByCat();
  const uData = data?.services?.map((service: any) => service?.totalAmount) || [
    1, 2, 3,
  ];
  const pData = data?.services?.map((service: any) =>
    service?._id?.toUpperCase()
  ) || [1, 2, 3];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <BarChart
          xAxis={[{ scaleType: "band", data: pData }]}
          series={[{ data: uData }]}
          height={400}
          margin={{ left: 80 }}
        />
      </Grid>
    </Grid>
  );
}

// data: services?.map((service: any) => service.totalAmount),
