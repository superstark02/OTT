import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import getSubCollection from '../Database/getSubCollection'
//import {makeIndex} from "../Database/makeIndex"

export class WebSeries extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        getSubCollection("Bollywood", "Web", "Family").then(snap => {
            this.setState({ data: snap })
            /*for( var i = 0; i < snap.length; i++){
                var data = {
                    id: snap[i].id,
                    industry: snap[i].industry,
                    platform: snap[i].platform,
                    genre: snap[i].genre,
                    poster: snap[i].poster,
                    name: snap[i].name
                }
                makeIndex(snap[i].id, data).then(result=>{
                    if(result>0){
                        console.log("Done")
                    }
                })
            }*/
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <div className="h7" >
                                Web Series
                            </div>

                            <div className="list-container" >
                                {
                                    this.state.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >

                                                <ButtonBase style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/" + item.industry + "/" + item.platform + "/" + item.genre + "/" + item.id}
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                                        </div>
                                                    </Link>
                                                </ButtonBase>
                                                {/*<div style={{ margin: "10px 0px", display: "flex" }} >
                                                    <div>
                                                        <img className="app-logo" src={item.app} alt="app" width="30px" />
                                                    </div>
                                                    <div style={{ marginLeft: "5px" }} >
                                                        <div>
                                                            {item.name}
                                                        </div>
                                                        <div style={{ fontSize: "10px" }} className="rate" >
                                                            {item.year}
                                                        </div>
                                                    </div>
                                                </div>*/}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                            <div></div>
                        )
                }
            </div>
        )
    }
}

export default WebSeries
