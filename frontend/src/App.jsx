import React, {Component, Fragment} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.jsx';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import Apparel from './components/clothing/clothing';
import Prints from './components/Post/Prints.jsx'
import Mens from './components/clothing/Mens clothing/Mens';
import Womens from './components/clothing/Womens clothing/Womens';
import Etc from './components/clothing/Acessories/Etc';

import Collabs from './components/Collaboration/Collabs'
import Amaken from './components/Collaboration/Amaken'
import NewCollab from './components/Collaboration/newCollab'

class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    console.log(user.data)
    this.setState({...user.data})
    

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

 

  render(){

    return (
    <BrowserRouter>
      
      <nav>
      <NavLink to ='/'><img src='./images/pro.png' className="logo" alt="logo"/></NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/">Home </NavLink>&nbsp;&nbsp;&nbsp;
  
        {this.state.email ? 
          <Fragment>
           <NavLink onClick={this.logOut} to='/'>Log Out </NavLink> &nbsp;&nbsp;&nbsp;
           <NavLink to="/profile">Profile</NavLink>&nbsp;&nbsp;&nbsp;
           </Fragment>
           :
           <Fragment>
           <NavLink to="/log-in">Log In </NavLink>&nbsp;&nbsp;&nbsp;
           </Fragment>
          }
      <NavLink to ='/Apparel'>Apparel </NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to ='/Prints'>Prints</NavLink> &nbsp;&nbsp;&nbsp;
      <NavLink to ='/Collabs'>Collabs</NavLink> &nbsp;&nbsp;&nbsp;
      </nav>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp setUser={this.setUser} />} />
        <Route path="/log-in" element={<LogIn setUser={this.setUser}/>} />
        <Route path="/profile" element={<Profile user={this.state}/>} />
        <Route path="/Apparel" element={<Apparel />} />
        <Route path="/Prints" element={<Prints />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Etc" element={<Etc />} />
        <Route path="/Collabs" element={<Collabs email={this.state.email}id={this.state._id} />} />
        <Route path="/Works" element={<Amaken />} />
        <Route path="/newCollab" element={<NewCollab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  }
}
export default App;
