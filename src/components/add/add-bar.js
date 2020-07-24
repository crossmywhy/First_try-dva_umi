import { Input, Button, Divider, Cascader } from "antd";
import "./add-bar.less";
import { PlusOutlined } from "@ant-design/icons";
import {trimToDate} from '../util/utils.js';
import moment from 'moment';
import {placeOptions as options} from '../place-option/place-options.js';

// const options = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];

// For storing item.place value. e.g. "zhejiang/hangzhou/xihu".
let currPlace = ""; 

/**
 * onChange function for Cascader module. 
 * @param {*} value 
 */
function placeOnChange(value) {
  let curr = "";
  for (let place of value){
    curr = curr + "/" + place;
  }
  // currPlace = curr.substring(1, curr.length);
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
        {/* <Divider type="vertical" /> */}
      </div>
    </div>
  );
};

export default AddBar;
