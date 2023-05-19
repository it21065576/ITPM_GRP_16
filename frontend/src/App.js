import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/user/Home';


import AddUser1 from './components/user/AddUser1';
import viewUser from './components/user/viewUser'
import EditUser from './components/user/EditUser';

import feedBack from './components/user/feedBack';

import Footer from './components/Footer';
import NavBar from './components/NavBar';


class App extends Component{
  render(){
    return(
      <Router>
        <NavBar/> {/* Create navbar */}
        <div style = {{backgroundColor:'#e0f6fc',  margin:"0"}}>
         
          <Route path="/" exact component={Home}></Route>

          <Route path="/feedBack" exact component={feedBack}></Route>

          <Route path="/AddUser1" exact component={AddUser1}></Route>
          <Route path="/viewUser" exact component={viewUser}></Route>
          <Route path="/EditUser/:id" exact component={EditUser}></Route>

          <div style={{paddingTop:'0px',width:'100%'}}>
          {/* Create footer */}
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
