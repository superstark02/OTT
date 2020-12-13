import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import { uploadData } from '../Database/uploadData';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Latest from '../Components/Latest';
import MyList from '../Components/MyList';
//import {updateUser} from "../Database/logIn"

export class Home extends Component {

    state = {
        uid: ""
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
        
    }

    render() {
        return (
            <div>
                <MyAppBar uid={this.state.uid} />
                <Carousel />
                <Categories />
                <Latest title="Latest" filter="2014" />
                <MyList title="Comedy Series To Watch" filter={["Comedy", "Series"]} />
                <MyList title="Action Films" filter={["Action", "Movie"]} />
                <MyList title="Drama Series" filter={["Drama", "Series"]} />
                <MyList title="Fiction Series" filter="Fiction" />
                <MyList title="By Netflix" filter="Netflix" />
                <MyList title="Animated For Kids" filter="Animated" />
            </div>
        )
    }
}

export default Home
