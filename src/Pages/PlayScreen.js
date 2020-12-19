import React, { Component } from 'react'
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import "../CSS/Pages/PlayScreen.css"
import { ButtonBase, IconButton } from '@material-ui/core'
import { ArrowBackRounded } from '@material-ui/icons'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import ReadMoreAndLess from 'react-read-more-less';
import { useParams } from 'react-router-dom'
import SeasonTabs from '../Components/SeasonTabs'
import { saveTime } from '../Database/logIn'
import axios from 'axios'

export class Adapter extends Component {

    state = {
        mute: false,
        cover: true,
        show: null,
        related: null,
        seasons: null,
        episode: null,
        time: null,
        duration: null,

        season_id: null,
        episode_id: null,
        show_id: null,

        currentTime: 0
    }

    componentDidMount() {
        axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/get-doc', { //get-doc
            name: "Content",
            doc_name: this.props.id
        }).then(snap => {
            this.setState({ show: snap.data })
        })

        //get time
        axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/get-time', { //get-time
            id: this.props.id,
            season: this.props.season,
            episode: this.props.episode,
            uid: window.Android.getUid()
        }).then(snap => {
            if (snap.data.time) {
                this.setState({ currentTime: snap.data.time })
            }

            axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/get-episode', { //get-episode
                id: this.props.id,
                season: this.props.season,
                episode: this.props.episode
            }).then(snap => {
                this.setState({ episode: snap.data })
            })

        })

        axios.post('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/add-watching', {
            uid: window.Android.getUid(),
            series_id: this.props.id,
            episode: this.props.episode,
            season: this.props.season
        })

        this.setState({ episode_id: this.props.episode, season_id: this.props.season, show_id: this.props.id })
    }

    handleMute = () => {
        if (this.state.mute) {
            this.setState({ mute: false })
        }
        else {
            this.setState({ mute: true })
        }
    }

    handlevideoMount = (e) => {
        if (e) {
            if (this.state.currentTime > 0) {
                e.currentTime = this.state.currentTime
            }
        }
    }

    componentCleanup = () => {
        saveTime(this.state.time, this.state.show_id, this.state.season_id, this.state.episode_id).then(r => { })
    }

    componentWillUnmount() {
        this.componentCleanup();
    }

    render() {
        return (
            <div style={{ color: theme.palette.primary.light }} >
                {
                    this.state.show && this.state.episode ? (
                        <div>
                            <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px' }} >
                                <div className="mute">
                                    <IconButton onClick={() => { window.history.back() }} >
                                        <ArrowBackRounded style={{ color: "white", fontSize: "20px" }} />
                                    </IconButton>
                                </div>

                                <video
                                    loop={false}
                                    controls
                                    autoPlay={true}
                                    ref={this.handlevideoMount}
                                    onTimeUpdate={(e) => { this.setState({ time: e.target.currentTime }) }}
                                    controlsList="nodownload"
                                    poster={this.state.episode.vidPoster}
                                    className="player" >
                                    <track label="English" kind="captions" srclang="en" src={this.state.episode.sub} default />
                                    <source src={this.state.episode.content} type="video/mp4" />
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
                                        {this.state.episode.name}
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
                                this.state.show.season ? (
                                    <div>
                                        <SeasonTabs seasons={this.state.show.season} id={this.state.show.id} />
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
                                <div className="wrap" style={{ minHeight: "90vh" }} >
                                    <Loader
                                        type="TailSpin"
                                        color={theme.palette.primary.light}
                                        height={50}
                                        width={50}
                                        timeout={3000} //3 secs
                                    />
                                </div>
                            </div>
                        )
                }

            </div>
        )
    }
}

export default function PlayScreen() {
    const { id } = useParams();
    const { season } = useParams();
    const { episode } = useParams();

    return (
        <Adapter id={id} season={season} episode={episode} />
    )
}
