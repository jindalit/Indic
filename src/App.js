import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './protected.route'
import ForgotPassword from './components/forgotpassword'
import Footer from './components/common/footer'
import Login from './components/login';
import Signup from './components/signup';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className={"App"}>

        <Router>
          
          <Switch>
            <Route path="/login" component={Login} />
            <Route path='/Signup' component={Signup} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <Route path="*">
              No Match
            </Route>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
