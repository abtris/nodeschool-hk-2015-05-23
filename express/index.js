(function() {
  'use strict';
  var express = require('express');
  var app = express();
  app.set('json spaces', 2);
  // Polls API Root
  // Retrieve the Entry Point
  app.get('/', function(req, res) {
      res.status(200).json({"questions_url": "/questions"});
    });
  // Group Question
  // Question
  // View a Questions Detail
  app.get('/questions/:question_id', function(req, res) {
      res.status(200).json({"question":"Favourite programming language?", "published_at":"2014-11-11T08:40:51.620Z", "url":"/questions/1", "choices":[{"choice":"Swift", "url":"/questions/1/choices/1", "votes":2048}, {"choice":"Python", "url":"/questions/1/choices/2", "votes":1024}, {"choice":"Objective-C", "url":"/questions/1/choices/3", "votes":512}, {"choice":"Ruby", "url":"/questions/1/choices/4", "votes":256}]});
    });
  // Choice
  // Vote on a Choice
  app.post('/questions/:question_id/choices/:choice_id', function(req, res) {
      res.set('Location', '/questions/' + req.params.question_id);
      res.status(201).send('');
    });
  // Questions Collection
  // List All Questions
  app.get('/questions', function(req, res) {
      res.set('Link', '</questions?page=' + (parseInt(req.params.page, 10) + 1) + '>; rel="next"');
      res.status(200).json([{"question":"Favourite programming language?", "published_at":"2014-11-11T08:40:51.620Z", "url":"/questions/1", "choices":[{"choice":"Swift", "url":"/questions/1/choices/1", "votes":2048}, {"choice":"Python", "url":"/questions/1/choices/2", "votes":1024}, {"choice":"Objective-C", "url":"/questions/1/choices/3", "votes":512}, {"choice":"Ruby", "url":"/questions/1/choices/4", "votes":256}]}]);
    });
  // Create a New Question
  app.post('/questions/', function(req, res) {
      res.set('Location', '/questions/2');
      res.status(201).json({"question":"Favourite programming language?", "published_at":"2014-11-11T08:40:51.620Z", "url":"/questions/2", "choices":[{"choice":"Swift", "url":"/questions/2/choices/1", "votes":0}, {"choice":"Python", "url":"/questions/2/choices/2", "votes":0}, {"choice":"Objective-C", "url":"/questions/2/choices/3", "votes":0}, {"choice":"Ruby", "url":"/questions/2/choices/4", "votes":0}]});
    });

  var server = app.listen(3003, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

  });
}());
