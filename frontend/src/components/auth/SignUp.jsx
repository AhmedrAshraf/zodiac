import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import { Link } from 'react-router';

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
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
                <h2>Sign UP</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} /><br/>
                    <input name="password" type="password" onChange={this.handleChange} /><br/><br/>
                    <button type="submit" value="Sign Up" class="button">Sign up</button><br/><br/>
                </form>
            
            
                <Link to="/log-in"><button className="button2">back</button></Link>

            
                </div>           
            </div>
            </Fragment>
        );
    }
}

export default SignUp;