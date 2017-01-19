'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lambda = new _awsSdk2.default.Lambda({
  apiVersion: '2015-03-31',
  endpoint: 'https://lambda.eu-central-1.amazonaws.com/',
  region: 'eu-central-1'
});

var AutoPrune = function () {
  function AutoPrune(serverless, options) {
    (0, _classCallCheck3.default)(this, AutoPrune);

    this.options = options;
    this.serverless = serverless;

    this.commands = {
      autoprune: {
        usage: 'Remove old lambda versions',
        lifecycleEvents: ['run']
      }
    };
    this.hooks = {
      'autoprune:run': this.autoPrune.bind(this)
    };
  }

  (0, _createClass3.default)(AutoPrune, [{
    key: 'autoPrune',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this = this;

        var stage, functionsNames;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stage = this.options.stage || this.serverless.variables.service.defaults.stage;
                functionsNames = (0, _keys2.default)(this.serverless.service.functions).map(function (fn) {
                  return _this.serverless.service.functions[fn].name;
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function autoPrune() {
        return _ref.apply(this, arguments);
      }

      return autoPrune;
    }()
  }]);
  return AutoPrune;
}();

module.exports = AutoPrune;