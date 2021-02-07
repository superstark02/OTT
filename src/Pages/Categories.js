import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import action from '../Images/Genres/action.jpg'
import comedy from '../Images/Genres/comdey.jpg'
import romance from '../Images/Genres/romance.png'
import drama from '../Images/Genres/drama.jpg'
import fantasy from '../Images/Genres/fantasy.png'
import adventure from '../Images/Genres/adventure.jpg'
import MyList from '../Components/MyList'
import { getByWord } from '../Database/getCollectionQuery'
import Footer from '../Components/Footer'

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

    state = {
        data: null,
        drama: null,
        action: null,
        romance: null
    }

    componentDidMount(){
        getByWord("Index", "Comedy").then(snap=>{
            this.setState({data:snap})
        })

        getByWord("Index", "Drama").then(snap=>{
            this.setState({drama:snap})
        })

        getByWord("Index", "Action").then(snap=>{
            this.setState({action:snap})
        })

        getByWord("Index", "Action").then(snap=>{
            this.setState({romance:snap})
        })
    }

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
                    {
                        this.state.data && this.state.drama && this.state.action && this.state.romance ? (
                            <div>
                                <MyList title="Comedy" filter='Comedy' data={this.state.data} />
                                <MyList title="Action" filter='Action' data={this.state.action} />
                                <MyList title="Drama" filter='Drama' data={this.state.drama} />
                                <MyList title="Romance" filter='Romance' data={this.state.romance} />
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Categories
