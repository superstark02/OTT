import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import getSubCollection from '../Database/getSubCollection'

export class HollywoodMovies extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        getSubCollection("Hollywood", "Movie", "Family").then(snap => {
            this.setState({ data: snap })
            
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <div className="h7" >
                                Hollywood Movies
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

export default HollywoodMovies
