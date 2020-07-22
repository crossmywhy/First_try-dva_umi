import { Input, Button, Divider, Cascader } from "antd";
import "./add-bar.less";
import { PlusOutlined } from "@ant-design/icons";
import {trimToDate} from '../util/utils.js'
import moment from 'moment';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

let currPlace = ""; 

function placeOnChange(value) {
  let curr = "";
  for (let place of value){
    curr = curr + "/" + place;
  }
  currPlace = curr.substring(1, curr.length);
}
  



const AddBar = ({ onAdd }) => {
  // let currPlace = function placeOnChange(value) {
  //   let curr = "";
  //   for (let place of value){
  //     curr = curr + "/" + place;
  //   }
  //   return curr;
  // };
  return (
    <div className="add-container">
      <div className="add-left">
        <Input id="inputItemName" addonBefore="Name:"/>
        <Input id="inputItemPrice" addonBefore="Price:"/>
        <Input id="inputItemCreator" addonBefore="Creator:"/>
        <Cascader id="inputItemPlace" options={options} onChange={placeOnChange} placeholder="Please select" addonBefore="Place:" />,
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
