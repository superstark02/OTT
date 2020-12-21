import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import logo from "../Images/logo512.png"

export class About extends Component {
    render() {
        return (
            <div className="w3-animate-bottom" >
                <SubAppBar />
                <div style={{ padding: "0px 20px" }} >
                    <h2>
                        About Us
                    </h2>
                    <p style={{ marginBottom: "30px" }} >
                        Mosaic is an online video streaming platform which offers over
                        100,000 hours of TV content and movies across 9 languages, and every
                        major sport covered live. Highly evolved video streaming technology and a
                        high attention to quality of experience across devices and platforms, make MOSAIC
                        the most complete video destination for Over The Top (OTT) video consumers.
                    </p>
                </div>
                <div style={{ backgroundColor: "white", padding: "20px", color: "#282828" }} >
                    <div className="wrap" >
                        <img alt="i" src={logo} style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.5))", margin:"30px 0px" }} width="30%" />
                    </div>
                    <h4>
                        A Video Experience Like No Other
                    </h4>
                    <p>
                        Adaptive video streaming technology ensuring best possible experience.
                    </p>
                    <div className="wrap" >
                        <img alt="i" src="https://mymosaic.in/static/media/video.c96ce9dc.jpeg" style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.5))", borderRadius: "10px", marginBottom:"30px" }} width="90%" />
                    </div>


                    <h4>
                        Smart Search
                    </h4>
                    <p>
                        Optimized content to reduce complexity and delay in accessing content.
                    </p>
                    <div className="wrap" >
                        <img alt="i" src="https://mymosaic.in/static/media/search.56b1f1e3.png" style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.2))", borderRadius: "10px", marginBottom:"30px" }} width="70%" />
                    </div>

                    <h4>
                        Unlimited movies, TV shows and more.
                    </h4>
                    <p>
                        We offer popular TV, movies and knowledge-based content from India and the world. With content in 8 languages, spanning 15 productions.
                    </p>
                    <div className="wrap" >
                        <img alt="i" src="https://mymosaic.in/static/media/otts.62dbc950.png" style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.5))", borderRadius: "10px", marginBottom:"30px" }} width="90%" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About
