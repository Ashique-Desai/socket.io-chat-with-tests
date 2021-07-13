import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./index.css"
import Home from "./Home/Home"
// import './App.css';
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route data-testid="route-room" exact path="/:roomId" component={ChatRoom}/>
      </Switch>
    </Router>
  );
}

export default App;
