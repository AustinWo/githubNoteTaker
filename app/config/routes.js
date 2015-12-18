var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

// Route in Router can be expressed in JSX

module.exports = (
  // whenever someone is at the home index, render the Main component (Hello World)
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
