import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import { useParams } from 'react-router-dom'
import MyList from '../Components/MyList';

class Adapter extends Component {

    render() {
        return (
            <div>
                <SubAppBar name={this.props.id} />
                <MyList title="Series" filter={[this.props.id,"Series"]} />
                <MyList title="Movies" filter={[this.props.id,"Movie"]} />
                <MyList title="Drama" filter={[this.props.id,"Drama"]} />
                <MyList title="Comedy" filter={[this.props.id,"Comedy"]} />
            </div>
        )
    }
}


export default function Category() {
    const { id } = useParams();

    return(
        <Adapter id={id} />
    )
}
