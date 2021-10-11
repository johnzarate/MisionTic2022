"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authfirebase = _interopRequireDefault(require("../services/authfirebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  console.log("route /");
  res.send({
    "home": "You're in home"
  });
});
router.post('/create-product', async (req, res) => {
  console.log(req.body);
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const yu = await _authfirebase.default.collection("sales").add(newProduct);
  console.log(yu);
  res.send({
    name: "Hola Mundo"
  });
});
router.delete('/delete/:id', async (req, res) => {
  console.log(req.params.id);
  const resd = await _authfirebase.default.collection('sales').doc(req.params.id).delete();
  res.send({
    "mgs": "Deleted",
    "rd": resd
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=products.js.map