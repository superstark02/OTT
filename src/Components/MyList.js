import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
//import { Link } from 'react-router-dom'
import {Link } from "react-tiger-transition";
import getCollectionQuery, {getByWord} from '../Database/getCollectionQuery'
import shuffleArray from '../Database/shuffleArray'

export class MyList extends Component {

    state = {
        data: null
    }

    constructor(props) {
        super(props);
        if(props.filter.length > 2){
            getByWord("Index", props.filter).then(result=>{
                this.setState({ data: shuffleArray(result) })
            })
        }else{
            getCollectionQuery("Index", props.filter).then(result => {
                this.setState({ data: shuffleArray(result) })
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data ? (
                        <div>
                            <div className="h7" >
                                {this.props.title}
                            </div>


                            <div className="list-container" >
                                {
                                    this.state.data.map(item => {
                                        return (
                                            <div style={{ display: "inline-block" }} >

                                                <ButtonBase style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/"+item.id} 
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

export default MyList
