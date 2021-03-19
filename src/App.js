import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Dashboard from "./component/Dashboard/Dashboard";
import Home from './component/Home/Home';
import PostDetail from "./component/PostDetail/PostDetail";

function App() {
  return (
    <Router>
    <div>
      <ul>
        
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
