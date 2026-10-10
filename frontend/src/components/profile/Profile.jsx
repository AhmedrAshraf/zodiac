import React, { Component } from 'react';
import { Navigate } from 'react-router';


const Profile = (props) => {
    if(!props.user.email){
        return <Navigate to='/log-in' />
    }
    return (
        <div className="background2">
        <video autoPlay muted loop id="videobg2">
          <source src="https://res.cloudinary.com/dlyogvfeu/video/upload/v1590758653/logs_dmuqxb.mp4" type="video/mp4"/>
      </video>
        <div class="card">
            
            Welcome {props.user.email} !!! You are now logged in.
        </div>
        </div>
    );
}

export default Profile;