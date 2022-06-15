import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './forms.css'

function RentForm() {
    const [selectedcollDate, setSelectedcollDate] = useState(new Date)
    const [selectedretDate, setSelectedretDate] = useState("")
    const [Showroom, setShowroom] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        console.log({ selectedcollDate })
        console.log({ selectedretDate })
        console.log({Showroom})

    }
    return (
        <div id='form-control'>
            <h2>Reservation form</h2>
            <form onSubmit={submitHandler}>
                
                <label>Car collection date and time:</label>
            <DatePicker
                selected={selectedcollDate}
                onChange={(date) => setSelectedcollDate(date)}
                dateFormat="dd/MM/yyyy HH:mm:ss"
                minDate={new Date}
                showTimeSelect
                timeIntervals={15}
                placeholderText="Date of collecting car"
            />
             
                <label>Car return date and time:</label>
            <DatePicker
                selected={selectedretDate}
                onChange={date => setSelectedretDate(date)}
                dateFormat="dd/MM/yyyy HH:mm:ss"
                showTimeSelect
                timeIntervals={15}
                placeholderText="Date of returning car"
                minDate={new Date(selectedcollDate.getFullYear(), selectedcollDate.getMonth(), selectedcollDate.getDate()+1)}
                
            />
            <label>Return showroom:</label>
                <input
                    type="text"
                    required
                    value={Showroom}
                    onChange={(e) => setShowroom(e.target.value)}
                />

                <input value="Confirm" type="submit"/>
            </form>
        </div>
    )
}
export default RentForm;
