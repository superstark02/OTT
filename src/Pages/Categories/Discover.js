import React, { Component } from 'react'
import MyList from '../../Components/MyList'
import SubAppBar from '../../Components/SubAppBar'

const list = [
    {
        title: "ROFL Things",
        filter: "Comedy"
    },
    {
        title: "Anytime Watch",
        filter: ["Drama","Series"]
    },
    {
        title: "ROFL Things",
        filter: "Animation"
    },
    {
        title: "ROFL Things",
        filter: "Animation"
    },
    {
        title: "ROFL Things",
        filter: "Animation"
    },
    {
        title: "ROFL Things",
        filter: "Animation"
    },
]

export class Discover extends Component {

    state = {
        data: null
    }

    componentDidMount(){
        
    }

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
