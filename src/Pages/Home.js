import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
//import { uploadData } from '../Database/uploadData';
import HollywoodMovies from '../Components/HollywoodMovies';
import TV from '../Components/tv';
import WebSeries from '../Components/WebSeries';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export class Home extends Component {
    constructor() {
        super();
        //uploadData();
        this.state = {
            show: true
        };
        this.trigger = this.trigger.bind(this);
    }

    trigger() {
        setInterval(() => {
            this.setState({ show: true })
        }, 2000);
    }


    render() {
        return (
            <div>
                {
                    this.state.show ? (
                        <div>
                            <MyAppBar />
                            <Carousel />
                            <Categories />
                            <TV />
                            <WebSeries />
                            <HollywoodMovies />
                        </div>
                    ) : (
                            <div className="wrap" style={{height:"100vh"}} >
                                <Loader
                                    type="TailSpin"
                                    color="#FFFFFF"
                                    height={50}
                                    width={50}
                                    timeout={3000} //3 secs

                                />
                            </div>
                        )
                }
            </div>
        )
    }
}

export default Home
