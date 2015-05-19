var http = require('http');
var koa = require('koa');
var route = require('koa-route');
var app = koa();
http.createServer(app.callback()).listen(3000);



app.on('error', function(err){
  log.error('server error', err);
});
