import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import emailjs from 'emailjs-com';
import axios from 'axios';
import { db } from '../firebase'

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

    componentDidMount() {
        /*var data = []
        db.collection("Index").orderBy('year', 'desc').get().then(snap => {
            snap.forEach(doc => {
                if (data.length < 9) {
                    data.push(doc.data())
                }
            })

            axios.post("https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/next-data", {
                filter: ['Hollywood','Comedy'],
                last: '2016'
            }).then(result => {
                console.log("Data:")
                console.log(result.data)
            }).catch(e => {
                console.log(e)
            })
        })*/

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
                                Message sent! Thank You for caontacting us. We reply as soon as possible.
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default Feedback
