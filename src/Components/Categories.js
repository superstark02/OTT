import { ButtonBase } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Components/Categories.css"
import bw from "../Images/Categories/bollywood.jpg"
import hw from "../Images/Categories/hollywood.jpg"

const categories = [
    {
        img: hw,
        title: "HOLLYWOOD",
        to: "/category/Hollywood"
    },
    {
        img: bw,
        title: "BOLLYWOOD",
        to: "/category/Bollywood"
    },
    {
        img: "https://www.denofgeek.com/wp-content/uploads/2019/01/best-anime-on-hulu.jpg?resize=768%2C432",
        title: "ANIME",
        to: "/anime"
    }
]

export class Categories extends Component {
    render() {
        return (
            <div style={{ padding: "10px", paddingBottom: "30px", display: "inline-block", width: "100%", overflowX: "scroll", whiteSpace: "nowrap" }} >

                {
                    categories.map(item => {
                        return (
                            <Link to={item.to} >
                                <div className="categories-div-container " style={{ background: "url(" + item.img + ") 0 0 no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} >
                                    <ButtonBase style={{ borderRadius: "2px" }} >
                                        <div className="categories-div" style={{ color: "white", backgroundColor: "rgba(0 , 0, 0, 0.5)" }} >
                                            {item.title}
                                        </div>
                                    </ButtonBase>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default Categories
