import './App.css';
import React,{useEffect,useState} from 'react';
import {Books,Users,Transaksi} from './pages';
import {Nav} from './layout';
import service from './service'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/transaksi">
          <Transaksi />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Books  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
