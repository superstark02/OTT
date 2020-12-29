import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar';
import { getByWord } from "../Database/getCollectionQuery"
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

export class ShowCategory extends Component {
    state = {
        data: null
    }
    componentDidMount(){
        getByWord("Index", this.props.match.params.id).then(result=>{
            this.setState({data:result})
        })
    }
    render() {
        return (
            <div>
                <SubAppBar />
                <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: 'space-evenly' }} >

                    {
                        this.state.data &&
                        this.state.data.map(item => {
                            return (
                                <div style={{ width: "fit-content", margin: "10px 0px" }} className="wrap w3-animate-opacity" >
                                    <ButtonBase style={{ height: "100%" }}>
                                        <Link to={"/display/" + item.id}
                                            style={{ height: "100%" }}  >
                                            <div className="list-item wrap" style={{ backgroundImage: "url(" + item.poster + ")" }} >

                                            </div>
                                        </Link>
                                    </ButtonBase>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ShowCategory
