import React, { Component } from 'react'
import SubAppBar from "../Components/SubAppBar"
import getUser from '../Database/getUser'
import LogIn from '../Database/logIn'

export class Signin extends Component {

    state = {
        user:null
    }

    componentDidMount(){
        getUser().then(result=>{
            this.setState({user:result.name})
        })
    }

    render() {
        return (
            <div>
                <SubAppBar />
                <div className="wrap" style={{ height: "90vh" }} >
                    <div>
                        <div onClick={()=>{LogIn().then(r=>{console.log(r)})}} >
                            Google
                        </div>
                        <div>
                            FaceBook
                        </div>
                        <div>
                            {this.state.user}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin
