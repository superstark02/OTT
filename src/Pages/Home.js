import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import { theme } from '../Theme/Theme'
//import { uploadData } from '../Database/uploadData';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import MyList from '../Components/MyList';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import { updateUser } from "../Database/logIn"
import ContinueWatching from '../Components/ContinueWatching';

//  const list = ["Comedy", "Action", "Drama", "Romance", "Adventure", "Family", "Animated"]

export class Home extends Component {

    state = {
        uid: "",
        data: null,
        continue: null,
        email: null,
        name: null
    }

    constructor() {
        super();
        //uploadData();
    }

    componentDidMount() {

        /*if (window.Android.getUid()) {
            this.setState({ uid: window.Android.getUid() })
            this.setState({ email: window.Android.getEmail() })
            this.setState({ name: window.Android.getName() })
            updateUser(window.Android.getUid(), window.Android.getName(), window.Android.getEmail(), window.Android.getDeviceId());
        }*/

        axios.get("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets").then(result => {
            this.setState({ data: result.data })
        })

        axios.post("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/continue-watching", {
            uid: "a"//window.Android.getUid()
        }).then(result => {
            this.setState({ continue: result.data })
        })

    }

    render() {
        if (this.state.data) {
            return (
                <div className="w3-animate-bottom" >
                    <MyAppBar uid={this.state.uid} email={this.state.email} name={this.state.name} />
                    <Carousel />
                    <Categories />

                    {
                        this.state.continue ? (
                            <ContinueWatching title="Continue Watching" data={this.state.continue} />
                        ) : (
                                <div></div>
                            )
                    }

                    <MyList title="Comedy" filter='Comedy' data={this.state.data[0]} />
                    <MyList title="Action" filter='Action' data={this.state.data[1]} />
                    <MyList title="Drama" filter='Drama' data={this.state.data[2]} />
                    <MyList title="Romance" filter='Romance' data={this.state.data[3]} />
                    <MyList title="Adventure" filter='Adventure' data={this.state.data[4]} />
                    <MyList title="Family" filter='Family' data={this.state.data[5]} />
                    <MyList title="Animated" filter='Animated' data={this.state.data[6]} />
                </div>
            )
        } else {
            return (
                <div className="wrap" style={{ minHeight: "100vh" }} >
                    <Loader
                        type="TailSpin"
                        color={theme.palette.primary.light}
                        height={50}
                        width={50}
                        timeout={10000} //3 secs
                    />
                </div>
            )
        }
    }
}

export default Home
