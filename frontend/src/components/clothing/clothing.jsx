
import React, { Component } from 'react';
import actions from '../../services/index'
import { Link } from "react-router";



class Apparel extends Component {
  async componentDidMount() {
   
    //actions.test()
  }
  //created request for clothing action
  backendReq = async() => {
    let response = await actions.getClothing()
    console.log(response)
  }

  render() {
    return (
      <div className="background2">
      <video autoPlay muted loop id="videobg">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758854/streets_snnmtf.mp4" type="video/mp4"/>
      </video>
      <div class="card">
        <img src='./images/Mens.jpg' alt="Mens" className="img"/>
        <h1>Mens clothing</h1>
        <p>Mens clothing</p>
        <p><Link to = "/Mens" ><button className="button2">Browse</button></Link></p>
        </div>

        
        <div class="card">
        <img src='./images/Womens.jpg' alt="Womens" className="img"/>
        <h1>Womens clothing</h1>
        <p>Womens clothing</p>
        <p><Link to ="/Womens"><button className="button2">Browse</button></Link></p>
        </div>
        

        
        <div class="card">
        <img src='./images/Acessories.jpg' alt="Acessories" className="img"/>
        <h1>Acessories</h1>
        <p>Acessories</p>
        <p><Link to ="/Etc"><button className="button2">Browse</button></Link></p>
        </div>
        
        
      </div>
      
    );
  }
}

export default Apparel;
