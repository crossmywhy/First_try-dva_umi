"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./search-bar.less");

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RangePicker = _antd.DatePicker.RangePicker; // const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

var SearchBar = function SearchBar(_ref) {
  var onSearch = _ref.onSearch,
      offSearch = _ref.offSearch;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    // console.log(values);
    onSearch(values);
  };

  var onReset = function onReset() {
    offSearch();
    form.resetFields();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form // {...layout} 
  , {
    form: form,
    name: "control-hooks",
    onFinish: onFinish
  }, /*#__PURE__*/_react["default"].createElement(_antd.Space, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "search-left"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    name: "id",
    rules: [{
      required: false
    }]
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    addonBefore: "ID:"
  })), /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    name: "place" // label="Price"
    ,
    rules: [{
      required: false
    }]
  }, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    addonBefore: "Place:"
  })), /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    name: "date",
    rules: [{
      required: false
    }]
  }, /*#__PURE__*/_react["default"].createElement(RangePicker, null))), /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "search-right"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    icon: /*#__PURE__*/_react["default"].createElement(_icons.SearchOutlined, null) // onClick={() => onSearch(composeInput(document))}

  }, "Search"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    htmlType: "button",
    icon: /*#__PURE__*/_react["default"].createElement(_icons.CloseOutlined, null),
    onClick: onReset // onClick={function(){
    //   onReset; 
    //   offSearch();
    // }}

  }, "Reset"))))));
};

var _default = SearchBar;
exports["default"] = _default;