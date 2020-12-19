import React from 'react'
import "../CSS/Components/Carousel.css"
import Slider from 'infinite-react-carousel';
import thejudge from '../Images/Cover/tj.jpg'
import opm from '../Images/Cover/opm.jpg'
import sg2 from '../Images/Cover/sg2.jpg'

const images = [thejudge,sg2,opm]

const settings = {
    arrows: false,
    autoplay: true,
};

export function Carousel() {

    return (
        <div style={{paddingBottom:"20px"}} >
            <div>
                <Slider {...settings}>
                    {
                        images.map(item => {
                            return (
                                <div className="wrap" style={{paddingBottom:"20px"}} >
                                    <img alt="i" src={item} width="100%" style={{ borderRadius: "5px", boxShadow: "0px 10px 20px rgba(0,0,0,0.5) " }} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    );
}


export default Carousel
