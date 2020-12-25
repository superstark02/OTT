import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
//import { Link } from 'react-router-dom'
import { Link } from "react-tiger-transition";
import getNextData from '../Database/getNextData';

export class MyList extends Component {

    state = {
        data: null
    }

    loadMore = () => {
        getNextData(this.state.data[this.state.data.length-1].year, this.props.filter).then(result=>{
            console.log(result)
            var temp = this.state.data;

            result.forEach(element => {
                temp.push(element)
            });

            this.setState({data:temp})
        })
    }

    componentDidMount(){
        this.setState({data: this.props.data})
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
                                                <ButtonBase className="w3-animate-opacity" style={{ height: "100%", marginRight: "20px" }}>
                                                    <Link to={"/display/" + item.id}
                                                        transition='glide-left'
                                                        style={{ height: "100%" }}  >
                                                        <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                                        </div>
                                                    </Link>
                                                </ButtonBase>
                                            </div>
                                        )
                                    })
                                }
                                <div style={{ display: "inline-block" }} >
                                    <ButtonBase className="w3-animate-opacity" onClick={this.loadMore} style={{ height: "100%", marginRight: "20px" }}>
                                        <div className="wrap" >
                                            Load More
                                        </div>
                                    </ButtonBase>
                                </div>
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
