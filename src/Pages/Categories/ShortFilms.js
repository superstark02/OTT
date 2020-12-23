import React, { Component } from 'react'
import SubAppBar from '../../Components/SubAppBar'

export class ShortFilms extends Component {
    render() {
        return (
            <div>
                <SubAppBar name="Short Films" />
                <div className="wrap" style={{height:"90vh"}} >
                    SORRY! It's Empty For Now. 
                </div>
            </div>
        )
    }
}

export default ShortFilms
