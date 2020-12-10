import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
//import { uploadData } from '../Database/uploadData';
import HollywoodMovies from '../Components/HollywoodMovies';
import TV from '../Components/tv';
import WebSeries from '../Components/WebSeries';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Latest from '../Components/Latest';
import MyList from '../Components/MyList';

export class Home extends Component {
    constructor() {
        super();
        //uploadData();
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <Carousel />
                <Categories />
                <Latest title="Latest" filter="2014" />
                <MyList title="Popular In Action" filter="Action" />
                <MyList title="Series To Watch" filter="Series" />
                <MyList title="Comedy" filter="Comedy" />
                <MyList title="Drama" filter="Drama" />
                <MyList title="Fiction" filter="Fiction" />
                <MyList title="By Netflix" filter="Netflix" />
            </div>
        )
    }
}

export default Home
