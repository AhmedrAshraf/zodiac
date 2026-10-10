import React, { Component } from 'react';
import actions from '../../../services/index';


class Etc extends Component {
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
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758532/items_wymq5w.mp4" type="video/mp4"/>
      </video>
      <div class="card">
        <img src='./images/RTE.jpg' alt="Mens" className="img"/>
        <h1>Red Riger Eye Bracelet</h1>
        <p class="price">$7.99</p>
        <p>Red Riger Eye Bracelet</p>
        <p><button className="button2">Browse</button></p>
        </div>

        
        <div class="card">
        <img src='./images/cloud.jpg' alt="Womens" className="img"/>
        <h1>World globe necklace</h1>
        <p class="price">$19.99</p>
        <p>World globes necklace</p>
        <p><button className="button2">Browse</button></p>
        </div>

        <div class="card">
        <img src='./images/wheel.jpg' alt="Womens" className="img"/>
        <h1>Tibetian Prayer Wheel Necklace</h1>
        <p class="price">$19.99</p>
        <p>Tibetian Prayer Wheel Necklace</p>
        <p><button className="button2">Browse</button></p>
        </div>

        <div class="card">
        <img src='./images/biome.jpg' alt="Womens" className="img"/>
        <h1>Angular Biome Necklace</h1>
        <p class="price">$19.99</p>
        <p>Tibetian Prayer Wheel Necklace</p>
        <p><button className="button2">Browse</button></p>
        </div>

        <div class="card">
        <img src='./images/froze.jpg' alt="Womens" className="img"/>
        <h1>Froze over Necklace</h1>
        <p class="price">$19.99</p>
        <p>Froze over Necklace</p>
        <p><button className="button2">Browse</button></p>
        </div>
        
        <div class="card">
        <img src='./images/froze.jpg' alt="Womens" className="img"/>
        <h1>Froze over Necklace</h1>
        <p class="price">$19.99</p>
        <p>Froze over Necklace</p>
        <p><button className="button2">Browse</button></p>
        </div>
        
        
      </div>
      
    );
  }
}

export default Etc;