import React, { Component } from 'react';
import actions from '../../../services/index';


class Menjacket extends Component {
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
      
        
        
      </div>
      
    );
  }
}

export default Menjacket;