import React, { Component } from 'react'
import { uploadData } from '../Database/uploadData'
//import { uploadFile } from '../Database/uploadFile'

export class FileUpload extends Component {

    state = {
        files: null,
        platform: null,
        industry: null,
        genre: null,
        id: null
    }

    upload = () => {
        var data = [
            
        ]

        //uploadFile(data[0].industry, data[0].platform, data[0].id, this.state.files);
        uploadData(data);
    }

    render() {
        return (
            <div style={{padding:"10px"}} >
                <div>
                    <input type="file" multiple onChange={(e) => { this.setState({ files: e.target.files }) }} ></input>
                </div>
                <div>
                    <input placeholder="industry" onChange={(e) => { this.setState({ industry: e.target.value }) }} />
                </div>
                <div>
                    <input placeholder="platform" onChange={(e) => { this.setState({ platform: e.target.value }) }} />
                </div>
                <div>
                    <input placeholder="id" onChange={(e) => { this.setState({ id: e.target.value }) }} />
                </div>
                <div>
                    <input type="submit" onClick={this.upload} />
                </div>
            </div>
        )
    }
}

export default FileUpload
