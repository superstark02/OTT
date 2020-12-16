import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'
import { useParams } from 'react-router-dom'
import getCollectionQuery from '../../Database/getCollectionQuery'
import shuffleArray from '../../Database/shuffleArray'
import MyList from '../../Components/MyList';

const list = [
    {
        title: "Series",
    },
    {
        title: "Movie",
    },
    {
        title: "Drama",
    },
    {
        title: "Comedy",
    }
]

var data = []

class Adapter extends Component {

    state = {
        data: null
    }

    componentDidMount(){
        for (var i = 0; i < list.length; i++) {
            getCollectionQuery("Index", [this.props.id, list[i].title]).then(result => {
                data.push(shuffleArray(result))
                this.setState({ data: data })
            })
        }
    }

    render() {
        if(this.state.data){
            return (
                <div>
                    <SubAppBar name={this.props.id} />
                    <MyList title="Series" data={this.state.data[0]} />
                    <MyList title="Drama" data={this.state.data[2]} />
                    <MyList title="Comedy" data={this.state.data[3]} />
                </div>
            )
        }
        else{
            return(
                <div>
                    Loading
                </div>
            )
        }
    }
}


export default function Category() {
    const { id } = useParams();

    return(
        <Adapter id={id} />
    )
}
