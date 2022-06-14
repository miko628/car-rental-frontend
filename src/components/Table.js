import React from "react"
import {useNavigate} from "react-router-dom"
import "./Table.css"

const Table = ({ data }) => {
    let navigate = useNavigate();

    const keys = Object.keys(data[0])
    const columns = ['Image', 'Showroom', 'Brand', 'Model', 'Type', 'Seats', 'Transmission', 'Fuel']

    const rentHandler = (e) => {
        navigate("/rent");
    };

    return (
        <div className="table-container">
            <table className="table"> 
                <thead className="thead">
                    { console.log({keys})}
                    <tr className="trHead">
                        {columns.map((item, index) => (
                            <th className="th" key={index}>
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="tbody">
                    {data.map((obj, index) => (
                        <tr className="trBody" key={index} onClick={rentHandler}>
                            {keys.map((item, index) => {
                                const value = obj[item]
                                switch (item) {
                                    case "image": return (
                                        <td className="td" key={index}>
                                            <img src={value} />
                                        </td>
                                    );
                                    case "id": return ;
                                    default:        return (
                                        <td className="td" key={index}>
                                            {value}
                                        </td>
                                    )
                                }
                                if(item === "image") {
                                    return (
                                        <td className="td" key={index}>
                                            <img src={value} />
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td className="td" key={index}>
                                            {value}
                                        </td>
                                    )
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table