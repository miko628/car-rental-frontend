import React, { useCallback, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './Slider.css';
import axios from "axios";

const ReactCardSlider = (props) => {

    const [cars, setCars] = useState([])

    const componentDidMount = () => {
        axios.get(`http://localhost:8080/file`)
          .then(res => {
            const cars = res.data;
            this.setState({ cars });
            console.log("mamy to")
        })
    }

    const fetchData = useCallback(async () => {
        try {
            const result = await axios.get(`http://localhost:8080/file`)
            //const result = await authAxios.get(`/car/models`)
            setCars(result.data)
            console.log("mamy to")
        } catch (err) {
            setRequestError(err.message);
        }

    })


    const slides = [{ image: 'https://picsum.photos/200/300', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/300', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/400', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/300/300', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/500', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/600', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/100', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/100/300', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/400', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/700', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/600', title: "this is a title", description: "This is description analiza" },
        { image: 'https://picsum.photos/200/200', title: "this is a title", description: "This is description analiza" }];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 300;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    }

    return (
        <div id="main-slider-container">
            {
                componentDidMount()
                //fetchData()
            }
            <MdChevronLeft size={40} className="slider-icon left" onClick={ slideLeft}/>
            <div id='slider'>
                {
                    slides.map((slide, index) => {
                        return (
                            <div className="slider-card" key={index}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover'}}> </div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })}
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
        )
}
export default ReactCardSlider;
//42~~