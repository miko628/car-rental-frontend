
import React, { useCallback, useState, useEffect } from 'react';
const CarCheckbox = (props) => {
    const [category,setcategory] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const fetchDataHandler = useCallback(async () => {
        try {
            const result = await fetch(`http://localhost:8080/filter`)

            if (!result.ok) {
                throw new Error("Nie uda³o siê pobraæ danych")
            }

            const resultData = await result.json()
            setcategory(resultData)

        } catch (err) {
            console.log(err.message);
        }

    }, [])

    useEffect(() => {
        fetchDataHandler()
    }, []);
    return (

        <div id="checkboxFrame">
            {
                category.map((id, description) =>

                    <label>
                        <input type="checkbox" key={id} style={{ cursor: "pointer" }}
                            onChange={() => { setIsChecked(!isChecked); }}> </input>
                        <p className="checkbox-text">{category.description}</p>
                        <span className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                            aria-hidden="true" ></span>
                    </label>
                )
            }
        </div>
    )
}
export default CarCheckbox;;