import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import { Link } from "react-router";


class LogIn extends Component {

    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
            <div className="background2">

            <video autoPlay muted loop id="videobg2">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758653/logs_dmuqxb.mp4" type="video/mp4"/>
      </video>
            <div class="card">
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} /><br/>
                    <input name="password" type="password" onChange={this.handleChange} /><br/><br/>
                    <button type="submit" value="Log In" className="button">Log in</button>
                </form>
                  <h2>or</h2>
                  <div>
                  <Link to=""><img src ='./images/fbook.png' className="social" alt="facebook"/></Link><br/>
                  <Link to=""><img src ='./images/gmail.png' className="social" alt="gmail"/></Link><br/>
                  <Link to=""><img src ='./images/twit.png' className="social" alt="twitter"/></Link><br/>
                  </div>
                  <h2>Don't have an account?</h2>
                <Link to="/sign-up"><button className="button2">Sign Up</button></Link>
            </div>
        </div>
            </Fragment>
        );
    }
}

export default LogIn;