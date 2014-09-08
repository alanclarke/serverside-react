require('node-jsx').install({extension: '.jsx'});
var React = require("react");
var App = require("./components/base.jsx");
var hapi = require("hapi");
var url = require('url')
var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8000);
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (req, reply) {
      var path = url.parse(req.url).pathname;
      var app = App({
        path: path
      });
      var markup = React.renderComponentToString(app);
      reply(markup);
    }
});

server.start();