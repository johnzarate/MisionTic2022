"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json()); //settings

const port = 7013;
app.set("port", port); //middlewares

app.use((0, _morgan.default)('dev'));
app.use(_express.default.urlencoded({
  extended: false
})); //routes

app.use('/api/v1/products', require('./routes/products/products').default);
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map