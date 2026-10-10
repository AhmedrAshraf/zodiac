import React, { Component } from 'react';
import actions from '../../../services/index';


class Womens extends Component {
    async componentDidMount() {
   
        //actions.test()
      }
      //created request for clothing action
      backendReq = async() => {
        let response = await actions.getWclothing()
        console.log(response)
      }

    render() {
        return (
         <div className="background2">
         <video autoPlay muted loop id="videobg">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758854/streets_snnmtf.mp4" type="video/mp4"/>
      </video>
      <div class="card">
        <img src='./images/WTee.jpg' alt="Tee" className="img"/>
        <h1>graphic t-shirts</h1>
        <p>Tee clothing</p>
        <p><button className="button2">Browse</button></p>
        </div>

        
        <div class="card">
        <img src='./images/WJacket.jpg' alt="Jacket" className="img"/>
        <h1>jackets</h1>
        <p>Womens clothing</p>
        <p><button className="button2">Browse</button></p>
        </div>
        
       
        
      </div>
      
    );
  }
}

export default Womens;