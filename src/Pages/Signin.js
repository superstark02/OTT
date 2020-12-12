import React, { Component } from 'react'
import SubAppBar from "../Components/SubAppBar"
import getUser from '../Database/getUser'
import LogIn from '../Database/logIn'
import { GoogleLogin } from 'react-google-login';

export class Signin extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        getUser().then(result => {
            this.setState({ user: result.name })
        })
    }

    responseGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div>
                <SubAppBar />
                <div className="wrap" style={{ height: "90vh" }} >
                    <div>
                        <div onClick={() => { LogIn().then(r => { console.log(r) }) }} >
                            Google
                        </div>
                        <div>
                            FaceBook
                        </div>
                        <div>
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin
