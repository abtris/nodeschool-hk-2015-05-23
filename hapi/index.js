var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({port: 3001});

// Polls API Root
// Retrieve the Entry Point
server.route({
    method: 'GET',
    path:'/',
    handler: function(request, reply) {
      reply({"questions_url": "/questions"});
    }
  }
);
// Group Question
// Question
// View a Questions Detail
server.route({
  method: 'GET',
  path: '/questions/{question_id}',
  handler: function(request, reply) {
    reply({"question":"Favourite programming language?", "published_at":"2014-11-11T08:40:51.620Z", "url":"/questions/1", "choices":[{"choice":"Swift", "url":"/questions/1/choices/1", "votes":2048}, {"choice":"Python", "url":"/questions/1/choices/2", "votes":1024}, {"choice":"Objective-C", "url":"/questions/1/choices/3", "votes":512}, {"choice":"Ruby", "url":"/questions/1/choices/4", "votes":256}]});
  }
});
// Choice
// Vote on a Choice
server.route({
  method: 'POST',
  path: '/questions/{question_id}/choices/{choice_id}',
  handler: function(request, reply) {
    reply().code(201).header('Location', '/questions/' + request.params.question_id);
  }
});
// Questions Collection
// List All Questions
server.route({
  method: 'GET',
  path: '/questions',
  handler: function(request, reply) {
      reply([{"question":"Favourite programming language?", "published_at":"2014-11-11T08:40:51.620Z", "url":"/questions/1", "choices":[{"choice":"Swift", "url":"/questions/1/choices/1", "votes":2048}, {"choice":"Python", "url":"/questions/1/choices/2", "votes":1024}, {"choice":"Objective-C", "url":"/questions/1/choices/3", "votes":512}, {"choice":"Ruby", "url":"/questions/1/choices/4", "votes":256}]}])
        .header('Link', '</questions?page=' + (parseInt(request.params.page, 10) + 1) + '>; rel="next"');
    }
});
// Create a New Question
server.route({
  method: 'POST',
  path: '/questions',
  handler: function(request, reply) {
      reply({"question":"Favourite programming language?", "published_at":"2014-11-11T08:40:51.620Z", "url":"/questions/2", "choices":[{"choice":"Swift", "url":"/questions/2/choices/1", "votes":0}, {"choice":"Python", "url":"/questions/2/choices/2", "votes":0}, {"choice":"Objective-C", "url":"/questions/2/choices/3", "votes":0}, {"choice":"Ruby", "url":"/questions/2/choices/4", "votes":0}]})
        .code(201)
        .header('Location', '/questions/2');

    }
});
// Start the server
server.start(function() {
  console.log('Server running at:', server.info.uri);
});
