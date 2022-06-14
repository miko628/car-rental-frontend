import React from 'react';
import {useNavigate} from "react-router-dom"
import Table from './Table';

export default function SearchPage() {
    let navigate = useNavigate();
    const data = [
        {
            image: 'https://picsum.photos/200/300',
            showroom: 'Gdańsk Kowalski',
            brand: "Audi",
            model: "A3",
            type: "Sedan",
            seats: 5,
            transmission: "Automatic",
            fuel: "ON"
        },
        {
            image: 'https://picsum.photos/200/300',
            showroom: 'Warszawa Szmyt',
            brand: "BMW",
            model: "M2",
            type: "Coupe",
            seats: 5,
            transmission: "Manual",
            fuel: "PB95"
        }
    ]

    return (
        <div>
            <Table data={data}/>
        </div>
    )
}