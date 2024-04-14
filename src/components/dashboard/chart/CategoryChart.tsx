/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart } from "@mui/x-charts/BarChart";
import { useMonthlyIncomeByCat } from "../../../hooks/useGetMonthlyIncomeBycat";

export default function BasicBars() {
  const data: any = useMonthlyIncomeByCat();
  const uData = data?.services?.map((service: any) => service?.totalAmount) || [
    1, 2, 3,
  ];
  const pData = data?.services?.map((service: any) =>
    service?._id?.toUpperCase()
  ) || [1, 2, 3];

  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: pData }]}
      series={[{ data: uData }]}
      width={1200}
      height={600}
    />
  );
}

// data: services?.map((service: any) => service.totalAmount),
