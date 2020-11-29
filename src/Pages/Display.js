import React, { Component } from 'react'
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import { IconButton } from '@material-ui/core'
import { ArrowBackRounded, PlayArrowRounded, VolumeMuteRounded, VolumeUpRounded } from '@material-ui/icons'
import getShow from '../Database/getShow'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import getSubCollection from '../Database/getSubCollection'
import getSeasons from '../Database/getSeason'
import { Link } from 'react-router-dom'

export class Display extends Component {

    state = {
        mute: true,
        cover: true,
        show: null,
        related: null,
        seasons:null
    }

    findRelated = (industry, platform, genre) => {
        getSubCollection(industry, platform, genre).then(snap => {
            this.setState({ related: snap })
        })
    }

    getSeason = (industry, platform, genre, id) => {
       getSeasons(industry, platform, genre, id).then(snap=>{
           this.setState({seasons:snap})
       })
    }

    componentDidMount() {
        getShow(this.props.match.params.industry,
            this.props.match.params.platform,
            this.props.match.params.genre,
            this.props.match.params.id).then(snap => {
                this.setState({ show: snap })
                this.findRelated(snap.industry, snap.platform, snap.genre);
                if(snap.season){
                    this.getSeason(snap.industry, snap.platform, snap.genre, snap.id)
                }
            })

    }

    handleMute = () => {
        if (this.state.mute) {
            this.setState({ mute: false })
        }
        else {
            this.setState({ mute: true })
        }
    }

    render() {
        return (
            <div style={{ color: theme.palette.primary.light }} >
                {
                    this.state.show ? (
                        <div>
                            <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px' }} >
                                <div className="mute">
                                    <IconButton onClick={() => { console.log("Click") }} >
                                        <ArrowBackRounded style={{ color: "white", fontSize: "20px" }} />
                                    </IconButton>
                                    {
                                        this.state.mute ? (
                                            <IconButton onClick={this.handleMute} >
                                                <VolumeMuteRounded style={{ color: "white", fontSize: "20px" }} />
                                            </IconButton>
                                        ) : (
                                                <IconButton onClick={this.handleMute} >
                                                    <VolumeUpRounded style={{ color: "white", fontSize: "20px" }} />
                                                </IconButton>
                                            )
                                    }
                                </div>

                                <video
                                    autoPlay
                                    loop={false}
                                    muted={this.state.mute}
                                    className="cover-image">
                                    <source src={this.state.show.trailer} className="cover-image" />
                                </video>
                            </div>
                            <div className="wrap" style={{ marginBottom: "30px" }} >
                                <div className="wrap play-button" >
                                    <Link to={"/play/"+this.state.show.industry+"/"+this.state.show.platform+"/"+this.state.show.genre+"/"+this.state.show.id+"/Season-1/episode-1"} >
                                        <IconButton>
                                            <PlayArrowRounded style={{ fontSize: "40px", color: "black" }} />
                                        </IconButton>
                                    </Link>
                                </div>
                            </div>

                            <div className="display-name wrap" >
                                {this.state.show.name}
                            </div>
                            <div className="wrap display-type" >
                                {this.state.show.keywords}
                            </div>

                            <div className="wrap" style={{ flexWrap: "nowrap", margin: "20px 0px" }} >
                                <div style={{ margin: "0px 20px" }} >
                                    <div className="display-type wrap" >
                                        Year
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.year}
                                    </div>
                                </div>
                                <div style={{ margin: "0px 20px" }}  >
                                    <div className="display-type wrap" >
                                        Country
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.country}
                                    </div>
                                </div>
                                <div style={{ margin: "0px 20px" }}  >
                                    <div className="display-type wrap" >
                                        Length
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.leng}
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: '20px', textAlign: "center" }} className="display-type" >
                                {this.state.show.description}
                            </div>

                            {
                                this.state.seasons ? (
                                    <div>
                                        <div className="h7" >
                                            Season - 1
                                        </div>
                                        <div className="ss-container" >
                                            {
                                                this.state.seasons.map(item => {
                                                    return (
                                                        <Link to={"/play/"+this.state.show.industry+"/"+this.state.show.platform+"/"+this.state.show.genre+"/"+this.state.show.id+"/Season-1/"+item.id} >
                                                            <img src={item.image} className="ss" alt="i" />
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }

                            {
                                this.state.related ? (
                                    <div>
                                        <div className="h7" >
                                            Related
                                        </div>
                                        <div className="ss-container" >
                                            {
                                                this.state.related.map(item => {
                                                    return (
                                                        <img src={item.poster} className="ss" alt="i" />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                    ) : (
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
            </div>
        )
    }
}

export default Display
