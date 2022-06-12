import React from 'react';
import {useNavigate} from "react-router-dom"
import Table from './Table';

export default function SearchPage() {
    let navigate = useNavigate();
    const data = [{
        image: 'https://picsum.photos/200/300',
        brand: "Audi",
        model: "A3",
        year: 2022,
        seats: 5,
        transmission: "Automatic",
    }]

    return (
        <div>
            <Table data={data}/>
        </div>
    )
}