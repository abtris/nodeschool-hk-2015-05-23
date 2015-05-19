var hooks = require('hooks');
var before = hooks.before;

hooks.before('Polls API Root > Retrieve the Entry Point', function(transaction, done) {
  transaction.expected.headers['Content-Type'] = 'application/json; charset=utf-8';
  return done();
});

hooks.before('Question > Question > View a Questions Detail', function(transaction, done) {
  transaction.expected.headers['Content-Type'] = 'application/json; charset=utf-8';
  return done();
});

hooks.before('Question > Questions Collection > List All Questions', function(transaction, done) {
  transaction.expected.headers['Content-Type'] = 'application/json; charset=utf-8';
  return done();
});

hooks.before('Question > Questions Collection > Create a New Question', function(transaction, done) {
  transaction.expected.headers['Content-Type'] = 'application/json; charset=utf-8';
  return done();
});
