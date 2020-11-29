import React, { Component } from 'react'
import { uploadFile } from '../Database/uploadFile'

export class FileUpload extends Component {

    state={
        files: null,
        platform:null,
        industry:null,
        genre:null,
        id:null
    }

    upload = () => {
        uploadFile(this.state.industry, this.state.platform, this.state.id, this.state.files)
    }

    render() {
        return (
            <div  >
                <input type="file" multiple onChange={(e)=>{this.setState({files:e.target.files})}} ></input>
                <input placeholder="industry" onChange={(e)=>{this.setState({industry:e.target.value})}} />
                <input placeholder="platform" onChange={(e)=>{this.setState({platform:e.target.value})}} />
                <input placeholder="id" onChange={(e)=>{this.setState({id:e.target.value})}} />
                <input type="submit" onClick={this.upload} />
            </div>
        )
    }
}

export default FileUpload
