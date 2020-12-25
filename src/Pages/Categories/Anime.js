import React, { Component } from 'react'
import MyList from '../../Components/MyList'
import SubAppBar from '../../Components/SubAppBar'
import getCollectionQuery, { getByWord } from '../../Database/getCollectionQuery'
import shuffleArray from '../../Database/shuffleArray'

const list = [
    {
        title: "All",
        filter: "Anime"
    }
]

var data = []

export class Anime extends Component {

    state = {
        data: null
    }

    componentDidMount() {

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

        /*axios.post("https://us-central1-project-ott-d883c.cloudfunctions.net/api/todos", { name: "NAME" }).then(result => {
            console.log(result.data)
        })*/
    }

    render() {
        return (
            <div>
                <SubAppBar />
                {
                    this.state.data ? (
                        <MyList title="All" data={this.state.data[0]} filter={["Anime","Series"]} />
                    ) : (
                            <div className="wrap" >
                                Please Wait
                            </div>
                        )
                }
                {/*<MyList title="Shounen Comedy" filter={["Shounen", "Comedy"]} />
                <MyList title="Children & Family" filter={["Anime", "Shounen"]} />
                <MyList title="Slice Of Life" filter={["Anime", "Slice Of Life"]} />*/}
            </div>
        )
    }
}

export default Anime
