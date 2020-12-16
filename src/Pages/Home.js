import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
//import { uploadData } from '../Database/uploadData';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Latest from '../Components/Latest';
import MyList from '../Components/MyList';
import getCollectionQuery, { getByWord } from '../Database/getCollectionQuery'
import shuffleArray from '../Database/shuffleArray'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { updateUser } from "../Database/logIn"

const list = [
    {
        title: 'Comedy Series To Watch',
        filter: ["Comedy", "Series"]
    },
    {
        title: 'Amzing Action',
        filter: ["Action", "Movie"]
    },
    {
        title: 'Drama Series',
        filter: ["Drama", "Series"]
    },
    {
        title: 'Fiction Series',
        filter: 'Fiction'
    },
    {
        title: 'By Netflix',
        filter: 'Netflix'
    },
    {
        title: 'Animated For Kids',
        filter: 'Animated'
    }
]

var data = []


export class Home extends Component {

    state = {
        uid: "",
        data: null
    }

    constructor() {
        super();
        //uploadData();
    }

    componentDidMount() {

        /*if(window.Android.getUid()){
            this.setState({ uid: window.Android.getUid() })
            updateUser(window.Android.getUid(),window.Android.getName(), window.Android.getEmail(), window.Android.getDeviceId() );
        }*/

        for (var i = 0; i < list.length; i++) {
            if (list[i].filter.length > 2) {
                getByWord("Index", list[i].filter).then(result => {
                    data.push(shuffleArray(result))
                    this.setState({ data: data })
                })
            } else {
                getCollectionQuery("Index", list[i].filter).then(result => {
                    data.push(shuffleArray(result))
                    this.setState({ data: data })
                })
            }
        }

    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <MyAppBar uid={this.state.uid} />
                    <Carousel />
                    <Categories />
                    <Latest title="Latest" filter="2014" />

                    <MyList title={list[0].title} data={this.state.data[0]} />
                    <MyList title={list[1].title} data={this.state.data[1]} />
                    <MyList title={list[2].title} data={this.state.data[2]} />
                    <MyList title={list[3].title} data={this.state.data[3]} />
                    <MyList title={list[4].title} data={this.state.data[4]} />
                    <MyList title={list[5].title} data={this.state.data[5]} />

                    {/*<MyList title="Comedy Series To Watch" filter={["Comedy", "Series"]} />
                    <MyList title="Action Films" filter={["Action", "Movie"]} />
                    <MyList title="Drama Series" filter={["Drama", "Series"]} />
                    <MyList title="Fiction Series" filter="Fiction" />
                    <MyList title="By Netflix" filter="Netflix" />
                    <MyList title="Animated For Kids" filter="Animated" />*/}
                </div>
            )
        } else {
            return (
                <div className="wrap" style={{ minHeight: "100vh" }} >
                    <Loader
                        type="Audio"
                        color="#212121"
                        height={50}
                        width={50}
                        timeout={3000} //3 secs
                    />
                </div>
            )
        }
    }
}

export default Home
