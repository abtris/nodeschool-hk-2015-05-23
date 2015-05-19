"use strict";

var koa = require('koa');
var route = require('koa-route');
var json = require('koa-json');
var logger = require('koa-logger');
var app = koa();
require('koa-qs')(app);
app.use(logger());
app.use(json());

// Polls API Root
// Retrieve the Entry Point
app.use(route.get('/', function *() {
  this.body = {"questions_url": "/questions"};
}));
// Group Question
// Question
// View a Questions Detail
app.use(route.get('/questions/:question_id', function *(question_id) {
  this.body = {"question":"Favourite programming language?","published_at":"2014-11-11T08:40:51.620Z","url":"/questions/1","choices":[{"choice":"Swift","url":"/questions/1/choices/1","votes":2048},{"choice":"Python","url":"/questions/1/choices/2","votes":1024},{"choice":"Objective-C","url":"/questions/1/choices/3","votes":512},{"choice":"Ruby","url":"/questions/1/choices/4","votes":256}]};
}));
// Choice
// Vote on a Choice
app.use(route.post('/questions/:question_id/choices/:choice_id', function *(question_id, choice_id) {
  this.status = 201;
  this.set('Location', '/questions/' + question_id);
  this.body = '';
}));

// Questions Collection
// List All Questions
app.use(route.get('/questions', function *() {
  this.set('Link', '</questions?page='+ (parseInt(this.query.page, 10) + 1) +'>; rel="next"');
  this.body = [{"question":"Favourite programming language?","published_at":"2014-11-11T08:40:51.620Z","url":"/questions/1","choices":[{"choice":"Swift","url":"/questions/1/choices/1","votes":2048},{"choice":"Python","url":"/questions/1/choices/2","votes":1024},{"choice":"Objective-C","url":"/questions/1/choices/3","votes":512},{"choice":"Ruby","url":"/questions/1/choices/4","votes":256}]}];
}));
// Create a New Question
app.use(route.post('/questions/', function *() {
  this.status = 201;
  this.set('Location', '/questions/2');
  this.body = {"question":"Favourite programming language?","published_at":"2014-11-11T08:40:51.620Z","url":"/questions/2","choices":[{"choice":"Swift","url":"/questions/2/choices/1","votes":0},{"choice":"Python","url":"/questions/2/choices/2","votes":0},{"choice":"Objective-C","url":"/questions/2/choices/3","votes":0},{"choice":"Ruby","url":"/questions/2/choices/4","votes":0}]};
}));

app.on('error', function (err){
  console.error('server error', err);
});
app.listen(3000);
