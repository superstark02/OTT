import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import getSubCollection from '../Database/getSubCollection'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../CSS/Pages/Search.css'

export class WatchLater extends Component {
    state = {
        data: null,
        message: ""
    }
    componentDidMount() {
        if (window.Android.getDeviceId()) {
            getSubCollection('Users', window.Android.getDeviceId(), 'Watchlist').then(result => {
                this.setState({ data: result });
            })
        } else {
            this.setState({ message: "Please Sign To Add Items" })
        }
    }
    render() {
        return (
            <div>
                <SubAppBar  name='Watch Later'  />
                <div className="grid-container" >
                    {
                        this.state.data &&
                        this.state.data.map(item => {
                            return (
                                <div style={{margin:"10px 0px"}} className="wrap w3-animate-opacity" >
                                    <ButtonBase style={{ height: "100%" }}>
                                        <Link to={"/display/" + item.id}
                                            style={{ height: "100%" }}  >
                                            <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                            </div>
                                        </Link>
                                    </ButtonBase>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wrap" style={{ color: "grey" }} >
                    {this.state.message}
                </div>
            </div>
        )
    }
}

export default WatchLater
