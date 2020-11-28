import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import v from "../Images/MyList/vikings.jpg"
import mf from "../Images/MyList/mf.jpg"
import f from "../Images/MyList/flash.jpg"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

export class MyList extends Component {
    render() {
        return (
            <div>
                <div className="h7" >
                    My List
                </div>

                <div className="list-container" >
                    <div className="list-item wrap" >
                        <ButtonBase style={{ height: "100%" }}>
                            <Link  style={{ height: "100%" }}  >
                                <img height="100%" width="100%" src={v} alt="i" />
                            </Link>
                        </ButtonBase>
                    </div>
                    <div className="list-item wrap" >
                        <ButtonBase style={{ height: "100%" }}>
                            <Link to="/display/Hollywood/TV/Family/modernfamily" style={{ height: "100%" }} >
                                <img height="100%" width="100%" src={mf} alt="i" />
                            </Link>
                        </ButtonBase>
                    </div>
                    <div className="list-item wrap" >
                        <ButtonBase style={{ height: "100%" }}>
                            <Link style={{ height: "100%" }} >
                                <img height="100%" width="100%" src={f} alt="i" />
                            </Link>
                        </ButtonBase>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyList
