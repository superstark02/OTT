import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import BottomNavBar from '../Components/BottomNavBar';

export class Wrapper extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <BottomNavBar/>
            </div>
        )
    }
}

export default Wrapper
