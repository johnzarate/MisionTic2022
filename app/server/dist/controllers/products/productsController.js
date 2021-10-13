"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validId = exports.updateProduct = exports.queryAllProducts = exports.deleteProduct = exports.createNewProduct = void 0;

var _connectionDB = _interopRequireDefault(require("../../db/connectionDB"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryAllProducts = async callback => {
  await _connectionDB.default.getDBInstance().collection("users").find({}).toArray(callback);
};

exports.queryAllProducts = queryAllProducts;

const validId = async idProduct => {
  const bd_temp = [];
  await _connectionDB.default.getDBInstance().collection("users").find({}).forEach(doc => {
    bd_temp.push(doc.idProduct);
  });
  const exists = bd_temp.includes(idProduct);
  return exists;
};

exports.validId = validId;

const createNewProduct = async (newData, callback) => {
  const newProduct = {
    idProduct: newData.idProduct,
    description: newData.description,
    price: newData.unitPrice,
    status: Boolean(newData.status)
  };
  await _connectionDB.default.getDBInstance().collection("users").insertOne(newProduct, callback);
}; //this comprobation is duty to front-end (only fields required)


exports.createNewProduct = createNewProduct;

const updateProduct = async (idToUpdate, updatedData, callback) => {
  await _connectionDB.default.getDBInstance().collection("users").updateOne({
    _id: new _mongodb.ObjectId(idToUpdate)
  }, {
    $set: updatedData
  }, {
    returnOriginal: true
  }, callback);
};

exports.updateProduct = updateProduct;

const deleteProduct = async (idToDelete, callback) => {
  await _connectionDB.default.getDBInstance().collection("users").deleteOne({
    _id: new _mongodb.ObjectId(idToDelete)
  }, callback);
};

exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productsController.js.map