import React, { Component } from "react";
import actions from "../../services/index";
import { Link } from "react-router";
//import Amaken from "./Amaken";
//import newCollab from "./newCollab";


class Collabs extends Component {
  state = {
    collabs: []
  }
  async componentDidMount() {
    //actions.test()
    if (this.props.email) {
      let response=await actions.getMycollabs();
    console.log(response)
    this.setState({collabs:response.data.collabs})
    }
    else{
    let response=await actions.getallcollabs();
    console.log(response)
    this.setState({collabs:response.data.collabs})
  } }
  //created request for clothing action
  backendReq = async () => {
    let response = await actions.getAwaken();
    console.log(response);
  };
  shift = async (id) => {
    let response = await actions.makelive({id});
    console.log(response); 
    if (this.props.email) {
      let response=await actions.getMycollabs();
    console.log(response)
    this.setState({collabs:response.data.collabs})
    }
    else{
    let response=await actions.getallcollabs();
    console.log(response)
    this.setState({collabs:response.data.collabs})
  }
  };
  unshift = async (id) => {
    let response = await actions.notlive({id});
    console.log(response);
    if (this.props.email) {
      let response=await actions.getMycollabs();
    console.log(response)
    this.setState({collabs:response.data.collabs})
    }
    else{
    let response=await actions.getallcollabs();
    console.log(response)
    this.setState({collabs:response.data.collabs})
  }
  };
  showcollabs= () =>{
    return this.state.collabs.map(eachcollab =>{
      return(
        <div className="card">
          <img src="" alt="Mens" className="img" />
          <h1>{eachcollab.Artist}</h1>
          <p> </p>
          <p>
            <Link to={"/Works/" + eachcollab._id}>
              <button className="button2">Browse</button>
            </Link>
            {this.props.id===eachcollab.userId && eachcollab.Live!==true?
            
              <button className="button2" onClick={() => this.shift(eachcollab._id)}>Live</button>
            
            :
            
              ""
            
            }
            {this.props.id===eachcollab.userId && eachcollab.Live===true?
            
            <button className="button2" onClick={() => this.unshift(eachcollab._id)}>Undo</button>
          
          :
          
            ""
          
          }
           
            <a target="_blank" href = {`https://twitter.com/${eachcollab.Twitter}`}> <img src="./images/twitter.png" className="linksocial" alt="Twitter"/></a>
            <a target="_blank" href = {`https://youtube.com/${eachcollab.Youtube}`}><img src="./images/youtube.png" className="linksocial" alt="Youtube"/> </a>
            <a target="_blank" href = {`https://instagram.com/${eachcollab.Insta}`}> <img src="./images/insta.png" className="linksocial" alt="Insta"/></a>
          </p>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="background2">
      <video autoPlay muted loop id="videobg">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758610/pex_np7job.mp4" type="video/mp4"/>
      </video>
        <Link to="/newCollab">
            <button className="button2">newCollab</button>
            </Link>
        {/* <div class="card">
          <img src="./images/sill.jpg" alt="Mens" className="img" />
          <h1>New Collab</h1>
          <p> Click below to join our Collective</p>
          <p>
            <Link to="/newCollab">
            <button className="button2">Browse</button>
            </Link>
          </p>
        </div> */}
      {this.showcollabs()}
      </div>
    );
  }
}

export default Collabs;
