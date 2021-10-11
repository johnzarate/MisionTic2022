"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(_app.default.get('port'), () => {
  console.log("Server on port 5000");
});
//# sourceMappingURL=index.js.map