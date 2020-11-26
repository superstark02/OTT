import React, { Component } from 'react'
import mfc from "../Images/Cover/mfc.jpg"
import { theme } from "../Theme/Theme"
import "../CSS/Pages/Display.css"
import { IconButton } from '@material-ui/core'
import { PlayArrowRounded } from '@material-ui/icons'
import ss1 from "../Images/SS/ss1.jpg"
import ss2 from "../Images/SS/ss2.jpg"
import ss3 from "../Images/SS/ss3.jpg"

export class Display extends Component {
    render() {
        return (
            <div style={{ color: theme.palette.primary.light}} >
                <div className="wrap" style={{ overflow: "hidden", paddingBottom: '30px' }} >
                    <img width="110%" className="cover-image" src={mfc} alt="i" />
                </div>
                <div className="wrap" style={{ marginBottom: "30px" }} >
                    <div className="wrap play-button" >
                        <IconButton>
                            <PlayArrowRounded style={{ fontSize: "40px", color: "black" }} />
                        </IconButton>
                    </div>
                </div>
                <div className="display-name wrap" >
                    MODERN FAMILY
                </div>
                <div className="wrap display-type" >
                    Drama, Comedy, Family
                </div>

                <div className="wrap" style={{ flexWrap: "nowrap", margin: "20px 0px" }} >
                    <div style={{ margin: "0px 20px" }} >
                        <div className="display-type wrap" >
                            Year
                        </div>
                        <div className="wrap" >
                            2018
                        </div>
                    </div>
                    <div style={{ margin: "0px 20px" }}  >
                        <div className="display-type wrap" >
                            Country
                        </div>
                        <div className="wrap" >
                            USA
                        </div>
                    </div>
                    <div style={{ margin: "0px 20px" }}  >
                        <div className="display-type wrap" >
                            Length
                        </div>
                        <div className="wrap" >
                            112 min
                        </div>
                    </div>
                </div>

                <div style={{ padding: '20px', textAlign: "center" }} className="display-type" >
                    Modern Family is an American television mockumentary family sitcom created by Christopher Lloyd and Steven Levitan for the American Broadcasting Company. It ran for eleven seasons, from September 23, 2009, to April 8, 2020. It follows the lives of three diverse family set-ups in suburban Los Angeles, linked by patriarch Jay Pritchett.
                    <br />
                    Christopher Lloyd and Steven Levitan conceived the series while sharing stories of their own "modern families". Modern Family employs an ensemble cast and is presented in mockumentary style, with the characters frequently speaking directly to the camera in confessional interview segments.
                </div>

                <div>
                    <div className="h7" >
                        Screenshots
                   </div>
                    <div className="ss-container" >
                        <img src={ss1} className="ss" alt="i" />
                        <img src={ss2} className="ss" alt="i" />
                        <img src={ss3} className="ss" alt="i" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
