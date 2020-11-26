import React, { Component } from 'react'
import "../CSS/Components/Categories.css"
import { theme } from '../Theme/Theme'

export class Categories extends Component {
    render() {
        return (
            <div style={{ padding: "10px", paddingBottom: "30px", display: "inline-block", width: "100%", overflowX: "scroll", whiteSpace: "nowrap"}} >
                <div className="categories-div-container d1" >
                    <div className="categories-div" style={{ color: theme.palette.primary.dark, backgroundColor:"rgba(0 , 0, 0, 0.3)" }} >
                        DISCOVER
                    </div>
                </div>
                <div className="categories-div-container d2" >
                    <div className="categories-div" style={{ color: theme.palette.primary.dark, backgroundColor:"rgba(0 , 0, 0, 0.3)" }} >
                        HOLLYWOOD
                    </div>
                </div>
                <div className="categories-div-container d3" >
                    <div className="categories-div" style={{ color: theme.palette.primary.dark, backgroundColor:"rgba(0 , 0, 0, 0.3)" }} >
                        BOLLYWOOD
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories
