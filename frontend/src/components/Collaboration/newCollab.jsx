import React, { Component } from 'react';
import actions from '../../services/index'
import {TwitterShareButton} from "react-share"
import service from '../../api/service';
import withRouter from '../../withRouter';

class NewCollab extends Component {

    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.newCollab(this.state).then(response => {
            console.log(response)  
            this.props.history.push("/collabs")
        }).catch(({ response }) => console.error(response));
    }
    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("imageUrl", e.target.files[0]);
        
        service.handleUpload(uploadData)
        .then(response => {
             console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ Imageurl: response.secure_url });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }
    render() {
        console.log('redner newcollab')
        return (
            <div className="background2">
            <video autoPlay muted loop id="videobg">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758610/pex_np7job.mp4" type="video/mp4"/>
      </video>
            
            <div class="card3">
            <TwitterShareButton title="sada" url={`twitter.com/${this.state.Twitter}/`}>hello</TwitterShareButton>
                <form onSubmit={this.handleSubmit}>
                <br/>

                Artist Name <input name="Artist" type="Artist" onChange={this.handleChange}/><br/><br/>
                Bio<br/>
                <textarea name="Bio" type="text" onChange={this.handleChange}/> <br/><br/>
                Design Name <input name="Design" type="text" onChange={this.handleChange}/><br/>
                <input type="file" onChange={(e) => this.handleFileUpload(e)} />
                

                Description <textarea name="Info" className="textarea2" type="text" onChange={this.handleChange}/><br/>
                Twitter : <input name="Twitter" type="text" onChange={this.handleChange}/><br/>
                Youtube : <input name="Youtube" type="text" onChange={this.handleChange}/><br/>
                Instagram : <input name="Insta" type="text" onChange={this.handleChange}/><br/><br/>
                
                <button type="submit" className="button">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

export default withRouter(NewCollab);