import React, { Component } from 'react';
import actions from '../../../services/index';


class womenjacket extends Component {
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
        <img src='./images/jacketw.jpg' alt="Womens" className="img"/>
        <h1>Chic jacket</h1>
        <p class="price">$29.99</p>
        <p></p>
        <p><button className="button2">Browse</button></p>
        </div>

        <div class="card">
        <img src='./images/wheel.jpg' alt="Womens" className="img"/>
        <h1>Red leather jacket</h1>
        <p class="price">$29.99</p>
        <p></p>
        <p><button className="button2">Browse</button></p>
        </div>

        <div class="card">
        <img src='./images/jacketcamo.jpg' alt="Womens" className="img"/>
        <h1>Stylish camo</h1>
        <p class="price">$29.99</p>
        <p></p>
        <p><button className="button2">Browse</button></p>
        </div>

        
        
        
      </div>
      
    );
  }
}

export default womenjacket;