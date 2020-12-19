import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
//import { Link } from 'react-router-dom'
import { Link } from "react-tiger-transition";

export class ContinueWatching extends Component {

    state = {
        data: null
    }

    render() {
        return (
            <div>
                {
                    this.props.data ? (
                        <div>
                            <div className="h7" >
                                {this.props.title}
                            </div>


                            <div className="list-container" >
                                {
                                    this.props.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >

                                                <ButtonBase style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/play/"+ item.id + "/" + item.season + "/" + item.episode}
                                                        transition='glide-left'
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                                        </div>
                                                    </Link>
                                                </ButtonBase>
                                                {/*<div style={{ margin: "10px 0px", display: "flex" }} >
                                                    <div>
                                                        <img src={item.app} className="app-logo" alt="app" width="30px" />
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
                            <div>

                            </div>
                        )
                }
            </div>
        )
    }
}

export default ContinueWatching
