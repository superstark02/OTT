import React, { Component } from 'react'
import bhaaghi from '../Images/Baaghi.jpg'
import "../CSS/Components/Carousel.css"


export class Carousel extends Component {
    render() {
        return (
            <div style={{ padding: "32px 10px", display: "flex", flexWrap: "nowrap", overflowX: "scroll" }} >
                <div style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }} >
                    <img alt="carousel" width="100%" height="100%" src={bhaaghi} style={{ borderRadius: "10px" }} />
                </div>
            </div>
        )
    }
}

export default Carousel
