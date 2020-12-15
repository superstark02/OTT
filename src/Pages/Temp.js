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
                <FixedSizeList
                    height={window.innerHeight}
                    itemCount={1000}
                    itemSize={10}
                    width={window.innerWidth}
                >
                    {Row}
                </FixedSizeList>
            </div>
        )
    }
}

export default Temp
