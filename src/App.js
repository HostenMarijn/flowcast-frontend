import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidebar />


        <Router>
          <Switch>
            <Route to='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </Router>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
