import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
import Myproducts from './container/productDescription';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home';
import Know from './container/knowmore';
import '@fortawesome/fontawesome-free/css/all.min.css';
 

const app = (
  <Router>
      <div>
        <Switch>
          <Route exact path="/product/:myProductTitleId" component={Myproducts} />
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={Know} />
          </Switch>
      </div>
  </Router>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();