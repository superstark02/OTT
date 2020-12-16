import { ButtonBase } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Components/Categories.css"

const categories = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fc1.jpg?alt=media&token=abd87229-51ca-4a8d-9092-b07dea0de5b2",
        title: "DISCOVER",
        to: "/discover"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fc2.jpg?alt=media&token=5f885ece-cea9-4278-9a5b-dad89965491b",
        title: "HOLLYWOOD",
        to: "/category/Hollywood"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fc3.jpg?alt=media&token=90f43aea-da39-469c-9ca0-c17d4fafa892",
        title: "BOLLYWOOD",
        to: "/category/Bollywood"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2Fc4.jpg?alt=media&token=164231b1-8f0e-4ba5-84f4-1efdc44d5b41",
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
