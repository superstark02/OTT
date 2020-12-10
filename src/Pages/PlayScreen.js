import React, { Component } from 'react'
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import "../CSS/Pages/PlayScreen.css"
import { ButtonBase, IconButton } from '@material-ui/core'
import { ArrowBackRounded } from '@material-ui/icons'
import getShow from '../Database/getShow'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import getSubCollection from '../Database/getSubCollection'
import getSeasons from '../Database/getSeason'
import getEpisode from '../Database/getEpisode'
import ReadMoreAndLess from 'react-read-more-less';
import { useParams } from 'react-router-dom'
import "react-tiger-transition/styles/main.min.css";

export class Adapter extends Component {

    state = {
        mute: true,
        cover: true,
        show: null,
        related: null,
        seasons: null,
        episode: null,
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
        getShow(this.props.industry,
            this.props.platform,
            this.props.genre,
            this.props.id).then(snap => {
                this.setState({ show: snap })
                this.findRelated(snap.industry, snap.platform, snap.genre);
                if (snap.season) {
                    this.getSeason(snap.industry, snap.platform, snap.genre, snap.id)
                }
            })

        getEpisode(this.props.industry,
            this.props.platform,
            this.props.genre,
            this.props.id,
            this.props.season,
            this.props.episode).then(snap => {
                this.setState({ episode: snap })
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
                    this.state.show && this.state.episode ? (
                        <div>
                            <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px' }} >
                                <div className="mute">
                                    <IconButton onClick={() => { console.log("Click") }} >
                                        <ArrowBackRounded style={{ color: "white", fontSize: "20px" }} />
                                    </IconButton>
                                </div>

                                <video
                                    loop={false}
                                    controls
                                    controlsList="nodownload"
                                    poster={this.state.episode.vidPoster}
                                    className="player" >
                                    <source src={this.state.episode.content} className="player" />
                                </video>

                                {/*<Player poster={this.state.show.cover} >
                                    <source src={this.state.episode.content} />
                                    <BigPlayButton position="center" />
                                    <ControlBar>
                                        <ReplayControl seconds={10} order={1.1} />
                                        <ForwardControl seconds={30} order={1.2} />
                                        <CurrentTimeDisplay order={4.1} />
                                        <TimeDivider order={4.2} />
                                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                                        <VolumeMenuButton disabled />
                                    </ControlBar>
                            </Player>*/}

                            </div>

                            <div style={{ display: "flex", padding: "0px 10px", marginBottom: "20px" }} >
                                <div className="list-item"
                                    style={{
                                        backgroundImage: "url(" + this.state.show.poster + ")",
                                        width: "90px",
                                        height: "120px",
                                        marginRight: "10px"
                                    }} >
                                    {/*<img alt="ii" src={this.state.show.poster} width="80px" style={{ borderRadius: "5px", marginRight: '10px' }} />*/}
                                </div>

                                <div>
                                    <div className="display-name" style={{ marginBottom: "0px" }} >
                                        {this.state.show.name}
                                    </div>
                                    <div className="display-type" >
                                        Episode Name
                                    </div>
                                    <div className="display-type" >
                                        {this.state.number} {this.state.episode.date}
                                    </div>
                                    <div className="display-type" >
                                        {this.state.show.keywords}
                                    </div>
                                    <div className="display-type" style={{ width: "50vw" }} >
                                        <ReadMoreAndLess
                                            ref={this.ReadMore}
                                            className="display-type"
                                            charLimit={50}
                                            readMoreText="Read more"
                                            readLessText="Read less"
                                        >
                                            {this.state.show.description}
                                        </ReadMoreAndLess>
                                    </div>
                                </div>
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
                                                        <div>
                                                            <img src={item.image} className="ss" alt="i" />
                                                            <div style={{ height: '2px', backgroundColor: "white", width: "50%" }} >

                                                            </div>
                                                        </div>
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
                                                        <ButtonBase style={{ height: "100%", marginRight: "20px" }}>
                                                            <a href={"/display/" + item.industry + "/" + item.platform + "/" + item.genre + "/" + item.id}
                                                                style={{ height: "100%" }}  >
                                                                <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                                                </div>
                                                            </a>
                                                        </ButtonBase>
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

export default function PlayScreen() {
    const { industry } = useParams();
    const { platform } = useParams();
    const { genre } = useParams();
    const { id } = useParams();
    const { season } = useParams();
    const { episode } = useParams();

    React.useEffect(() => {
    }, [industry]);

    return (
        <Adapter industry={industry} platform={platform} genre={genre} id={id} season={season} episode={episode} />
    )
}
