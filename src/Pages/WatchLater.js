import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import getSubCollection from '../Database/getSubCollection'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

export class WatchLater extends Component {
    state = {
        data: null,
        message: ""
    }
    componentDidMount() {
        if(window.Android.getUid()){
            getSubCollection('Users', window.Android.getUid(), 'Watchlist').then(result => {
                this.setState({ data: result });
            })
        }else{
            this.setState({message:"Please Sign To Add Items"})
        }
    }
    render() {
        return (
            <div>
                <SubAppBar />
                <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: 'space-evenly' }} >

                    {
                        this.state.data &&
                        this.state.data.map(item => {
                            return (
                                <div style={{ width: "fit-content", margin: "10px 0px" }} className="wrap w3-animate-opacity" >
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
                <div className="wrap" style={{color:"grey"}} >
                    {this.state.message}
                </div>
            </div>
        )
    }
}

export default WatchLater
