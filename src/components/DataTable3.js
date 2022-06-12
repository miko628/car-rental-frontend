import React, { useMemo, useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
// import tw from "twin.macro"

// const Table = tw.table`
//     table-fixed
//     text-base
//     text-grey-900
// `

// const TableHead = tw.thead`
//     p-2
// `

// const TableRow = tw.tr`
//     border
//     border-green-500
// `

// const TableHeader = tw.th`
//     border
//     border-green-500
//     p-2
// `

// const TableBody = tw.tbody`

// `

// const TableData = tw.td`
//     border
//     border-green-500
//     p-5
// `

// const Button = tw.button`
//     pl-4
//     pr-4
//     pt-2
//     pb-2
//     text-black
//     rounder-md
//     bg-green-300
//     hover:bg-green-200
//     transition-colors
// `

export default function DataTable({ data }) {
    const [filterInput, setFilterInput] = useState("");
    // Use the state and functions returned from useTable to build your UI
    
    
    const columns = useMemo( () => ([
        {
            Header: "Image",
            accessor: "image"
        },
        {
            Header: "Brand",
            accessor: "brand"
        },
        {
            Header: "Model",
            accessor: "model"
        },
        {
            Header: "Year",
            accessor: "year"
        },
        {
            Header: "Seats",
            accessor: "seats"
        },
        {
            Header: "Transmission",
            accessor: "transmission"
        }

    ]))
    
    const tableInstance = useTable(
        {columns, data},
        useFilters,
        useSortBy
    );

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = tableInstance

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("show.name", value);
        setFilterInput(value);
    };

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell, idx) => (
                            <td {...cell.getCellProps()}>
                                {cell.render("Cell")}
                            </td>
                        ))}
                    </tr>
                )})}
            </tbody>
        </table>
    );
}