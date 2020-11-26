import React, { Component } from 'react'
import MyAppBar from '../Components/MyAppBar'
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import MyList from '../Components/MyList';
import Popular from '../Components/Popular';

export class Home extends Component {
    render() {
        return (
            <div>
                <MyAppBar />
                <Carousel />
                <Categories />
                <MyList />
                <Popular />
            </div>
        )
    }
}

export default Home
