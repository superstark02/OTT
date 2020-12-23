import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'

const list = [
    {
        title: "Drama",
        filter: "Series"
    },
    {
        title: "Comedy",
        filter: "Series"
    },
]

var data = []

export class Series extends Component {

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
    }

    render() {
        return (
            <div>
                <SubAppBar name="Series" />
                {
                    this.state.data ? (
                        <div>
                            <MyList title={list[0].title} data={this.state.data[0]} />
                            <MyList title={list[1].title} data={this.state.data[1]} />
                        </div>
                    ) : (
                            <div className="wrap" >
                                Please Wait
                            </div>
                        )
                }
            </div>
        )
    }
}

export default Series
