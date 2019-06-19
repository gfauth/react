require('babel-register')();

var pattern = process.env.TESTED || '**/**';

exports.config = {
  baseUrl: 'http://localhost:4000',
  specs: ['./../tests/integrations/' + pattern + '.test.js'],
  capabilities: {
    'browserName': 'phantomjs'
  },
  onPrepare: function () {
    browser.ignoreSynchronization = true;
  }
}
