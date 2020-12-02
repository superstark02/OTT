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
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export class Display extends Component {

    state = {
        mute: true,
        cover: true,
        show: null,
        related: null,
        seasons: null,
        link: null,
        open: null,
    }

    findRelated = (industry, platform, genre) => {
        getSubCollection(industry, platform, genre).then(snap => {
            this.setState({ related: snap })
        })
    }

    getSeason = (industry, platform, genre, id) => {
        getSeasons(industry, platform, genre, id).then(snap => {
            this.setState({ seasons: snap })
        })
    }

    componentDidMount() {
        getShow(this.props.match.params.industry,
            this.props.match.params.platform,
            this.props.match.params.genre,
            this.props.match.params.id).then(snap => {
                this.setState({ show: snap })
                this.findRelated(snap.industry, snap.platform, snap.genre);
                if (snap.season) {
                    this.getSeason(snap.industry, snap.platform, snap.genre, snap.id)
                }
                if (snap.premium) {
                    //check if bought
                    //checkPaymnet(snap.id, series).then(result=>{if(result){setState({link:}; else{setState({link:pay} )})}})
                    //if yes: link to episode.

                    //if no: link to payment page.
                    this.setState({ open: true })
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

    handleClose = () => {
        this.setState({ open: false })
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
                                    //controls controlsList="nodownload"
                                    loop={false}
                                    muted={this.state.mute}
                                    className="cover-image">
                                    <source src={this.state.show.trailer} className="cover-image" />
                                </video>
                            </div>
                            <div className="wrap" style={{ marginBottom: "30px" }} >
                                <div className="wrap play-button" >
                                    <Link to={"/play/"+this.state.show.industry+"/"+this.state.show.platform+"/"+this.state.show.genre+"/"+this.state.show.id+"/Season-1/episode-1"} >
                                        <IconButton >
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
                                                        <Link to={"/play/" + this.state.show.industry + "/" + this.state.show.platform + "/" + this.state.show.genre + "/" + this.state.show.id + "/Season-1/" + item.id} >
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

                <Dialog fullScreen open={this.state.open} TransitionComponent={Transition} style={{ marginTop: "30%", boxShadow: "0px -10px 20px rgba(0,0,0,0.5)", backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light }} >
                    <AppBar position="relative" elevation={0} style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light }} >
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    {
                        this.state.show ? (
                            <div>
                                <div className="wrap" >
                                    <img alt="poster" className="ss" src={this.state.show.poster} />
                                </div>
                                <div>
                                    Subscribe to watch
                                </div>
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                </Dialog>
            </div>
        )
    }
}

export default Display
