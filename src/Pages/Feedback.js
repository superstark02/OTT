import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import emailjs from 'emailjs-com';
import {db} from '../firebase'

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

    componentDidMount(){
        var data = []
        db.collection("Index").orderBy('year').limit(5).get().then(snap=>{
            snap.forEach(doc=>{
                data.push(doc.id)
                console.log(doc.id)
            })
        })
    }

    render() {
        return (
            <div>
                <SubAppBar />
                <div style={{ padding: "0px 20px" }}  className="w3-animate-bottom"  >
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
