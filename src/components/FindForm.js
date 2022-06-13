import React from 'react';
import { useState } from 'react';
import './forms.css'

function FindForm() {
    const [Brand, setBrand] = useState('');
    const [Showroom, setShowroom] = useState('');
    const [Gearbox, setGearbox] = useState('');
    const submitHandler=e=>
    {
        e.preventDefault();




        console.log({ Showroom })
        console.log({ Brand })
        console.log({ Gearbox })
    }
    return (
        <form onSubmit={submitHandler}>
        <div id='form-finding'>
            <h2>Finding form</h2>
            
                <label>Showroom:</label>
                <input
                    type="text"
                    required
                    value={Showroom}
                    onChange={(e) => setShowroom(e.target.value)}
                />
                <label>Brand:</label>
                <input
                    type="text"
                    required
                    value={Brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <label>Gearbox:</label>
                <input
                    type="text"
                    required
                    value={Gearbox}
                    onChange={(e) => setGearbox(e.target.value)}
                />
                <input value="Find" type="submit" />
            </div>
            </form>
        
    )
}
export default FindForm;
