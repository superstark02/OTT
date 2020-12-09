import { Facebook, Instagram } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SubAppBar from '../Components/SubAppBar'
import "../CSS/Pages/Contact.css"
import emailjs from 'emailjs-com';

export class Help extends Component {

    state = {
        sent: null
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
                <div style={{ padding: "0px 20px" }} >
                    <h2>
                        Help Desk
                    </h2>
                    <p>
                        We dont't beleive that AI chats provide true customer-company relations.
                        Message us you query or contact us on Insagram and Facebook. <br></br>
                        We will get back to you in no time.
                    </p>
                    <p className="wrap" >
                        <div>
                            <Link>
                                <Facebook style={{ fontSize: "50px", margin: "10px" }} />
                            </Link>
                        </div>
                        <div style={{ fontSize: "30px" }}>
                            |
                        </div>
                        <div>
                            <Link>
                                <Instagram style={{ fontSize: "50px", margin: "10px" }} />
                            </Link>
                        </div>
                    </p>

                    <div className="wrap" >
                        <div className="width-change">
                            <h1>
                                Contact Us
                            </h1>
                            <div>
                                <h3>
                                    Leave your message here:
                            </h3>
                                <form  onSubmit={this.sendMail}  >
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <div>
                                        <input name="name" required placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <div>
                                        <input name="email" required placeholder="Email" />
                                    </div>
                                    <div>
                                        <label>Message</label>
                                    </div>
                                    <div>
                                        <textarea name="message" required placeholder="Type your message here.." />
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


                                <p>
                                    To contact us, you can also mail at mail@pidgin.online
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Help
