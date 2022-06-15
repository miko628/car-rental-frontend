import React, { useCallback, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import FindForm from './FindForm';

export default function StartPage({FindCars}) {
    const [showroom, setShowroom] = useState('');

    let navigate = useNavigate();

    const showroomIsChosen = chosenShowroom => {
        setShowroom(chosenShowroom)
        console.log("startpage " + chosenShowroom)
        FindCars(chosenShowroom)
    }

    return (
        <div>
            <FindForm showroomIsChosen={showroomIsChosen}/>
            
        </div>
    )
}