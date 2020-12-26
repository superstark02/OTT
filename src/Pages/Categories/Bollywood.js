import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'
import { useParams } from 'react-router-dom'
import { getLatest } from '../../Database/getCollectionQuery'
import shuffleArray from '../../Database/shuffleArray'
import MyList from '../../Components/MyList';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import axios from 'axios';

class Adapter extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        axios.get('https://us-central1-project-ott-d883c.cloudfunctions.net/widgets/category/Bollywood').then(result=>{
            this.setState({ data: shuffleArray(result.data) })
        })

        getLatest("Index",'Bollywood').then(snap=>{
            this.setState({latest:snap})
        })
    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <SubAppBar name={this.props.id} />
                    {
                        this.state.latest ? (
                            <MyList title="Hollywood Popular" data={this.state.latest} filter={['Movie','Hollywood']} />
                        ):(
                            <div></div>
                        )
                    }
                    <MyList title="Series" data={this.state.data[0]} filter='Series' />
                    <MyList title="Drama" data={this.state.data[1]}  filter='Drama' />
                    <MyList title="Comedy" data={this.state.data[2]} filter='Comedy' />
                    <MyList title="Comedy" data={this.state.data[3]} filter='Comedy' />
                </div>
            )
        }
        else {
            return (
                <div>
                    <SubAppBar name={this.props.id} />
                    <div className="wrap" style={{ minHeight: "90vh" }} >
                        <Loader
                            type="TailSpin"
                            color="#FFFF"
                            height={50}
                            width={50}
                            timeout={3000} //3 secs
                        />
                    </div>
                </div>
            )
        }
    }
}


export default function Bollywood() {
    const { id } = useParams();

    return (
        <Adapter id={id} />
    )
}
