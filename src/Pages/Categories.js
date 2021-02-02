import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import action from '../Images/Genres/action.jpg'
import comedy from '../Images/Genres/comdey.jpg'
import romance from '../Images/Genres/romance.png'
import drama from '../Images/Genres/drama.jpg'
import fantasy from '../Images/Genres/fantasy.jpg'
import adventure from '../Images/Genres/adventure.jpg'

const genres = [
    {
        name: "Drama",
        image: drama
    },
    {
        name: "Adventure",
        image: adventure
    },
    {
        name: "Romance",
        image: romance
    },
    {
        name: "Comedy",
        image: comedy
    },
    {
        name: "Action",
        image: action
    },
    {
        name: "Fantasy",
        image: fantasy
    },
]

export class Categories extends Component {
    render() {
        return (
            <div>
                <SubAppBar />
                <div>
                    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: 'space-evenly' }} >

                        {
                            genres.map(item => {
                                return (
                                    <div style={{ width: "fit-content", margin: "10px 0px" }} className="wrap w3-animate-opacity" >
                                        <ButtonBase style={{ height: "100%" }}>
                                            <Link to={"/category/" + item.name}
                                                style={{ height: "100%" }}  >
                                                <div className="list-item wrap"
                                                    style={{
                                                        backgroundImage: "url(" + item.image + ")",
                                                        height: "35vw", width: "40vw",
                                                        textTransform: "uppercase",
                                                        padding:"0px"
                                                    }} >
                                                    <div className="wrap" style={{height: "100%", width: "100%",backgroundColor:"rgba(0,0,0,0.3)"}} >
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </Link>
                                        </ButtonBase>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{padding:"20px", color:"grey", textAlign:"center"}} className="wrap" >
                        Want more genre, shows, and movies? Don't worry, we are working day and night, arranging more 
                        content to ensure that you
                        enjoy your binge watching to the fullest.
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories
