import React, { Component } from 'react'
import { FixedSizeList } from 'react-window';
import SubAppBar from '../Components/SubAppBar';

const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
);

export class Temp extends Component {
    render() {
        return (
            <div>
                <SubAppBar />
                <ul>
                    <li><a href="https://www.netflix.com/watch/81245348?trackId=14170286&tctx=2%2C0%2C8a7ea70d-3fe1-4ebe-b7e0-01b8ca1a4672-432409867%2C4a6b6646-5430-4d05-b73b-b8cb4f245c83_28211082X3XX1611070942838%2C4a6b6646-5430-4d05-b73b-b8cb4f245c83_ROOT%2C" >Netflix</a></li>
                    <li><a href="https://www.primevideo.com/detail/0GDQ8EW8Z0E1AMARWKHFN0YZL9/ref=atv_hm_hom_c_8pZiqd_2_2" >Prime</a></li>
                    <li><a href="https://www.hotstar.com/in/movies/ratatouille/1260016855/watch" >Hotstar</a></li>
                    <li><a href="https://www.sonyliv.com/shows/hero-gayab-mode-on-1700000278" >Sony</a></li>
                    <li><a href="https://www.zee5.com/movies/details/suraj-pe-mangal-bhari/0-0-307715" >Zee5</a></li>
                </ul>
            </div>
        )
    }
}

export default Temp
