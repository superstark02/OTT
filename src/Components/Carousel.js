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
        image: "https://static.abplive.com/wp-content/uploads/sites/2/2021/01/07142145/kaagaz.jpg",
        link: "/display/wonderwoman1984"
    },
    {
        image: "https://assets.thehansindia.com/h-upload/2020/10/02/1002913-khaali-peeli-movie-review.webp",
        link: "/display/sacredgames"
    },
    {
        image: "https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/11/27/Pictures/_919e3394-d34b-11e7-a032-ea4e291afd66.jpg",
        link: "/display/thejudge"
    },
    {
        image: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KGF-chapter2.jpg?itok=wpYqmIzZ",
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
                                    <div className="wrap" style={{ paddingBottom: "20px", backgroundImage:item.image, backgroundSize:"cover", backgroundPosition:"center" }} >
                                        
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
