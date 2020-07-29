"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _umi = require("umi");

var _ProductList = _interopRequireDefault(require("../../components/product-list/ProductList"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _searchBar = _interopRequireDefault(require("../../components/product-list/search/search-bar.js"));

var _addBar = _interopRequireDefault(require("../../components/product-list/add/add-bar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ProductList from '@/components/ProductList';
var namespace = 'products';

var Products = function Products(_ref) {
  var dispatch = _ref.dispatch,
      products = _ref.products;

  function handleDelete(id) {
    dispatch({
      type: "".concat(namespace, "/delete"),
      payload: id
    });
  } // debugger;


  function handleAddNew(newItem) {
    // Only add item when inputs is not empty.
    var validInput = newItem.name && newItem.price && newItem.creator;

    if (validInput) {
      dispatch({
        type: "".concat(namespace, "/addNewItem"),
        payload: newItem
      });
    }
  }

  function handleEdit(editedItem) {
    dispatch({
      type: "".concat(namespace, "/editItem"),
      payload: editedItem
    });
  }

  function handleSearch(composedObj) {
    dispatch({
      type: "".concat(namespace, "/searchItem"),
      payload: composedObj
    });
  }

  function handleCancelSearch() {
    dispatch({
      type: "".concat(namespace, "/cancelSearch") // payload: "",

    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "List of Products"), /*#__PURE__*/_react["default"].createElement(_searchBar["default"], {
    onSearch: handleSearch,
    offSearch: handleCancelSearch
  }), /*#__PURE__*/_react["default"].createElement(_addBar["default"], {
    onAdd: handleAddNew
  }), /*#__PURE__*/_react["default"].createElement(_ProductList["default"], {
    onEdit: handleEdit,
    onDelete: handleDelete,
    products: products
  }), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    href: "/.."
  }, "Go Back"));
};

var _default = (0, _umi.connect)(function (_ref2) {
  var products = _ref2.products;
  return {
    products: products
  };
})(Products); // "{ products }"大括号代表数组解构，把products中的数据解构出来


exports["default"] = _default;