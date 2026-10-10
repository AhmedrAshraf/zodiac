import React, { Component } from "react";
import actions from "../../services/index";
import { Link } from "react-router";
import withRouter from "../../withRouter";


class Amaken extends Component {

    state = {
        Artist :''
    }

         
  async componentDidMount(){
   console.log(this.props.match.params.artistid)
   let res1 = await actions.collabdetails(this.props.match.params.artistid)

    
    
      console.log(res1.data)
      this.setState(
        {...res1.data[0]}
      )
  }
  render() { 
    console.log(this)
    return (
      <div className="newbg">
      
      
          <section className="common">
      
            <div className="Featured">
            <h2>{this.state.Artist}</h2><br/>
              <p id="Bio">
              {this.state.Bio}
              </p>
          
            </div>
            </section>
      
      
      <div className="background2">
      
      <section className="common">
      
      <div>
      <h2 >Designs</h2>
      </div>
      <br/><br/>
        <div class="card">
        <img src={this.state.Imageurl} alt="poster" className="img"/>
        <h1 id="title">{this.state.Design}</h1>
        <p id="descript">{this.state.Info}</p>
        <p><button className="button2">add</button></p>
        </div>

        </section>
        </div>
        </div>
      
    );
  }
}

export default withRouter(Amaken);
