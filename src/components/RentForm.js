import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './forms.css'
import AuthService from '../services/auth.service';

function RentForm() {
    const [selectedcollDate, setSelectedcollDate] = useState(new Date);
    const [selectedretDate, setSelectedretDate] = useState("");
    const [Data, setData] = useState([]);
    const [Showroom, setShowroom] = useState('');
    const [username, setUsername] = useState(undefined)
    const fetchDataHandler = useCallback(async () => {
        try {
            const result = await fetch('http://localhost:8080/showroom/names')

            if (!result.ok) {
                throw new Error("Nie uda³o siê pobraæ danych")
            }

            const resultData = await result.json()
            setData(resultData)

        } catch (err) {
            console.log(err.message);
        }

    }, [])

    useEffect(() => {
       const user = AuthService.getCurrentUser();
        if (user) {
            setUsername(user.username)
        }
        fetchDataHandler()
        console.log({ Data })

    }, [Showroom]);

    const submitHandler = e => {
        e.preventDefault();



        console.log( username)
        console.log({ selectedcollDate })
        console.log({ selectedretDate })
        console.log({ Showroom })

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
                    required
                    timeIntervals={15}
                    placeholderText="Date of collecting car"
                />

                <label>Car return date and time:</label>
                <DatePicker
                    selected={selectedretDate}
                    onChange={date => setSelectedretDate(date)}
                    dateFormat="dd/MM/yyyy HH:mm:ss"
                    showTimeSelect
                    required
                    timeIntervals={15}
                    placeholderText="Date of returning car"
                    minDate={new Date(selectedcollDate.getFullYear(), selectedcollDate.getMonth(), selectedcollDate.getDate() + 1)}

                />

                <label>Return Showroom:</label>
                <select
                    type="text"
                    required
                    value={Showroom}
                    onChange={(e) => setShowroom(e.target.value)}
                >
                    <option className='tohide' ></option>
                    {Data.map((item) => (
                        <option key={item} >{item}</option>))}

                </select>
                <input value="Confirm" type="submit" />
            </form>
        </div>
    )
}
export default RentForm;