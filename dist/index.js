'use strict';

require('babel-polyfill');

var _jseminckBeServer = require('jseminck-be-server');

var _jseminckBeServer2 = _interopRequireDefault(_jseminckBeServer);

var _config = require('./config/');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes/');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _jseminckBeServer2.default)({
    configureServer: _config2.default,
    configureRoutes: _routes2.default
});