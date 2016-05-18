var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var App = require('./components/App.js');
var Home = require('./components/Home.js');
var About = require('./components/About.js');
var Team = require('./components/Team.js');
var NotFound = require('./components/NotFound.js');
var Navigation = require('./components/Navigation.js');

/
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="team" component={Team}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));
