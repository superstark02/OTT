import React, { Component } from 'react'
import {Stories as MyStories} from 'react-insta-stories';
import "../CSS/Components/MyList.css"

const stories = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

export class Stories extends Component {
    render() {
        return (
            <div>
                <div className="h7" >
                    Hollywood Movies
                </div>
                <MyStories
                    stories={stories}
                    defaultInterval={1500}
                    width={432}
                    height={768}
                />
            </div>
        )
    }
}

export default Stories
