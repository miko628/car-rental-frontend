import React, { useCallback, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import Table from './Table';
import axios from 'axios'
import FindForm from './FindForm';

export default function SearchPage() {
    const [data, setData] = useState([])

    let navigate = useNavigate();

    const API_URL = "http://localhost:8080/table";

    const fetchDataHandler = useCallback(async showroom => {
        try {
            console.log("handler: " + showroom)
            const response = await axios.post(API_URL, {
                showroom
            }).catch(err => console.log(err))

            if (response) {
                const data = response.data
                setData(data)
            }
            
            console.log("data: " + data)
            return response.data;

        } catch (err) {
            console.log(err.message);
        }
    }, [])

    useEffect(() => {
        const showroom = JSON.parse(localStorage.getItem("showroom"));
        if(showroom) {
            // console.log("storage: " + showroom)
            fetchDataHandler(showroom)
        }
    }, []);


    return (
        <div>
            <FindForm/>
            <Table data={data}/>
        </div>
    )
}