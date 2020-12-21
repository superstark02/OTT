import React from 'react'
import "../CSS/Components/Carousel.css"
import Slider from 'infinite-react-carousel';
import thejudge from '../Images/Cover/tj.jpg'
import opm from '../Images/Cover/tvf.jpg'
import sg2 from '../Images/Cover/sg2.jpg'
import { Link } from 'react-router-dom';

const images = [
    {
        image: thejudge,
        link: "/display/thejudge"
    },
    {
        image: sg2,
        link: "/display/sacredgames"
    },
    {
        image: opm,
        link: "/display/tvftripling"
    },
]

const settings = {
    arrows: false,
    autoplay: true,
};

export function Carousel() {

    return (
        <div style={{ paddingBottom: "20px" }} >
            <div style={{ minHeight: "25vh" }} >
                <Slider {...settings}>
                    {
                        images.map(item => {
                            return (
                                <Link to={item.link} >
                                    <div className="wrap" style={{ paddingBottom: "20px" }} >
                                        <img alt="i" src={item.image} width="100%" style={{ borderRadius: "5px", boxShadow: "0px 10px 20px rgba(0,0,0,0.5) " }} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    );
}


export default Carousel
