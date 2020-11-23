import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard/Dashboard';

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <h1>Page Not found.</h1>
      <a href="/">Back to Home</a>
    </div>
  )
}


const App = () => {
  console.log("App");
  return (
    <Container component="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
    </Container>
  );
}

export default App;
