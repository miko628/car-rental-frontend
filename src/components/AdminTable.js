import React, { useCallback, useState, useEffect, useMemo } from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import "./Table.css"
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import GlobalFilter from './GlobalFilter';
import ReturnPopup from './ReturnPopup';

const AdminTable = ({ data }) => {
    const [returnPopupTrigger, setReturnPopupTrigger] = useState(false);
    const [returnPopupMessage, setReturnPopupMessage] = useState("")
    const [rentalId, setRentalId] = useState(0)
    
    let navigate = useNavigate();

    const columns = useMemo(
        () => [
        {
            Header: "Rental ID",
            accessor: "id",
        },
        {
            Header: "Showroom",
            accessor: "showroomName"
        },
        {
            Header: "User ID",
            accessor: "userId"
        },
        {
            Header: "Car ID",
            accessor: "carId"
        },
        {
            Header: "Start date",
            accessor: "startDate"
        },
        {
            Header: "End date",
            accessor: "endDate"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "Status",
            accessor: "rentStatus"
        },
    ], [])

    const tableInstance = useTable(
        { columns, data },
        useGlobalFilter,
        useSortBy,
    )

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
        preGlobalFilteredRows, 
        setGlobalFilter, 
        state } = tableInstance

    

    const returnCar = useCallback(async (id) => {
        console.log("returnCar id:" + rentalId)
        const response = await axios.post("http://localhost:8080/rent/edit", {}, { params: {
            id
        }});
        if (response) {
            if (response.status==200){
                // setReturnPopupTrigger(false)
                window.location.reload();
            } else {
                setReturnPopupMessage("Failed to return!")
            }
        }
        return response;
    }, [])

    const initiateReturnCar = (props) => {
        console.log("initiate id:" + props.row.values.id)
        setRentalId(parseInt(props.row.values.id))
        
        setReturnPopupTrigger(true)
    }

    return (
        <div className="table-container">
        <ReturnPopup message={returnPopupMessage} trigger={returnPopupTrigger} setTrigger={setReturnPopupTrigger} returnCar={returnCar} id={rentalId}/>    
        <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter}/>
        <table className="table" {...getTableProps()}> 
            <thead className="thead">
                {headerGroups.map((headerGroup) => (
                    <tr className="trHead" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th className="th" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="tbody" {...getTableBodyProps()}>
                {rows.map((row, idx) => {
                    prepareRow(row)
                    return ( 
                    <tr className="trBody" onClick={() => initiateReturnCar({ row })} {...row.getRowProps()}>
                        {row.cells.map((cell, idx) => (
                            <td className="td" {...cell.getCellProps()}>
                                {cell.render("Cell")}
                            </td>
                        ))}
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>

    )
}

export default AdminTable