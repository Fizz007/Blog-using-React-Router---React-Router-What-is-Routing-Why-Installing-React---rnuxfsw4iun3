import React from 'react';
import { Link, NavLink, Switch,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PostDetail from "./PostDetail";
import PostList from "./PostList";


export default function Blog() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          {/* Create NavLink to About and Posts */}
        </nav>
  
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Create Routes to About, PostList and PostDetail */}
        </Switch>
      </div>
    );
  }