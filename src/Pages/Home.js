import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import MyList from '../Components/MyList';
import Popular from '../Components/Popular';
//import { uploadData } from '../Database/uploadData';
import HollywoodMovies from '../Components/HollywoodMovies';
import TV from '../Components/tv';

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
                <Popular />
                <TV/>
                <HollywoodMovies />
            </div>
        )
    }
}

export default Home
