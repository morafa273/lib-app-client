import './App.css';
import React from 'react';
import {Books,Users,Transaksi,AddBook, EditBook,DetilTrans} from './pages';
import {Nav} from './layout';
//import service from './service'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';



function App() {

  return (

    <Router>
      <Nav/>
      <Switch>
        <Route path='/edituser'>
            <EditUser/>
        </Route>
        <Route path='/adduser'>
            <AddUser/>
        </Route>
        <Route path="/detiltrans">
            <DetilTrans/>
        </Route>
        <Route path="/editbook">
          <EditBook/>
        </Route>
        <Route path="/addbook">
          <AddBook/>
        </Route>
        <Route path="/transaksi">
          <Transaksi />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
