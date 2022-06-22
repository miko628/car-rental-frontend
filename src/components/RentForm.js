import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import './forms.css'
import AuthService from '../services/auth.service';

function RentForm({ rentCarId }) {
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

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log( username)
        console.log({ selectedcollDate })
        console.log({ selectedretDate })
        console.log({ Showroom })
        
        const response = await axios
        .delete("http://localhost:8080/cars/remove/" + carIdRemove, {}, {});
        if (response) {
            if(response.status==200){
                setPopupMessage("Car removed!");
            } else {
                setPopupMessage("Call failed");
            }
            setPopupTrigger(true)
        }
        return response;
    }
    const submitCarRemoveHandler = async (e) => {
        e.preventDefault();

        const response = await axios
        .delete("http://localhost:8080/cars/remove/" + carIdRemove, {}, {});
        if (response) {
            if(response.status==200){
                setPopupMessage("Car removed!");
            } else {
                setPopupMessage("Call failed");
            }
            setPopupTrigger(true)
        }
        return response;
    }

    return (
        <div id='form-control'>
            {rentCarId ? (
                <div>
                    {console.log("rent: " + rentCarId)}
                    <h2>Reservation form</h2>
                    <form onSubmit={submitHandler}>
        
                        <label>Car collection date and time:</label>
                        <DatePicker
                            selected={selectedcollDate}
                            onChange={(date) => setSelectedcollDate(date)}
                            dateFormat="dd/MM/yyyy "
                            minDate={new Date}
                            required
                            placeholderText="Date of collecting car"
                        />
        
                        <label>Car return date and time:</label>
                        <DatePicker
                            selected={selectedretDate}
                            onChange={date => setSelectedretDate(date)}
                            dateFormat="dd/MM/yyyy "
                            required
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
            ) : (
                <div>
                {console.log("rent: " + rentCarId)}
                </div>
            )}
        </div>
    )
}
export default RentForm;