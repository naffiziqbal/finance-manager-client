/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetExpenseData from "../../hooks/useGetExpenseData";
import { useContext } from "react";
import { ContextProvider } from "../../context/UserContext";
import toast from "react-hot-toast";

const Expenses = () => {
  const { services } = useGetExpenseData();
  const { handleDeleteService } = useContext(ContextProvider);

  return (
    <div className="overflow-hidden h-96">
      <h3 className="text-2xl font-bold">All Expense Data</h3>
      <TableContainer component={Paper} className=" h-96">
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
                <TableCell>
                  <button
                    onClick={() =>
                      handleDeleteService(row?._id).then((data: any) =>
                        data.success
                          ? toast.success(data.message)
                          : toast(data.message)
                      )
                    }
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Expenses;
