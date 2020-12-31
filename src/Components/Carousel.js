import React from 'react'
import "../CSS/Components/Carousel.css"
import Slider from 'infinite-react-carousel';
import thejudge from '../Images/Cover/tj.jpg'
import sg2 from '../Images/Cover/sg2.jpg';
import ww from '../Images/Cover/ww84.jpg'
import u from '../Images/Cover/6u.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

const images = [
    {
        image: ww,
        link: "/display/wonderwoman1984"
    },
    {
        image: sg2,
        link: "/display/sacredgames"
    },
    {
        image: thejudge,
        link: "/display/thejudge"
    },
    {
        image: u,
        link: "/display/6underground"
    },
]

const settings = {
    arrows: false,
    autoplay: false,
    centerMode: true,
};

export function MyCarousel() {

    return (
        <div style={{ paddingBottom: "20px" }} >
            <div style={{ minHeight: "17vh" }} >
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


export default MyCarousel
