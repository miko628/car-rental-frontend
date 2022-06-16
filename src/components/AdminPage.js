import React, { useEffect, useState } from 'react';
/*import RentForm from './RentForm';
import FindForm from './FindForm';*/
import AuthService from '../services/auth.service';
import "./UserPage.css"

export default function AdminPage() {
   
    const [brand, setBrand] = useState("");
    const [seats, setSeats] = useState("");
    const [cartype, setCarType] = useState("");
    const [engine, setEngine] = useState("");
    const [image, setImage] = useState("");
    const [fuel,setFuel] = useState("");
    const [model, setModel] = useState("");
    const [plate, setPlate] = useState("");
    const [price, setPrice] = useState("");
    const [vin, setVin] = useState("");
    const [transmission, setTransmission] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [showroom, setShowroom] = useState("");
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);


   

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);



    const onChangeBrand = (e) => {
        const brand = e.target.value;
        setBrand(brand);
        // console.log(username)
    };

    const onChangeEngine = (e) => {
        const engine = e.target.value;
        setEngine(engine);
        // console.log(email)
    };
    const onChangeModel = (e) => {
        const model = e.target.value;
        setModel(model);
    };
    const onChangeCarType = (e) => {
        const cartype = e.target.value;
        setCarType(cartype);
    };
    const onChangeTransmission = (e) => {
        const transmission = e.target.value;
        setTransmission(transmission);
    };

    const onChangeVin = (e) => {
        const vin = e.target.value;
        setVin(vin);
        
    };
    const onChangeFuel = (e) => {
        const fuel = e.target.value;
        setFuel(fuel);
    };
    const onChangeLatitude = (e) => {
        const latitude = e.target.value;
        setLatitude(latitude);
    };
    const onChangeLongitude = (e) => {
        const longitude = e.target.value;
        setLongitude(longitude);
    };
    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price);
    };
    const onChangePlate = (e) => {
        const plate = e.target.value;
        setPlate(plate);
    };
    const onChangeImage = (e) => {
        const image = e.target.value;
        setImage(image);
    };
    const onChangeSeats = (e) => {
        const seats = e.target.value;
        setSeats(seats);
    };
    const onChangeShowroom = (e) => {
        const showroom = e.target.value;
        setShowroom(showroom);
    };
    const submitCarHandler = e => {
        e.preventDefault();
        console.log(brand)
        console.log(cartype)
        console.log(engine)
        console.log(image)
        console.log(fuel)
        console.log(model)
        console.log(plate)
        console.log(price)
        console.log(seats)
        console.log(transmission)
        console.log(vin)

    }
    const submitShowroomHandler = e => {
        e.preventDefault();
        console.log(latitude)
        console.log(longitude)
        console.log(showroom)


    }

    return (
        <div className="user-container">
            <div>
                <h2 className='Admin Page'>Admin Page</h2>
                
                <form onSubmit={submitCarHandler} className="form">
                   
                    <div className="form-inner">
                        <h3 className='car-add'>Car Add</h3>
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input  name="brand" id="brand" value={brand}  /*defaultValue={currentEmail}*/
                                onChange={onChangeBrand} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CarType">Car Type:</label>
                            <input name="CarType" id="CarType" value={cartype}
                                onChange={onChangeCarType} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Engine">Engine:</label>
                            <input name="Engine" id="Engine" value={engine}
                                onChange={onChangeEngine} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Image:</label>
                            <input type="file" name="Image" id="Image" value={image}
                                onChange={onChangeImage} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Fuel">Fuel:</label>
                            <input name="Fuel" id="Fuel" value={fuel}
                                onChange={onChangeFuel} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Model">Model:</label>
                            <input name="Model" id="Model" value={model}
                                onChange={onChangeModel} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Plate">Plate:</label>
                            <input name="Plate" id="Plate" value={plate}
                                onChange={onChangePlate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Price">Price:</label>
                            <input name="Price" id="Price" value={price}
                                onChange={onChangePrice} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Seats">Seats:</label>
                            <input name="Seats" id="Seats" value={seats}
                                onChange={onChangeSeats} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Transmission">Transmission:</label>
                            <input name="Transmission" id="Transmission" value={transmission}
                                onChange={onChangeTransmission} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Vin">Vin:</label>
                            <input name="Vin" id="Vin" value={vin}
                                onChange={onChangeVin} />
                        </div>
                        <input className="form-submit" type="submit" value="Add car" />
                    </div>
                </form>
                <form onSubmit={submitShowroomHandler} className="form">
                    <div className="form-inner">
                        <h3 className='showroom-add'>Showroom Add</h3>
                        <div className="form-group">
                            <label htmlFor="latitude">Latitude:</label>
                            <input name="latitude" id="latitude" value={latitude}
                                onChange={onChangeLatitude} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitude:</label>
                            <input name="longitude" id="longitude" value={longitude}
                                onChange={onChangeLongitude} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="showroom">Showroom name:</label>
                            <input name="showroom" id="showroom" value={showroom}
                                onChange={onChangeShowroom} />
                        </div>
                        <input className="form-submit" type="submit" value="Add Showroom" />
                    </div>
                </form>
            </div>
        </div>
    )
}