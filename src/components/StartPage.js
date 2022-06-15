import React, { useCallback, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import FindForm from './FindForm';

export default function StartPage({FindCars}) {

    let navigate = useNavigate();

    return (
        <div>
            <FindForm />
            
        </div>
    )
}