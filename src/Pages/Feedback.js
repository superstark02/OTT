import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import emailjs from 'emailjs-com';
//import axios from 'axios';
//import { db } from '../firebase'

export class Feedback extends Component {

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
                <div style={{ padding: "0px 20px" }} className="w3-animate-bottom"  >
                    <h2>
                        Feedback
                    </h2>
                    <p>
                        Please let us know where are we behind. < br /><br />
                        Please mention if you want more content - series, movies, anime, podcasts etc.
                        Or any features you would like.
                        We are trying to get every OTP on our app possible and them available to you.
                    </p>
                    <form onSubmit={this.sendMail} >
                        <div>
                            <label>Message</label>
                        </div>
                        <div>
                            <textarea name="message" required placeholder="Type your feedback here.." />
                        </div>
                        <div>
                            <input type="submit" style={{ backgroundColor: "white", color: "black" }} value="Send" />
                        </div>
                    </form>
                    {
                        this.state.sent ? (
                            <div>
                                Message sent! Thank You for contacting us. We reply as soon as possible.
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                    <p>
                        <div>
                            <label>Recent Feedbacks</label>
                        </div>
                        <div style={{color:"grey"}} >
                            Here are some feedbacks received by us:
                        </div>
                        <div style={{color:"grey"}} >
                            "there should be a watch later option to save movies"
                        </div>
                        <div style={{color:"grey"}} >
                            "please post sacred games as well"
                        </div>
                        <div style={{color:"grey"}} >
                            "Kung Fu Panda has no subtitles"
                        </div>
                        <div style={{color:"grey"}} >
                            "Fast and furious nhi chal rhi"
                        </div>
                    </p>
                    <div>
                        We will listen to you and try our best to provide the best serivce possible.
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback
