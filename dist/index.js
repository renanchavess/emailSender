"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app');
var _EmailController = require('./controllers/EmailController'); var _EmailController2 = _interopRequireDefault(_EmailController);

new (0, _app.App)().getApp();

_EmailController2.default.sendEmail();