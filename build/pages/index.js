"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _index["default"].title
  }, "Page index"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    ghost: true,
    href: "/products"
  }, "Go to Product List"));
};

exports["default"] = _default;