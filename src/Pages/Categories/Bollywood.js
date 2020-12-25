import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'
import { useParams } from 'react-router-dom'
import getCollectionQuery from '../../Database/getCollectionQuery'
import shuffleArray from '../../Database/shuffleArray'
import MyList from '../../Components/MyList';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const list = [
    {
        title: "Series",
    },
    {
        title: "Movie",
    },
    {
        title: "Drama",
    },
    {
        title: "Comedy",
    }
]

var data = []

class Adapter extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        for (var i = 0; i < list.length; i++) {
            getCollectionQuery("Index", ["Hollywood", list[i].title]).then(result => {
                data.push(shuffleArray(result))
                this.setState({ data: data })
            })
        }
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <SubAppBar name={this.props.id} />
                    <MyList title="Series" data={this.state.data[0]} filter={['Movie', 'Series']} />
                    <MyList title="Drama" data={this.state.data[2]}  filter={['Movie', 'Drama']}  />
                    <MyList title="Comedy" data={this.state.data[3]} filter={['Movie', 'Comedy']}  />
                </div>
            )
        }
        else {
            return (
                <div>
                    <SubAppBar name={this.props.id} />
                    <div className="wrap" style={{ minHeight: "90vh" }} >
                        <Loader
                            type="TailSpin"
                            color="#FFFF"
                            height={50}
                            width={50}
                            timeout={3000} //3 secs
                        />
                    </div>
                </div>
            )
        }
    }
}


export default function Bollywood() {
    const { id } = useParams();

    return (
        <Adapter id={id} />
    )
}
