import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
//import { uploadData } from '../Database/uploadData';
import HollywoodMovies from '../Components/HollywoodMovies';
import TV from '../Components/tv';
import WebSeries from '../Components/WebSeries';

export class Home extends Component {
    constructor(){
        super();
        //uploadData();
    }
    render() {
        return (
            <div>
                <MyAppBar />
                <Carousel />
                <Categories />
                <TV/>
                <WebSeries />
                <HollywoodMovies />
            </div>
        )
    }
}

export default Home
