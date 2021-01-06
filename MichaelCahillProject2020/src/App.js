import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Store } from "./components/store";
import {Edit} from './components/edit';

 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Michael</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <h2>Transfer Market</h2>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Homepage} exact />
            <Route path='/create' component={Create} exact />
            <Route path="/store" component={Store} />
            <Route path="/edit" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
