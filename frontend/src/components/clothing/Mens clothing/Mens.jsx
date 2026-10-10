import React, { Component } from 'react';
import actions from '../../../services/index';


class Mens extends Component {
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
          <source src="./images/streets.mp4" type="video/mp4"/>
      </video>
      <div class="card">
        <img src='./images/MensTee.jpg' alt="Tee" className="img"/>
        <h1>graphic t-shirts</h1>
        <p>Mens clothing</p>
        <p><button className="button2">Browse</button></p>
        </div>

        
        <div class="card">
        <img src='./images/MJacket.jpg' alt="Jacket" className="img"/>
        <h1>jackets</h1>
        <p>Womens clothing</p>
        <p><button className="button2">Browse</button></p>
        </div>
        

        
        
      </div>
      
    );
  }
}

export default Mens;