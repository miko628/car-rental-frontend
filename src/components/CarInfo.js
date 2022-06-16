﻿import React, { useCallback, useState, useEffect } from 'react';
//import AuthService from '../services/auth.service';
import './CarInfo.css'

export default function CarInfo(props) {
    const [Data, setData] = useState([]);
    
    const fetchDataHandler = useCallback(async () => {
        try {
            const result = await fetch('http://localhost:8080/cars?id=2' )//+ new URLSearchParams({id: 1}))

            if (!result.ok) {
                throw new Error("Nie uda³o siê pobraæ danych")
            }

            const resultData = await result.json()
            setData(resultData)
            console.log({ Data })
        } catch (err) {
            console.log(err.message);
        }

    }, [])
    useEffect(() => {
        fetchDataHandler()
    })
    return (
        
        <div id="main-container">
            <div className="colored-panel"/>
            <h2>{Data.brand} {Data.model} </h2>
            <img src={Data.url} />
            <div>
                <label className="title">Engine</label>
                <label> {Data.engine}</label>
            </div>

            <div>
                <label className="title">Transmission</label>
                <label>{Data.transmission}</label>
            </div >
            <div >
                <label className="title">Seats {"\n"}</label>
                <label>{Data.seats}</label>
            </div >
           
            <div>
            <label className="title">Car Type {"\n"}</label>
                <label>{Data.carType}</label>
            </div>
            <div>
            <label className="title">Fuel {"\n"}</label>
            <label>{Data.fuelType}</label>
            </div>
     
        </div>
        )
}