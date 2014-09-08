/** @jsx React.DOM */

var React = require("react");
var Router = require('react-router-component')
var NotFound = Router.NotFound;
var Pages = Router.Pages
var Page = Router.Page

var HomePage = require('./home.jsx');
var NotFoundPage = require('./notfound.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <html>
        <head></head>
        <Pages path={this.props.path}>
          <Page path="/" handler={HomePage} />
          <NotFound handler={NotFoundPage} />
        </Pages>
      </html>
    )
  }
})