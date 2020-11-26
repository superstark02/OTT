import React, { Component } from 'react'
import "../CSS/Components/MyList.css"
import v from "../Images/MyList/vikings.jpg"
import mf from "../Images/MyList/mf.jpg"
import f from "../Images/MyList/flash.jpg"

export class Popular extends Component {
    render() {
        return (
            <div>
                <div className="h7" >
                    Popular
                </div>

                <div className="list-container" >
                    <div className="list-item wrap" >
                        <img height="100%" width="100%" src={v} alt="i" />
                    </div>
                    <div className="list-item wrap" >
                        <img height="100%" width="100%" src={mf} alt="i" />
                    </div>
                    <div className="list-item wrap" >
                        <img height="100%" width="100%" src={f} alt="i" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Popular
