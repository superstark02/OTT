import React, { Component } from 'react'
import SubAppBar from "../Components/SubAppBar"
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa"

export class Signin extends Component {

    state = {
        pw: null,
        userEmail: "",
        cpw: null,
        error: null,
        phone: "",
    }

    responseGoogle = () => {
        window.Android.signin();
    }

    responseEmail = (e) => {
        e.preventDefault()
        if (this.state.pw === this.state.cpw) {
            window.Android.emailsignin(this.state.userEmail, this.state.pw);
        } else if (this.state.pw !== this.state.cpw) {
            this.setState({ error: "Passwords do not match." })
        }
    }

    render() {
        return (
            <div>
                <SubAppBar />

                <div>
                    <h2 className="wrap" >
                        Sign In
                    </h2>
                    {/*<div className="wrap" >
                        Sign in by Phone.
                    </div>
                    <form style={{ padding: "10px" }} onSubmit={(e) => { this.responseEmail(e) }} >
                        <div>
                            <label>Phone</label>
                        </div>
                        <div>
                            <input id="phone" name="phone" required placeholder="Phone" value={this.state.phone} onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                        </div>
                        {
                            this.state.phone.length > 9 && this.state.userEmail.length < 1 ? (
                                <div className="wrap" >
                                    <input type="submit" value="Get OTP" />
                                </div>
                            ) : (
                                    <div></div>
                                )
                        }
                    </form>*/}

                    <div className="wrap" >
                        Sign in by e-mail.
                    </div>
                    <form style={{ padding: "10px" }} onSubmit={(e) => { this.responseEmail(e) }} >
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <input id="email" name="email" required placeholder="Email" value={this.state.userEmail} onChange={(e) => { this.setState({ userEmail: e.target.value }) }} />
                        </div>
                        {
                            this.state.userEmail.length > 0 ? (
                                <div>
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <div>
                                        <input id="pw" name="pw" required placeholder="Password" value={this.state.pw} onChange={(e) => { this.setState({ pw: e.target.value }) }} />
                                    </div>
                                    <div>
                                        <label>Confirm Password</label>
                                    </div>
                                    <div>
                                        <input id="cpw" name="cpw" required placeholder="Confirm Password" value={this.state.cpw} onChange={(e) => { this.setState({ cpw: e.target.value }) }} />
                                    </div>
                                    <div className="wrap" >
                                        <input type="submit" value="Sign In" />
                                    </div>
                                    <div>
                                        {this.state.error}
                                    </div>
                                </div>
                            ) : (
                                    <div>

                                    </div>
                                )
                        }
                    </form>
                </div>

                <p className="wrap" >
                    <h3>
                        Other Sign In Options
                    </h3>
                </p>

                <div className="wrap">
                    <div>
                        <div className="wrap" >
                            <div onClick={this.responseGoogle} className="wrap"
                                style={{
                                    borderRadius: "5px",
                                    boxShadow: "0px 0px 5px",
                                    padding: "10px",
                                    backgroundColor: "#D54836",
                                    color: "white",
                                    justifyContent: "space-between",
                                    margin: "10px"
                                }} >
                                <FaGooglePlusG size="20px" style={{ marginRight: "10px" }} />
                                <div>
                                    Google
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin
