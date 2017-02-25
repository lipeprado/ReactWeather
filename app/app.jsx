var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory} >
      <Route path="/" component={Main} >
          <Route path="about" components={About}/>
          <Route path="examples" components={Examples}/>
          <IndexRoute components={Weather} />
      </Route>
  </Router>,
  document.getElementById('app')
);