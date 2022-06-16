import React, { useCallback, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import FindForm from './FindForm';
import Map from './Map';
import ReactCardSlider from './ReactCardSlider';
import "./StartPage.css"

export default function StartPage({FindCars}) {

    let navigate = useNavigate();

    return (
        <div className='startpage-container'>
            <div className='startpage-inner'>
                <h3>Our cars</h3>
                <ReactCardSlider />
            </div>

            <div className='startpage-inner'>
                <h3>Our showrooms</h3>
                <div className='startpage-group'>
                    <FindForm />
                </div>
                <div className='startpage-group'>
                    <h4 className='select-on-map'>Or select on the map:</h4>
                    <Map />
                </div>
            </div>
        </div>
    )
}