"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antd = require("antd");

require("./add-bar.less");

var _icons = require("@ant-design/icons");

var _utils = require("../../util/utils.js");

var _moment = _interopRequireDefault(require("moment"));

var _ProductListData = require("../ProductList.data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For storing item.place value. e.g. "zhejiang/hangzhou/xihu".
var currPlace = "";
/**
 * onChange function for Cascader module. 
 * @param {*} value 
 */

function placeOnChange(value) {
  currPlace = value;
} // Just show the latest item.


function displayRender(label) {
  return label[label.length - 1];
}

var AddBar = function AddBar(_ref) {
  var onAdd = _ref.onAdd;
  return /*#__PURE__*/React.createElement("div", {
    className: "add-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "add-left"
  }, /*#__PURE__*/React.createElement(_antd.Input, {
    id: "inputItemName",
    addonBefore: "Name:"
  }), /*#__PURE__*/React.createElement(_antd.Input, {
    id: "inputItemPrice",
    addonBefore: "Price:"
  }), /*#__PURE__*/React.createElement(_antd.Input, {
    id: "inputItemCreator",
    addonBefore: "Creator:"
  }), /*#__PURE__*/React.createElement(_antd.Cascader, {
    id: "inputItemPlace",
    options: _ProductListData.placeOptions,
    expandTrigger: "hover",
    onChange: placeOnChange,
    displayRender: displayRender // placeholder="Please select" 
    ,
    addonBefore: "Place:",
    style: {
      width: '100%'
    } // value={document.getElementsByClassName("ant-cascader-picker-label").value}

  })), /*#__PURE__*/React.createElement("div", {
    className: "add-right"
  }, /*#__PURE__*/React.createElement(_antd.Button, {
    onClick: function onClick() {
      return onAdd({
        name: document.getElementById("inputItemName").value,
        // createTime: new Date().toLocaleTimeString(),
        createTime: (0, _utils.trimToDate)((0, _moment["default"])(new Date()).toJSON()),
        creator: document.getElementById("inputItemCreator").value,
        price: document.getElementById("inputItemPrice").value,
        category: "AAA",
        place: currPlace,
        visible: true
      });
    },
    icon: /*#__PURE__*/React.createElement(_icons.PlusOutlined, null)
  }, " Add Item ")));
};

var _default = AddBar;
exports["default"] = _default;