
import React, { Component } from 'react';
import actions from '../../services/index';



class Prints extends Component {
  async componentDidMount() {
   
    //actions.test()
  }
  //created request for clothing action
  backendReq = async() => {
    let resolve = await actions.getPrints()
    console.log(resolve)
  }

  render() {
    return (
      
      <div className="background3">
      
      
      <div class="card">
        <img src= './images/Frame.jpg' alt="Framed poster" className="img"/>
        <h1>Framed Poster</h1>
        <p>Framed Poster</p>
        <p><button className="button2">Browse</button></p>
        </div>
        

        
        <div class="card">
        <img src='./images/Poster.jpg' alt="poster" className="img"/>
        <h1>Poster</h1>
        <p>Poster</p>
        <p><button className="button2">Browse</button></p>
        </div>
        

        
        <div class="card">
        <img src='./images/Wall.jpg' alt="Wall" className="img"/>
        <h1>Wall</h1>
        <p>Wall</p>
        <p><button className="button2">Browse</button></p>
        </div>
        
        
      </div>
      
    );
  }
}

export default Prints;
