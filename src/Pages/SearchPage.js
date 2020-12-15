import React, { Component } from 'react'
import { ArrowBackRounded } from '@material-ui/icons'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import getCollection from '../Database/getCollection'

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
                <div style={{ display: "flex", padding: "10px", alignItems: "center" }} >
                    <ArrowBackRounded style={{ margin: "0px 5px" }} onClick={() => { window.history.back() }} />
                    <input placeholder="Search by name, date, genre..."
                        className="search-input"
                        onChange={(e) => { this.setState({ search: e.target.value }) }}
                        value={this.state.search}
                    />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: 'space-evenly' }} >

                    {
                        filteredClass &&
                        filteredClass.map(item => {
                            return (
                                <div style={{ width: "fit-content", margin: "10px 0px" }} className="wrap" >
                                    <ButtonBase style={{ height: "100%" }}>
                                        <Link to={"/display/" + DataTransferItem.id}
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
