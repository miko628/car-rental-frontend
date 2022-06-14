import React from 'react';
import axios from "axios";
import './forms.css'
import { useCallback, useState, useEffect } from 'react';
import Table from './Table';

function FindForm() {
    const [showrooms, setShowrooms] = useState([])
    const [data, setData] = useState([])
    const [showroom, setShowroom] = useState('');

    const API_URL = "http://localhost:8080/table";

    const fetchDataHandler = useCallback(async () => {
        try {
            const result = await fetch('http://localhost:8080/showroom/names')

            if (!result.ok) {
                throw new Error("Nie uda�o si� pobra� danych")
            }

            const resultData = await result.json()
            setShowrooms(resultData)

        } catch (err) {
            console.log(err.message);
        }

    }, [])

    const onChangeShowroom = (e) => {
        const showroom = e.target.value;
        setShowroom(showroom);
        // console.log(username)
    };

    useEffect(() => {

        fetchDataHandler()
        console.log({ showrooms })
       /* Data.filter(val => {
            if (val.name.toLowerCase().includes(Showroom.toLowerCase())) {
                setOutput(output => [...output, val])
            }
        })
 */


    }, []);

    const submitHandler2 = e => {
        e.preventDefault();
        fetch('http://localhost:8080/table', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(showroom)
        }).then(()=> { console.log({showroom})})

    }

    const submitHandler = async (showroom) => {
        const response = await axios
            .post(API_URL, {
                showroom
            });
        
        console.log(JSON.stringify(response.data))
        setData(JSON.stringify(response.data))
        //return response.data;
    };
    



    return (
        <div>
            {(data.length != 0) ? (
                <Table data={data}/>
            ) : (
            <form onSubmit={submitHandler}>
                <div id='form-finding'>
                    <h2>Finding form</h2>

                    <label>Showroom:</label>
                    <select
                        type="text"
                        required
                        value={showroom}
                        onChange={onChangeShowroom}
                    >
                    <option></option>
                        {showrooms.map((item) => (
                            <option key={item} >{item}</option>))}
        
                    </select>
                    {/* {console.log({showrooms})} */}
                    <input value="Find" type="submit" />
                </div>
            </form>)
            }
        </div>

    )
}
export default FindForm;
