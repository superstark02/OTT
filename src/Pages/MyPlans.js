import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import emailjs from 'emailjs-com';
import '../CSS/Pages/MyPlans.css'

const nicon = "https://spng.pngfind.com/pngs/s/55-550764_netflix-n-logo-logo-n-de-netflix-hd.png"
const picon = "https://www.mediaplaynews.com/wp-content/uploads/2018/04/Prime-Video-Stacked.jpg"
const dicon = "https://i.imgur.com/U4Op2KW.jpg"
const sicon = "https://images.news18.com/ibnlive/uploads/2020/05/1590663909_sonyliv2-1.jpg"
const zicon = 'https://toppng.com/uploads/preview/zee5-movies-tv-shows-live-tv-originals-zee5-app-download-free-11562989787ccp8imbuyt.png'
const vicon = "https://play-lh.googleusercontent.com/xG9e5xK60y6j9Fj-i5Z_055tYYyVnY3pBRA83sieC5QLR3lMLN6tf-8h5E-Rb5gs7wo"

const duration = ["For", "1 Day", "1 Week", "1 Month", "Orignal Prices"]

const netflix = [<div><div><img src={nicon} width="40px" alt="s" /></div><div>Netflix<br /> (Premium)</div></div>, "₹ 10", "₹ 60", "₹ 250", <strike>₹ 800 / month</strike>]

const prime = [<div><div><img src={picon} width="40px" alt="s" /></div><div>Prime Video</div></div>, "₹ 5", "₹ 25", "₹ 80", <strike>₹ 130 / month</strike>]

const disney = [<div><div><img src={dicon} width="40px" alt="s" /></div><div>Disney + Hotstar <br /> (Premium)</div></div>, "₹ 7", "₹ 45", "₹ 180", <strike>₹ 200 / month</strike>]

const sony = [<div><div><img src={sicon} width="40px" alt="s" /></div><div>Sony Liv </div></div>, "₹ 5", "₹ 20", "₹ 75", <strike>₹ 300 / month</strike>]

const zee = [<div><div><img src={zicon} width="40px" alt="s" /></div><div>Zee 5 <br /> (Alt Balaji) </div></div>, "₹ 2", "₹ 10", "₹ 30", <strike>₹ 100 / month</strike>]

const voot = [<div><div><img src={vicon} width="40px" alt="s" /></div><div>Voot </div></div>, "₹ 2", "₹ 10", "₹ 30", <strike>₹ 100 / month</strike>]


export class Plans extends Component {
    state = {
        sent: null,
        temp: []
    }

    sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_9ig1ny9', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    this.setState({ sent: true })
                }
            }, (error) => {
                console.log(error.text);
            });
    }
    render() {
        return (
            <div>
                <SubAppBar />
                <div className="w3-animate-bottom"  >
                    <h2 style={{ padding: "0px 20px" }}>
                        Plans
                    </h2>
                    <div style={{ fontSize: "15px", padding: "0px 20px" }} >
                        To Buy Plans Contact Us : <br />
                        It's completely safe. You pay only after signing-in.
                        <br />
                        To buy plans, leave your number we will contact you.
                        <div className="wrap" style={{ margin: "20px 0px" }} >
                            <div>
                                <form onSubmit={this.sendMail} style={{ fontSize: "15px", width: "100%" }} >
                                    <div>
                                        <label>Phone</label>
                                    </div>
                                    <div>
                                        <input style={{ width: "100%" }} type="number" name="message" required placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="hidden" name="type" style={{ backgroundColor: "white", color: "black" }} value="Request" />
                                        <input type="submit" style={{ backgroundColor: "white", color: "black" }} value="Send" />
                                    </div>
                                </form>
                            </div>

                        </div>
                        {
                            this.state.sent ? (
                                <div>
                                    We received you request. We will contact you as soon as possible.
                                </div>
                            ) : (
                                    <div></div>
                                )
                        }
                        <p>
                            Or Contact Us through WhatsApp (+91 99101 97 196)
                        </p>
                    </div>
                    <div className="wrap" >
                        <table className="plans-table" cellSpacing="0" >
                            <tr className="dark-row" >
                                {
                                    duration.map(item => {
                                        return (
                                            <th style={{ padding: "20px 0px" }} >{item}</th>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    netflix.map((item, index) => {
                                        return (
                                            <td className="style-td" >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    prime.map((item, index) => {
                                        return (
                                            <td className="td" >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    disney.map((item, index) => {
                                        return (
                                            <td className="style-td" >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    sony.map((item, index) => {
                                        return (
                                            <td className="td" >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    zee.map((item, index) => {
                                        return (
                                            <td className="style-td" >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    voot.map((item, index) => {
                                        return (
                                            <td className="td" >{item}</td>
                                        )
                                    })
                                }
                            </tr>
                        </table>
                    </div>
                    <div style={{ fontSize: "20px", padding: "0px 20px" }} >
                        <div>
                            <p style={{ fontSize: "20px", textAlign: "center" }}>
                                How we operate? How it's so cheap?
                            </p>
                            <p style={{ fontSize: "15px", textAlign: "left" }} >
                                It’s obvious that everyone has a question how you operate? One may think that since the cost of Premium subscription is &#8377;799 then how can someone sell at such a low cost.
                                So to assure that we ARE NOT fraud or spam,
                                here are some fact points on our operation:
                                <ol>
                                    <li>
                                        We work on sharing model / split model. A Premium Account is split with 4-5 People, depending on the user’s availability.
                                    </li>
                                    <li>
                                        Login credentials are mailed in 2-15 Minutes after your request, you pay after logging in.
                                    </li>
                                    <li>
                                        Splitting the cost with 4-5 Users makes it affordable to everyone, and brings us very little profit margin.
                                    </li>
                                    <li>
                                        Yes, we do take care that you don't face problems, our 24*7 backend monitoring team monitors the multiple logins
                                    </li>
                                    <li>
                                        We have more than 20 Thousand happy users connected in our 2 years of journey.
                                    </li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: "30px 0px", textAlign: "center", color: "grey" }} >
                        Happy Binge Watching!!!
                    </div>
                </div>
            </div>
        )
    }
}

export default Plans
