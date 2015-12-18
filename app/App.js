var React = require('react');
var ReactDOM = require('react-dom'); // this does the rendering
var Router = require('react-router').Router;
var routes = require('./config/routes');

// pass in the router
// instead of passing in a component
// routes: instruction sheet to the router
ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)
