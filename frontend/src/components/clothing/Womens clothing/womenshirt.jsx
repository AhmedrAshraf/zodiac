import React, { Component } from 'react';
import actions from '../../../services/index';


class womenshirt extends Component {
    async componentDidMount() {
   
        //actions.test()
      }
      //created request for clothing action
      backendReq = async() => {
        let response = await actions.getMClothing()
        console.log(response)
      }

    render() {
        return (
         <div className="background2">
         <video autoPlay muted loop id="videobg">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758854/streets_snnmtf.mp4" type="video/mp4"/>
      </video>
      <div class="card">
                
        <div class="card">
        <img src='./images/angella.jpg' alt="Womens" className="img"/>
        <h1>Revo shirt</h1>
        <p class="price">$19.99</p>
        <p></p>
        <p><button className="button2">Browse</button></p>
        </div>

        <div class="card">
        <img src='./images/chandra.jpg' alt="Womens" className="img"/>
        <h1>Grapic Black</h1>
        <p class="price">$19.99</p>
        <p></p>
        <p><button className="button2">Browse</button></p>
        </div>
     
        
      </div>
      </div>
    );
  }
}

export default womenshirt;