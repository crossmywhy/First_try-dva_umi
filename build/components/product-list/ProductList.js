"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _ProductListData = require("./ProductList.data.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// /**
//  * Show the last place info. Transform the place attribute: e.g. ["zhejiang", "hangzhou", "xihu"] -> "xihu"
//  * @param {*} dataset 
//  */
// function transform(dataset) {
//   let result = JSON.parse(JSON.stringify(dataset));
//   for (let item of result){
//     item.place = item.place[item.place.length - 1];
//   }
//   return result;
// }
var EditableCell = function EditableCell(_ref) {
  var editing = _ref.editing,
      dataIndex = _ref.dataIndex,
      title = _ref.title,
      inputType = _ref.inputType,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["editing", "dataIndex", "title", "inputType", "children"]);

  // const inputNode = (inputType === "number") ? <InputNumber /> : <Input />;
  var inputNode = dataIndex === "place" ? /*#__PURE__*/_react["default"].createElement(_antd.Cascader, {
    expandTrigger: "hover",
    options: _ProductListData.placeOptions
  }) : /*#__PURE__*/_react["default"].createElement(_antd.Input, null);
  return /*#__PURE__*/_react["default"].createElement("td", restProps, editing ? /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    name: dataIndex,
    style: {
      margin: 0
    },
    rules: [{
      required: true,
      message: "Please Input ".concat(title, "!")
    }]
  }, inputNode) : children);
};

var ProductList = function ProductList(_ref2) {
  var onEdit = _ref2.onEdit,
      onDelete = _ref2.onDelete,
      products = _ref2.products;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(products.products),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setState = _useState2[1];

  data = products.products;

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      editingKey = _useState4[0],
      setEditingKey = _useState4[1];

  var isEditing = function isEditing(record) {
    return record.key === editingKey;
  };

  var edit = function edit(record) {
    form.setFieldsValue(_objectSpread({}, record));
    setEditingKey(record.key);
  };

  var cancel = function cancel() {
    setEditingKey("");
  };

  var save = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key) {
      var row, newData, index, item;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return form.validateFields();

            case 3:
              row = _context.sent;
              newData = _toConsumableArray(data);
              index = newData.findIndex(function (item) {
                return key === item.key;
              });
              item = newData[index];
              newData.splice(index, 1, _objectSpread(_objectSpread({}, item), row));
              setEditingKey("");
              onEdit(newData);
              setState(newData);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log("Validate Failed:", _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function save(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    editable: false
  }, {
    title: 'ID',
    dataIndex: 'id',
    editable: false
  }, {
    title: 'Time Created',
    dataIndex: 'createTime',
    editable: false
  }, {
    title: 'Price',
    dataIndex: 'price',
    editable: true
  }, {
    title: 'Creator',
    dataIndex: 'creator',
    editable: false
  }, {
    title: 'Category',
    dataIndex: 'category',
    editable: false
  }, {
    title: 'Place',
    dataIndex: 'place',
    editable: true,
    // Only show the lastest place name. e.g. ["zhejiang", "hangzhou", "xihu"] -> "xihu"
    render: function render(text, record) {
      var shortPlace = record.place[record.place.length - 1];
      return shortPlace;
    }
  }, {
    title: 'Actions',
    render: function render(text, record) {
      var editable = isEditing(record);
      return editable ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("a", {
        onClick: function onClick() {
          return save(record.key);
        },
        style: {
          marginRight: 8
        }
      }, "Save"), /*#__PURE__*/_react["default"].createElement(_antd.Popconfirm, {
        title: "Sure to cancel?",
        onConfirm: cancel
      }, /*#__PURE__*/_react["default"].createElement("a", null, "Cancel"))) : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_icons.EditOutlined, {
        disabled: editingKey !== "",
        onClick: function onClick() {
          return edit(record);
        }
      }), /*#__PURE__*/_react["default"].createElement(_antd.Divider, {
        type: "vertical"
      }), /*#__PURE__*/_react["default"].createElement(_antd.Popconfirm, {
        title: "Delete?",
        onConfirm: function onConfirm() {
          return onDelete(record.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons.DeleteOutlined, null)));
    }
  }];
  var mergedColumns = columns.map(function (col) {
    if (!col.editable) {
      // If column is not editable, just return.
      return col;
    } // If column is editable:


    return _objectSpread(_objectSpread({}, col), {}, {
      onCell: function onCell(record) {
        return {
          record: record,
          // inputType: col.dataIfndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record)
        };
      }
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
    form: form,
    component: false
  }, /*#__PURE__*/_react["default"].createElement(_antd.Table // bordered
  , {
    components: {
      body: {
        cell: EditableCell
      }
    } // dataSource={products.products} 
    ,
    dataSource: products.products.filter(function (item) {
      return item.visible;
    }),
    columns: mergedColumns // columns={columns} 

  }));
};

var _default = ProductList;
exports["default"] = _default;