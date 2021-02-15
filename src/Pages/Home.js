import React, { Component } from 'react'
import MyCarousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import { theme } from '../Theme/Theme'
import { temp } from '../Database/uploadData';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import MyList from '../Components/MyList';
import Loader from 'react-loader-spinner'
import { getByWord } from '../Database/getCollectionQuery'
import ContinueWatching from '../Components/ContinueWatching';
import "../CSS/Pages/Home.css"

//const list = ["Comedy", "Action", "Drama", "Romance", "Adventure", "Family", "Animated"]

export class Home extends Component {

    state = {
        uid: "",
        data: null,
        continue: null,
        email: null,
        name: null,
        photo: null
    }

    componentDidMount() {

        /*if(window.Android.getDeviceId()) {
            /*this.setState({ uid: window.Android.getUid() })
            this.setState({ email: window.Android.getEmail() })
            this.setState({ name: window.Android.getName() })
            this.setState({ photo: window.Android.getPhoto() })
            updateUser(window.Android.getDeviceId());
        }

        axios.get("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets").then(result => {
            this.setState({ data: result.data })
        })


        if( window.Android.getDeviceId()){
            getWatching("Users", window.Android.getDeviceId(), 'Watching').then(result=>{
                this.setState({ continue: result })
            })
        }*/   
        
        getByWord("Index", "Comedy").then(snap=>{
            this.setState({data:snap})
        })
        //temp();

    }

    render() {
        if (this.state.data) {
            return (
                <div className="w3-animate-bottom" >
                    <MyCarousel />
                    <Categories />

                    {
                        this.state.continue ? (
                            <ContinueWatching title="Continue Watching" data={this.state.continue} />
                        ) : (
                                <div></div>
                            )
                    }

                    {/*<Link to="/plans" >
                        <ButtonBase className="wrap" style={{ padding: "0px 10px", margin: "20px 0px" }} >
                            <div className="plans-button" >
                                <div style={{ fontSize: "20px" }} >
                                    NETFLIX FOR &#8377;10
                                    </div>
                                    <div>
                                    Get affordable subscriptions
                                    </div>
                                </div>
                        </ButtonBase>
                        <MyList title="Best In Comedy" filter='Comedy' data={this.state.data[0]} />
                        <MyList title="Kick-Ass Action" filter='Action' data={this.state.data[1]} />
                        <MyList title="Bets In Drama" filter='Drama' data={this.state.data[2]} />
                        <MyList title="RomComs" filter='Romance' data={this.state.data[3]} />
                        <MyList title="Lively Adventure" filter='Adventure' data={this.state.data[4]} />
                        <MyList title="Family And Love" filter='Family' data={this.state.data[5]} />
                        <MyList title="Animated" filter='Animated' data={this.state.data[6]} />
                    </Link>*/}
                    <MyList title="Best In Comedy" filter='Comedy' data={this.state.data} />
                    <div style={{ color: "grey" }} >
                        <div className="h7" >
                            Note : Demo App 1.3
                        </div>
                        <p style={{ padding: "20px" }} >
                            This is not a full representation of the app. Images and logo are not owned by MOSAIC.  
                        </p>
                    </div>
                    <div style={{ height: "60px" }} >

                    </div>
                </div>
            )
        } else {
            return (
                <div className="wrap" style={{ position: "absolute", top: "0", width: "100%", minHeight: "100vh" }}  >
                    <Loader
                        type="TailSpin"
                        color={theme.palette.primary.light}
                        height={50}
                        width={50}
                        timeout={100000} //3 secs
                    />
                </div>
            )
        }
    }
}

export default Home
