import React, { Component } from 'react'
import { ArrowBackRounded } from '@material-ui/icons'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import getCollection from '../Database/getCollection'

var filteredClass = null
export class SearchPage extends Component {

    state = {
        shows: null,
        search: null
    }

    componentDidMount() {
        getCollection("Index").then(snap => {
            this.setState({ shows: snap })
            console.log(snap)
        })
    }

    render() {
        filteredClass = this.state.shows

        if (this.state.search && this.state.shows ) {
            filteredClass = this.state.shows.filter(
                item =>
                    item.id.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
            )
        }

        return (
            <div>
                <div style={{display:"flex", padding: "10px", alignItems:"center" }} >
                    <ArrowBackRounded style={{ margin: "0px 5px" }} />
                    <input placeholder="You may find the content you are looking for.."  
                    className="search-input"
                    onChange={(e)=>{this.setState({search:e.target.value})}}
                    value={this.state.search}
                     />
                </div>

                <div style={{display:"flex", flexWrap:"wrap", padding:"10px"}} >
                    {
                        filteredClass &&
                        filteredClass.map(item => {
                            return (
                                <div style={{width:"50%", margin:"10px 0px"}} className="wrap" >
                                    <div>
                                        <ButtonBase style={{ height: "100%", marginRight: "20px" }}>
                                            <Link to={"/display/" + item.industry + "/" + item.platform + "/" + item.genre + "/" + item.id}
                                                style={{ height: "100%" }}  >
                                                <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                                </div>
                                            </Link>
                                        </ButtonBase>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default SearchPage
