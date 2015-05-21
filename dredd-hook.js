var hooks = require('hooks');
var before = hooks.before;

hooks.beforeEach(function(transaction) {
  if (transaction.expected.headers['Content-Type'] == 'application/json') {
    transaction.expected.headers['Content-Type'] = 'application/json; charset=utf-8';
  }
});
