import React, { Component } from 'react'
import MyList from '../../Components/MyList'
import SubAppBar from '../../Components/SubAppBar'

const list = [
    {
        title: "All",
        filter: "Anime"
    }
]

export class Anime extends Component {

    componentDidMount(){
        for (var i = 0; i < list.length; i++) {
            if (list[i].filter.length > 2) {
                getByWord("Index", list[i].filter).then(result => {
                    data.push(shuffleArray(result))
                    this.setState({ data: data })
                })
            } else {
                getCollectionQuery("Index", list[i].filter).then(result => {
                    data.push(shuffleArray(result))
                    this.setState({ data: data })
                })
            }
        }
    }

    render() {
        return (
            <div>
                <SubAppBar/>
                <MyList title="All" data />
                {/*<MyList title="Shounen Comedy" filter={["Shounen", "Comedy"]} />
                <MyList title="Children & Family" filter={["Anime", "Shounen"]} />
                <MyList title="Slice Of Life" filter={["Anime", "Slice Of Life"]} />*/}
            </div>
        )
    }
}

export default Anime
