import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import getSubCollection from '../Database/getSubCollection'

export class TV extends Component {
    state = {
        data: null
    }

    componentDidMount(){
        getSubCollection("Hollywood", "TV", "Family").then(snap => {
            this.setState({data:snap})
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <div className="h7" >
                                TV Series 
                            </div>

                            <div className="list-container" >
                                {
                                    this.state.data.map(item => {
                                        return (
                                            <div className="list-item wrap" >
                                                <ButtonBase style={{ height: "100%" }}>
                                                    <Link to={"/display/"+item.industry+"/"+item.platform+"/"+item.genre+"/"+item.id} 
                                                    style={{ height: "100%" }}  >
                                                        <img height="100%" width="100%" src={item.poster} alt="i" />
                                                    </Link>
                                                </ButtonBase>
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

export default TV
