import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}) {
    const [value, setValue] = useState(globalFilter)

    const count = preGlobalFilteredRows.length
    
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 300)

    return (
    <div className="search-container">
        <label className="search-text">Search:</label>
        <input value={value || ""} onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }} placeholder={`${count} records...`}/>
    </div>)
}