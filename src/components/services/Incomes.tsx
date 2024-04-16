/* eslint-disable @typescript-eslint/no-explicit-any */
import useGetIncomeData from "../../hooks/useGetIncomeData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Incomes = () => {
  const { services } = useGetIncomeData();

  return (
    <div className="overflow-auto">
      <h3 className="text-2xl font-bold">All Income Data</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Service Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="capitalize">
            {services?.map((row: any) => (
              <TableRow
                key={row?._id}
                sx={{
                  "&:last-child td, &:last-child th ": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row?.category}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Incomes;
