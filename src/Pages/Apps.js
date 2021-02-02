import React, { Component } from 'react'
import "../CSS/Pages/Apps.css"
import { getLatest } from '../Database/getCollectionQuery'
import MyList from '../Components/MyList';

export class Apps extends Component {
    state = {
        voot: null
    }

    componentDidMount() {
        getLatest("Index", 'Movie').then(snap => {
            this.setState({ voot: snap })
        })
    }

    render() {
        return (
            <div style={{ paddingTop: "20px" }} >
                <div className="my-grid-container" >
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fvoot.png?alt=media&token=3a85088f-817d-4053-96fb-4d1373ada778" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fzee5.png?alt=media&token=1d42762f-4b58-4da3-9418-72fa6383a83d" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://etimg.etb2bimg.com/photo/68918163.cms" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://play-lh.googleusercontent.com/mNX-Fl-1cgwBzuF8m8YFcaF7GGNUQAl5gLtH7eJNrYSZHYnw1GIVgTXSQT5K7OEM_1aE" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://static-s.aa-cdn.net/img/gp/20600004914162/qUBOlpmISAJAhgFQqjnCU27tm0sUDdj6vjdYpJ6vBi2e65gh7n0oWCivWuUasAmKga7s=s300" />
                    </div>
                </div>

                <div className="my-grid-container" >
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://play-lh.googleusercontent.com/iMIuUGAXsv9t48WrZ3GKJDvVv0qBhn9k8gizHeXZjlJ0I6AXjYGJyX5KzSfIq2i6PMg" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://play-lh.googleusercontent.com/dxc6rqZHigOTItU0u3i4aWOKN9pdszX-JlZK1tRatCOyT3JJD1AOW7TZ-hzKyk1tkxI" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://upload.wikimedia.org/wikipedia/en/f/fb/Aha_OTT_Logo.jpeg" />
                    </div>
                    <div className="grid-item wrap" >
                        <img className="app-icon" src="https://play-lh.googleusercontent.com/YR_MLsCVCaQxkwlvO6JsDHZR7pDI1hCI77GKWus3pM8AWWh0_ZbUvTKwCbNuO2_n4z4" />
                    </div>
                </div>

                <div style={{ marginTop: "30px" }} ></div>
                {
                    this.state.voot ? (
                        <div>
                            <div style={{ display: "flex" }} >
                                <div style={{ marginLeft: "20px", marginRight: "-10px" }} >
                                    <img alt="i" src="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fvoot.png?alt=media&token=3a85088f-817d-4053-96fb-4d1373ada778" width="50px" style={{ borderRadius: "5px" }} />
                                </div>
                                <div>
                                    <div className="h7" style={{ color: "grey" }} >
                                        Available on
                                    </div>
                                    <div style={{ margin: "0px 20px", fontSize: "25px", marginTop: "-5px" }} >
                                        VOOT
                                    </div>
                                </div>
                            </div>
                            <MyList data={this.state.voot} filter="Robert Downey Jr" />
                        </div>
                    ) : (
                            <div></div>
                        )
                }

                {
                    this.state.voot ? (
                        <div>
                            <div style={{ display: "flex" }} >
                                <div style={{ marginLeft: "20px", marginRight: "-10px" }} >
                                    <img alt="i" src="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fzee5.png?alt=media&token=1d42762f-4b58-4da3-9418-72fa6383a83d" width="50px" style={{ borderRadius: "5px" }} />
                                </div>
                                <div>
                                    <div className="h7" style={{ color: "grey" }} >
                                        Available on
                                    </div>
                                    <div style={{ margin: "0px 20px", fontSize: "25px", marginTop: "-5px" }} >
                                        ZEE5
                                    </div>
                                </div>
                                <div style={{position:"absolute", right:0, paddingRight:"10px"}} >
                                    See All 
                                </div>
                            </div>
                            <MyList data={this.state.voot} filter="Robert Downey Jr" />
                        </div>
                    ) : (
                            <div></div>
                        )
                }
                <div style={{height:"60px"}} >

                </div>
            </div>
        )
    }
}

export default Apps
