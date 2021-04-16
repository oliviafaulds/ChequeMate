import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation, Home, Spending, Transactions, Calendar, Households, Messages, Settings, ProfilePage} from "./components";
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/spending" exact component={() => <Spending />} />
          <Route path="/transactions" exact component={() => <Transactions />} />
          <Route path="/calendar" exact component={() => <Calendar />} />
          <Route path="/households" exact component={() => <Households />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/settings" exact component={() => <Settings />} />
          <Route path="/profilepage" exact component={() => <ProfilePage />} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;