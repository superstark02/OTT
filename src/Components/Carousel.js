import React from 'react'
import "../CSS/Components/Carousel.css"
import Slider from 'infinite-react-carousel';

const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const settings = {
    arrows: false,
    autoplay: true
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
