import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
//import { uploadData } from '../Database/uploadData';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import MyList from '../Components/MyList';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import { updateUser } from "../Database/logIn"

const list = [
    {
        title: 'Comedy Series To Watch',
        filter: ["Comedy", "Series"]
    },
    {
        title: 'Amzing Action',
        filter: ["Action", "Movie"]
    },
    {
        title: 'Drama Series',
        filter: ["Drama", "Series"]
    },
    {
        title: 'Fiction Series',
        filter: 'Fiction'
    },
    {
        title: 'By Netflix',
        filter: 'Netflix'
    },
    {
        title: 'Animated',
        filter: 'Animated'
    }
]

export class Home extends Component {

    state = {
        uid: "",
        data: null
    }

    constructor() {
        super();
        //uploadData();
    }

    componentDidMount() {

        /*if(window.Android.getUid()){
            this.setState({ uid: window.Android.getUid() })
            updateUser(window.Android.getUid(),window.Android.getName(), window.Android.getEmail(), window.Android.getDeviceId() );
        }*/

        axios.get("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets").then(result=>{
            this.setState({data:result.data})
        })

    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <MyAppBar uid={this.state.uid} />
                    <Carousel />
                    <Categories />
                    

                    <MyList title={list[0].title} data={this.state.data[0]} />
                    <MyList title={list[1].title} data={this.state.data[1]} />
                    <MyList title={list[2].title} data={this.state.data[2]} />
                    
                    <MyList title={list[5].title} data={this.state.data[5]} />

                </div>
            )
        } else {
            return (
                <div className="wrap" style={{ minHeight: "100vh" }} >
                    <Loader
                        type="Audio"
                        color="#212121"
                        height={50}
                        width={50}
                        timeout={3000} //3 secs
                    />
                </div>
            )
        }
    }
}

export default Home
