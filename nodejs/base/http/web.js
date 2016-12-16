/**
 * Created by geekymv on 2016/12/16.
 */
'use strict'
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, resp) {
    console.log(req.method);
    console.log(req.url);
    console.log(url.parse(req.url, true));
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.end('hello world');
});
server.listen(3000);

console.log('Server is running at http://127.0.0.1:3000/');