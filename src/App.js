// Libraries and Dependencies 
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { Provider } from 'react-redux';

// Store

import Store from "./Store/Store";

// Components
import PostsList from './Pages/PostsList';
import Post from './Pages/Post';
import User from './Pages/User';
import Login from './Pages/Login';
import StatelessApp from './Components/stateless/StatelessApp';


// Routes
import PrivateRoute from "./Routes/PrivateRoute";



function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/" exact component={StatelessApp} />
        <Route path="/posts" component={PostsList} />
        <Route path="/post/:id" component={Post} />
        <Route path="/user/:id" component={User} />
        <Route path="/login"  component={Login} />

        <PrivateRoute path="/authorized/posts" render={ () => <PostsList /> } />
      </Switch>
     
    </div>
  );
}

export default App;
