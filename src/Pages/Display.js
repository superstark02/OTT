import React, { Component } from 'react'
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import "../CSS/Components/MyList.css"
import { Button, IconButton } from '@material-ui/core'
import { ArrowBackRounded, PlayArrowRounded, VolumeMuteRounded, VolumeUpRounded } from '@material-ui/icons'
import Loader from 'react-loader-spinner'
import getSubCollection from '../Database/getSubCollection'
import { useParams } from 'react-router-dom'
import getDoc from "../Database/getDoc"
import { Link } from "react-router-dom";
import SeasonTabs from '../Components/SeasonTabs'
import Cast from '../Components/Cast';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { addSubDoc } from '../Database/addDoc'
import { getByWord } from '../Database/getCollectionQuery'
import Related from '../Components/Related'

export class Adapter extends Component {

    state = {
        mute: true,
        cover: true,
        show: null,
        related: null,
        seasons: null,
        link: null,
        open: null,
        message: "",
        app: null
    }

    findRelated = (industry, platform, genre) => {
        getSubCollection(industry, platform, genre).then(snap => {
            this.setState({ related: snap })
        })
    }

    componentDidMount() {
        getDoc("Content", this.props.id).then(result => {
            this.setState({ show: result })

            getByWord("Index", "Movie").then(snap => {
                this.setState({ related: snap })
            })

            getDoc("Apps", result.appName).then(snap => {
                this.setState({ app: snap })
            })
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

    addWatchList = () => {
        if (window.Android.getDeviceId()) {
            addSubDoc("Users", window.Android.getDeviceId(), 'Watchlist', this.state.show.id, {
                poster: this.state.show.poster,
                id: this.state.show.id
            }).then(e => {
                this.setState({ message: "Successfully Added" })
            })
        }
        else {
            this.setState({ message: "Please Sign In" })
        }
    }

    render() {
        return (
            <div style={{ color: theme.palette.primary.light }} className="transition-item detail-page" >
                {
                    this.state.show ? (
                        <div className="w3-animate-bottom" >
                            <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px' }} >
                                <div className="mute">
                                    <Link to="/">
                                        <IconButton >
                                            <ArrowBackRounded style={{ color: "white", fontSize: "20px" }} />
                                        </IconButton>
                                    </Link>
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
                                    autoPlay={true}
                                    loop={false}
                                    muted={this.state.mute}
                                    style={{ height: "100%" }}
                                    className="cover-image">
                                    <source src="https://firebasestorage.googleapis.com/v0/b/project-ott-d883c.appspot.com/o/AppData%2FTrailer.mp4?alt=media&token=99b2a070-7249-4e9e-aa4f-b38665721851" className="cover-image" />
                                </video>
                            </div>
                            <div className="wrap" style={{ marginBottom: "30px" }} >
                                <div className="wrap play-button" >
                                    <Link to={"/play/" + this.state.show.id + "/Season-1/episode-01"} >
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
                                <div style={{ margin: "0px 20px", width: "33%" }} >
                                    <div className="display-type wrap" >
                                        Year
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.year}
                                    </div>
                                </div>
                                <div className="wrap" style={{ margin: "0px 20px", width: "33%" }}  >
                                    <div>
                                        <div className="display-type wrap" >
                                            Country
                                        </div>
                                        <div className="wrap" >
                                            {this.state.show.country}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ margin: "0px 20px", width: "33%" }}  >
                                    <div className="display-type wrap" >
                                        Length
                                    </div>
                                    <div className="wrap" >
                                        {this.state.show.leng}
                                    </div>
                                </div>
                            </div>

                            {/*<div>
                                <div className="display-type wrap" >
                                    A Product Of
                                </div>
                                <div className="wrap" >
                                    <img alt="app" src={this.state.show.app} width="30px" style={{ marginRight: "10px", borderRadius: "5px" }} />
                                    {this.state.show.appName}
                                </div>
                            </div>*/}

                            {/*<div className="wrap" style={{ margin: "20px 0px" }} >
                                <ButtonBase>
                                    <div className="rent-button">
                                        <div className="wrap display-type" style={{ color: "white" }} >Rent</div>
                                        <div className="wrap " >&#8377;20 /month</div>
                                    </div>
                                </ButtonBase>
                            </div>*/}

                            <div className="wrap" >
                                <Button className="wrap" onClick={this.addWatchList} style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.dark, width: "80%" }} >
                                    <AddRoundedIcon style={{ fontSize: "13px", margin: "0px 5px" }} /> ADD TO WATCH LATER
                                </Button>
                            </div>
                            <p className="wrap display-type" >
                                {this.state.message}
                            </p>

                            <div className="ott-rent" >
                                <img alt="i" src={this.state.show.app} width="60px" style={{ borderRadius: "5px", marginRight: "5px" }} ></img>
                                <div>
                                    <div className="display-type" >
                                        Available On {this.state.show.appName}
                                    </div>
                                    <div>
                                        Rent For A Day
                                    </div>
                                    <div className="rate" >
                                        &#8377;20
                                    </div>
                                </div>
                            </div>

                            <div className="wrap" >
                                <Button className="wrap" style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.dark, width: "80%" }} >
                                    RENT
                                </Button>
                            </div>

                            <div style={{ padding: '20px', textAlign: "center" }} className="display-type" >
                                {this.state.show.description}
                            </div>

                            {
                                this.state.show.season ? (
                                    <div>
                                        <SeasonTabs seasons={this.state.show.season} id={this.state.show.id} />
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }
                            {
                                this.state.show.cast ? (
                                    <div>
                                        <Cast data={this.state.show.cast} />
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }

                            {
                                this.state.app ? (
                                    <div style={{ backgroundColor: "black", padding: "20px", marginBottom: "20px" }} >
                                        <div style={{ display: "flex" }} >
                                            <div style={{ marginRight: "20px" }}>
                                                <img src={this.state.app.image} width="100px" style={{ borderRadius: "10px" }} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "20px" }} >
                                                    {this.state.app.name}
                                                </div>
                                                <div style={{ margin: "10px 0px" }} >
                                                    <a href={this.state.app.ps} style={{ marginRight: "10px" }} >
                                                        <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" ></img>
                                                    </a>
                                                    <a href={this.state.app.as}>
                                                        <img style={{ borderRadius: "10px" }} width="100px" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png" ></img>
                                                    </a>
                                                </div>
                                                <div>
                                                    Plans: {this.state.app.plans}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="display-type" style={{ marginTop: "10px" }} >
                                            {this.state.app.description}
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
                                        <Related data={this.state.related} filter='Bollywood' />
                                    </div>
                                ) : (
                                        <div></div>
                                    )
                            }

                        </div>
                    ) : (
                            <div className="wrap" style={{ minHeight: "90vh" }} >
                                <Loader
                                    type="TailSpin"
                                    color={theme.palette.primary.light}
                                    height={50}
                                    width={50}
                                    timeout={3000} //3 secs
                                />
                            </div>
                        )
                }

                {/*<Dialog fullScreen open={this.state.open} TransitionComponent={Transition} style={{ marginTop: "30%", boxShadow: "0px -10px 20px rgba(0,0,0,0.5)", backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light }} >
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
                                <div>
                                    <div className="wrap" >
                                        <div className="list-item wrap" style={{ backgroundImage: "url(" + this.state.show.poster + ")", margin: '15px' }} >

                                        </div>
                                    </div>
                                    <div >
                                        <div>
                                            <div className="wrap" >
                                                <div style={{ marginRight: "10px" }} >
                                                    <img className="app-logo" alt="logo" src={this.state.show.app} width="30px" />
                                                </div>
                                                <div>
                                                    {this.state.show.appName}
                                                </div>
                                            </div>
                                            <div className="wrap" style={{ margin: "20px 0px" }} >
                                                <ButtonBase>
                                                    <div className="rent-button">
                                                        <div className="wrap display-type" style={{ color: "white" }} >Rent</div>
                                                        <div className="wrap " >&#8377;20 /month</div>
                                                    </div>
                                                </ButtonBase>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap display-type" style={{ textAlign: "center", marginBottom: "20px" }} >
                                    Why buy expensive yearly or monthly packages and subscriptions. When you can rent for less?
                                </div>
                                <div className="h7" >
                                    Recommended Plans
                                </div>

                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                </Dialog>*/}

            </div>
        )
    }
}

export default function Display() {
    const { industry } = useParams();
    const { platform } = useParams();
    const { genre } = useParams();
    const { id } = useParams();

    React.useEffect(() => {
    }, [industry]);

    return (
        <Adapter industry={industry} platform={platform} genre={genre} id={id} />
    )
}
