import { ButtonBase } from '@material-ui/core'
import React, { Component } from 'react'
import "../CSS/Components/Categories.css"

export class Categories extends Component {
    render() {
        return (
            <div style={{ padding: "10px", paddingBottom: "30px", display: "inline-block", width: "100%", overflowX: "scroll", whiteSpace: "nowrap" }} >

                <div className="categories-div-container d1" >
                    <ButtonBase style={{ borderRadius: "2px" }} >
                        <div className="categories-div" style={{ color: "white", backgroundColor: "rgba(0 , 0, 0, 0.3)" }} >
                            DISCOVER
                        </div>
                    </ButtonBase>
                </div>
                <div className="categories-div-container d2" >
                    <ButtonBase style={{ borderRadius: "2px" }} >
                        <div className="categories-div" style={{ color: "white", backgroundColor: "rgba(0 , 0, 0, 0.3)" }} >
                            HOLLYWOOD
                        </div>
                    </ButtonBase>
                </div>
                <div className="categories-div-container d3" >
                    <ButtonBase style={{ borderRadius: "2px" }} >
                        <div className="categories-div" style={{ color: "white", backgroundColor: "rgba(0 , 0, 0, 0.3)" }} >
                            BOLLYWOOD
                        </div>
                    </ButtonBase>
                </div>
            </div>
        )
    }
}

export default Categories
