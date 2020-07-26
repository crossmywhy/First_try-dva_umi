import { Input, Button, Cascader } from "antd";
import "./add-bar.less";
import { PlusOutlined } from "@ant-design/icons";
import {trimToDate} from '../../util/utils.js';
import moment from 'moment';
import {placeOptions as options} from '../ProductList.data.js';

// For storing item.place value. e.g. "zhejiang/hangzhou/xihu".
let currPlace = ""; 

/**
 * onChange function for Cascader module. 
 * @param {*} value 
 */
function placeOnChange(value) {
  currPlace = value;
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}
  

const AddBar = ({ onAdd }) => {
  return (
    <div className="add-container">
      <div className="add-left">
        <Input id="inputItemName" addonBefore="Name:"/>
        <Input id="inputItemPrice" addonBefore="Price:"/>
        <Input id="inputItemCreator" addonBefore="Creator:"/>
        <Cascader 
          id="inputItemPlace" 
          options={options} 
          expandTrigger="hover"
          onChange={placeOnChange} 
          displayRender={displayRender}
          // placeholder="Please select" 
          addonBefore="Place:" 
          style={{ width: '100%' }}
          // value={document.getElementsByClassName("ant-cascader-picker-label").value}
        />
      </div>
      <div className="add-right">
        <Button 
            onClick={() => onAdd({
                name: document.getElementById("inputItemName").value, 
                // createTime: new Date().toLocaleTimeString(),
                createTime: trimToDate(moment(new Date()).toJSON()),
                creator: document.getElementById("inputItemCreator").value,
                price: document.getElementById("inputItemPrice").value,
                category: "AAA",
                place: currPlace,
                visible: true
            })}
            icon={<PlusOutlined />}
        > Add Item </Button>
      </div>
    </div>
  );
};

export default AddBar;
