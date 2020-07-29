"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _utils = require("../components/util/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Return: Boolean. Decide whether the item matches the search. Contain Regular Expression "+".
 * @param {*} item A single item from stored products.
 * @param {*} composedObj A composed searching keywords object.
 */
function searchResult(item, composedObj) {
  var valid = false;

  for (var _i = 0, _Object$keys = Object.keys(composedObj); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (composedObj[key] !== "" && composedObj[key] !== undefined) {
      if (key === "date") {
        var itemTime = (0, _moment["default"])(item.createTime);
        var time1 = composedObj[key][0];
        var time2 = composedObj[key][1];

        if (itemTime.isBetween(time1, time2)) {
          valid = true;
        }
      } else {
        var regx = new RegExp("".concat(composedObj[key], "+"));

        if (regx.test(item[key])) {
          valid = true;
        }
      }
    }
  }

  return valid;
}
/**
 * 
 * @param {*} state 
 * @param {*} bool  Boolean
 */


function setVisible(state, bool) {
  var newState = state;

  for (var i = 0; i < newState.products.length; i++) {
    newState.products[i].visible = bool;
  }

  return newState;
}

var _default = {
  namespace: 'products',
  state: {
    products: [{
      key: "1",
      name: 'dva',
      id: 1,
      createTime: (0, _utils.trimToDate)(new Date('August 19, 2020 23:15:30 UTC').toJSON()),
      creator: "A",
      price: 0,
      category: "AAA",
      visible: true,
      place: ["zhejiang", "hangzhou", "xihu"]
    }, {
      key: "2",
      name: 'antd',
      id: 2,
      createTime: (0, _utils.trimToDate)(new Date('July 19, 2019 23:15:30 UTC').toJSON()),
      creator: "B",
      price: 0,
      category: "AAA",
      visible: true,
      place: ["zhejiang", "hangzhou", "xihu"]
    }]
  },
  reducers: {
    "delete": function _delete(state, _ref) {
      var id = _ref.payload;
      var result = state.products.filter(function (item) {
        return item.id !== id;
      });
      return Object.assign({}, state, {
        products: result
      });
    },
    addNewItem: function addNewItem(state, _ref2) {
      var newItem = _ref2.payload;
      var newId = (0, _utils.idGenerator)(4);

      var newItemWithId = _objectSpread(_objectSpread({}, newItem), {}, {
        id: newId,
        key: newId.toString()
      });

      var nextData = state.products.concat(newItemWithId);
      return Object.assign({}, state, {
        products: nextData
      }); // const newResult = Object.assign({}, {...state}, { products: nextData });
      // state.products = newResult;
      // return newResult;
    },
    editItem: function editItem(state, _ref3) {
      var editedItem = _ref3.payload;
      return Object.assign({}, state, {
        products: editedItem
      });
    },
    searchItem: function searchItem(state, _ref4) {
      var composedObj = _ref4.payload;
      var result = setVisible(state, false);
      result = result.products.map(function (item) {
        item.visible = searchResult(item, composedObj);
        return item;
      });
      return Object.assign({}, state, {
        products: result
      });
    },
    cancelSearch: function cancelSearch(state) {
      // document.getElementById("itemName").value = "";
      var newState = setVisible(state, true);
      return Object.assign({}, newState);
    }
  }
};
exports["default"] = _default;