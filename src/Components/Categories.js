import { ButtonBase } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Components/Categories.css"

const categories = [
    {
        img: "https://www.discoverboating.com/sites/default/files/inline-images/best-boat-movies.png",
        title: "DISCOVER",
        to: "/Discover"
    },
    {
        img: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/emily-blunt-4134-24-03-2017-12-41-22.jpg",
        title: "HOLLYWOOD",
        to: "/Hollywood"
    },
    {
        img: "https://m.media-amazon.com/images/M/MV5BNGFlYzAyYjgtNzRjNS00NmE4LTliOGYtYzBkYzU5MzRhMDM0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UX214_CR0,0,214,317_AL_.jpg",
        title: "BOLLYWOOD",
        to: "/Bollywood"
    },
    {
        img: "https://merchdope.com/wp-content/uploads/2018/10/death-note.jpg",
        title: "ANIME",
        to: "/Anime"
    }
]

export class Categories extends Component {
    render() {
        return (
            <div style={{ padding: "10px", paddingBottom: "30px", display: "inline-block", width: "100%", overflowX: "scroll", whiteSpace: "nowrap" }} >

                {
                    categories.map(item => {
                        return (
                            <Link to={"/category"+item.to} >
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
