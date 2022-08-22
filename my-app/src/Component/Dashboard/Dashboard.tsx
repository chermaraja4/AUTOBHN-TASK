import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../Reducers/Reducers";
import Button from "@mui/material/Button";
import {
  IReadyUserList,
  DeleteUser,
  AddList,
} from "../../Reducers/Users/user.action";
import { alpha, styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "../Form/Form";
import "./Style.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Dashboard() {
  const Dispatch = useDispatch();
  const [showForm, setShowForm] = React.useState(false);
  const userList: any = useSelector<reducerState, IReadyUserList>(
    (state) => state.User.userDetails
  );
  const tableData = Object.values(userList.data);
  const [singleDetails, setSingleDetails] = React.useState({
    id: "",
    title: "",
  });

  const editUser = (list: any) => {
    setShowForm(true);
    setSingleDetails(list);
  };
  const closeBox = () => {
    setShowForm(false);
  };
  const dropUser = (id: number) => {
    Dispatch(DeleteUser({ id: id }));
  };

  const addNewList = () => {
    setSingleDetails({ id: "", title: "" });
    setShowForm(true);
  };

  return (
    <div>
      {showForm && <Form singleDetails={singleDetails} onClick={closeBox} />}
      <div className="row_header">
        <Button variant="outlined" onClick={addNewList}>
          Add New
        </Button>

        <div>Total list:{tableData.length}</div>
      </div>

      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="table_header">
              <StyledTableCell>S.no</StyledTableCell>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="left">title&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Edit&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Delete&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length > 0 &&
              tableData.map((list: any, index) => {
                return (
                  <StyledTableRow key={list.id}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {list.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{list.title}</StyledTableCell>

                    <StyledTableCell align="left">
                      <button onClick={() => editUser(list)}>
                        <EditIcon />
                      </button>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <button onClick={() => dropUser(list.id)}>
                        <DeleteIcon />
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
