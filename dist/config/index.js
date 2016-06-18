'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configure;

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _env = require('env2');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configure() {
    (0, _env2.default)('config.env'); // Load all environment variables

    (0, _data2.default)();
}