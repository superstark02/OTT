import React, { Component } from 'react'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import getCollection from '../Database/getCollection'
import SubAppBar from '../Components/SubAppBar'
import '../CSS/Pages/Search.css'

var filteredClass = null

export class SearchPage extends Component {

    state = {
        shows: [],
        search: null
    }

    componentDidMount() {
        getCollection("Index").then(snap => {
            this.setState({ shows: snap })
        })
    }

    render() {
        filteredClass = this.state.shows

        if (this.state.search && this.state.shows) {
            filteredClass = this.state.shows.filter(
                item =>
                    item.id.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            )
        }

        return (
            <div>
                <SubAppBar/>
                <div className="wrap" >
                    <input placeholder="Search by name, date, genre..."
                        className="search-input"
                        onChange={(e) => { this.setState({ search: e.target.value }) }}
                        value={this.state.search}
                    />
                </div>

                <div className="grid-container" >

                    {
                        filteredClass &&
                        filteredClass.map(item => {
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

            </div>
        )
    }
}

export default SearchPage
