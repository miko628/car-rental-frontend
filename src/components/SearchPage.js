import React, { useCallback, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import Table from './Table';
import axios from 'axios'

export default function SearchPage() {
    
    const [data, setData] = useState([])
    // const [showroom, setShowroom] = useState('');

    let navigate = useNavigate();
    // const data = [
    //     {
    //         image: 'https://picsum.photos/200/300',
    //         showroom: 'Gdańsk Kowalski',
    //         brand: "Audi",
    //         model: "A3",
    //         type: "Sedan",
    //         seats: 5,
    //         transmission: "Automatic",
    //         fuel: "ON"
    //     },
    //     {
    //         image: 'http://localhost:8080/files/581b3a15-866e-49f6-a369-32059e550143',
    //         showroom: 'Warszawa Szmyt',
    //         brand: "BMW",
    //         model: "M2",
    //         type: "Coupe",
    //         seats: 5,
    //         transmission: "Manual",
    //         fuel: "PB95"
    //     }
    // ]
    const API_URL = "http://localhost:8080/table";
    const showroom = "dupa"
    // const response = axios.post(API_URL, {
    //         showroom
    //     });
    
    // console.log(JSON.stringify(response.data))
    
    // const data = response.data
    
    const fetchDataHandler = useCallback(async () => {
        try {
            const response = await axios.post(API_URL, {
                showroom
            }).catch(err => console.log(err))
            // if (!response.ok) {
            //     throw new Error("Nie udało się pobrać danych")
            // }
            if (response) {
                const data = response.data
                setData(data)
    
                // setData(JSON.stringify(response.data));
            }
            return response.data;
        
            const data = await response.json()
            setData(data)

        } catch (err) {
            console.log(err.message);
        }
    }, [])

    useEffect(() => {
        fetchDataHandler()
    }, []);


    return (
        <div>
            <Table data={data}/>
        </div>
    )
}