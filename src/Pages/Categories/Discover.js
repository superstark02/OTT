import React, { Component } from 'react'
import MyList from '../../Components/MyList'
import SubAppBar from '../../Components/SubAppBar'

export class Discover extends Component {
    render() {
        return (
            <div>
                <SubAppBar />
                <MyList title="Top Rated On IMDb" filter="Animation" />
                <MyList title="ROFL Things" filter="Comedy" />
                <MyList title="Anytime Watch" filter={["Drama","Series"]} />
                <MyList title="By Netflix" filter="Netflix" />
                <MyList title="By Disney+Hotstar" filter="Disney+Hotstar" />
                <MyList title="By TVF" filter="TVF" />
            </div>
        )
    }
}

export default Discover
