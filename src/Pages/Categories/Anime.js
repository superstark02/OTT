import React, { Component } from 'react'
import MyList from '../../Components/MyList'
import SubAppBar from '../../Components/SubAppBar'

export class Anime extends Component {
    render() {
        return (
            <div>
                <SubAppBar/>
                <MyList title="All" filter="Anime" />
                {/*<MyList title="Shounen Comedy" filter={["Shounen", "Comedy"]} />
                <MyList title="Children & Family" filter={["Anime", "Shounen"]} />
                <MyList title="Slice Of Life" filter={["Anime", "Slice Of Life"]} />*/}
            </div>
        )
    }
}

export default Anime
