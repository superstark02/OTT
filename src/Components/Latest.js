import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { getLatest } from '../Database/getCollectionQuery'
import shuffleArray from '../Database/shuffleArray'

export class Latest extends Component {

    state = {
        data: []
    }

    constructor(props) {
        super(props);
        getLatest("Index", "2014").then(result => {
            this.setState({ data: shuffleArray(result) })
        })
    }

    render() {
        return (
            <div>
                <div className="h7" >
                    {this.props.title}
                </div>


                <div className="list-container" >
                    {
                        this.state.data.map(item => {
                            return (
                                <ButtonBase style={{ height: "100%", marginRight: "20px" }}>
                                    <Link to={"/display/" + item.id}
                                        style={{ height: "100%" }}  >
                                        <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                        </div>
                                    </Link>
                                </ButtonBase>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}

export default Latest
