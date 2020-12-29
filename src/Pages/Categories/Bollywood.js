import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'
import { useParams } from 'react-router-dom'
import { getLatest, getByWord } from '../../Database/getCollectionQuery'
import aamirphoto from '../../Images/aamir.jpg'
import MyList from '../../Components/MyList';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Adapter extends Component {

    state = {
        data: true,
        ssr: null,
        aamir: null,
        ak: null
    }

    componentDidMount() {
        getLatest("Index", 'Bollywood').then(snap => {
            this.setState({ latest: snap })
        })

        getByWord('Index', 'Aamir Khan').then(result => {
            this.setState({ aamir: result })
        })

        getByWord('Index', 'Sushant Singh Rajput').then(result => {
            this.setState({ ssr: result })
        })

        getByWord('Index', 'Ayushman Khurana').then(result => {
            this.setState({ ak: result })
        })

    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <SubAppBar name={this.props.id} />
                    {
                        this.state.latest ? (
                            <MyList title="Bollywood Popular" data={this.state.latest} filter={['Movie', 'Hollywood']} />
                        ) : (
                                <div></div>
                            )
                    }
                    {
                        this.state.aamir ? (
                            <div>
                                <div style={{ display: "flex" }} >
                                    <div style={{ marginLeft: "20px", marginRight: "-10px" }} >
                                        <img src={aamirphoto} width="50px" style={{ borderRadius: "2px" }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "grey", margin: "0px 20px", fontSize: "25px" }} >
                                            Movies By
                                        </div>
                                        <div className="h7" >
                                            Aamir Khan
                                        </div>
                                    </div>
                                </div>
                                <MyList title="" data={this.state.aamir} filter='Aamir Khan' />
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                    {
                        this.state.ssr ? (
                            <MyList title="Sushant Singh Rajput" data={this.state.ssr} filter='Sushant Singh Rajput' />
                        ) : (
                                <div></div>
                            )
                    }
                    {
                        this.state.ak ? (
                            <MyList title="Ayushman Khurana" data={this.state.ak} filter='Ayushman Khurana' />
                        ) : (
                                <div></div>
                            )
                    }
                    {/*<MyList title="Drama" data={this.state.data[1]}  filter='Drama' />
                    <MyList title="Action" data={this.state.data[3]} filter='Action' />*/}
                    <div className="wrap" style={{color:"grey"}} >
                        We are working for more content.
                    </div>
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
