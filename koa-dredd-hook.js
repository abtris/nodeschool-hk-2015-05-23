var hooks = require('hooks');
var before = hooks.before;

hooks.beforeEach(function(transaction, done) {
  transaction.response.headers['content-type'] = 'application/json; charset=utf-8';
  return done();
});
