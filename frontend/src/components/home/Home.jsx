import React, { Component } from "react";
import actions from "../../services/index";
import Carousel from "../Carousel"

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
       <div className="Parent">
         <section>
         <Carousel></Carousel>
         </section>
          
      </div>
    );
  }
}

export default Home;
