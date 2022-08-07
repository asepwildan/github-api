import React, { useState } from "react";
import "./table.css";
import TablePagination from "@mui/material/TablePagination";
export default function TableRepo(props) {
    const { listRepo = [] } = props;
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const filterData = (val) => {
        const testing = listRepo.filter((item) => item);
    };

    console.log(Math.ceil(listRepo.length / 10));
    const handleChangePage = (newPage) => {
        console.log(newPage, "newPage");
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        console.log(event.target.value, "set target");
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <div className="table-container">
            <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>Repository Name</th>
                    <th>Programming Language</th>
                </tr>
                {listRepo.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.language}</td>
                    </tr>
                ))}
            </table>
            <div className="pagination-container">
                <TablePagination
                    component="div"
                    count={listRepo.length}
                    page={page}
                    onPageChange={(page, value) => {
                        handleChangePage(value);
                        console.log(value, "value");
                    }}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    );
}
