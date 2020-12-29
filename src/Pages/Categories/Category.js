import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'
import { useParams } from 'react-router-dom'
import { getByWord, getLatest } from '../../Database/getCollectionQuery'
import shuffleArray from '../../Database/shuffleArray'
import MyList from '../../Components/MyList';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import axios from 'axios';
import rdj from "../../Images/rdj.jpg"
import mr from "../../Images/mr.jpg"
import tc from "../../Images/tc.jpg"

const list = [
    {
        title: "Series",
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
        data: null,
        latest: null,
        rdj: null,
        mr: null,
        tc: null
    }

    componentDidMount() {
        axios.get('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/category/Hollywood').then(result => {
            this.setState({ data: shuffleArray(result.data) })
        })

        getLatest("Index", 'Hollywood').then(snap => {
            this.setState({ latest: snap })
        })

        getByWord('Index', 'Robert Downey Jr').then(result => {
            this.setState({ rdj: result })
        })

        getByWord('Index', 'Margot Robbie').then(result => {
            this.setState({ mr: result })
        })

        getByWord('Index', 'Tom Cruise').then(result => {
            this.setState({ tc: result })
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <SubAppBar name='Hollywood' />
                    {
                        this.state.latest ? (
                            <MyList title="Hollywood Popular" data={this.state.latest} filter={['Movie', 'Hollywood']} />
                        ) : (
                                <div></div>
                            )
                    }
                    {/*<MyList title="Hollywood Series" data={this.state.data[0]} filter={['Series','Hollywood']} />
                    <MyList title="Drama In English" data={this.state.data[1]} filter={['Hollywood','Drama']} />
                    <MyList title="Comedy" data={this.state.data[2]} filter={['Hollywood','Comedy']} />
                <MyList title="Amazing Action" data={this.state.data[3]} filter={['Hollywood','Action']} />*/}
                    {
                        this.state.rdj ? (
                            <div>
                                <div style={{ display: "flex" }} >
                                    <div style={{ marginLeft: "20px", marginRight: "-10px" }} >
                                        <img src={rdj} width="50px" style={{ borderRadius: "2px" }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "grey", margin: "0px 20px", fontSize: "25px" }} >
                                            Movies By
                                        </div>
                                        <div className="h7" >
                                            Robert Downey Jr.
                                        </div>
                                    </div>
                                </div>
                                <MyList data={this.state.rdj} filter="Robert Downey Jr" />
                            </div>
                        ) : (
                                <div></div>
                            )
                    }

                    {
                        this.state.mr ? (
                            <div>
                                <div style={{ display: "flex" }} >
                                    <div style={{ marginLeft: "20px", marginRight: "-10px" }} >
                                        <img src={mr} width="50px" style={{ borderRadius: "2px" }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "grey", margin: "0px 20px", fontSize: "25px" }} >
                                            Movies By
                                        </div>
                                        <div className="h7" >
                                            Margot Robbie
                                        </div>
                                    </div>
                                </div>
                                <MyList data={this.state.mr} filter="Margot Robbie" />
                            </div>
                        ) : (
                                <div></div>
                            )
                    }

                    {
                        this.state.tc ? (
                            <div>
                                <div style={{ display: "flex" }} >
                                    <div style={{ marginLeft: "20px", marginRight: "-10px" }} >
                                        <img src={tc} width="50px" style={{ borderRadius: "2px" }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "grey", margin: "0px 20px", fontSize: "25px" }} >
                                            Movies By
                                        </div>
                                        <div className="h7" >
                                            Tom Cruise
                                        </div>
                                    </div>
                                </div>
                                <MyList data={this.state.tc} filter="Tom Cruise" />
                            </div>
                        ) : (
                                <div></div>
                            )
                    }

                    <MyList title="Comedy In Hollywood" data={this.state.data[3]} filter={['Hollywood', 'Comedy']} />
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
                            timeout={30000} //3 secs
                        />
                    </div>
                </div>
            )
        }
    }
}


export default function Category() {
    const { id } = useParams();

    return (
        <Adapter id={id} />
    )
}
