import { Input, Button, Divider } from "antd";
import "./add-bar.less";
import { PlusOutlined } from "@ant-design/icons";
import {trimToDate} from '../util/utils.js'
import moment from 'moment';

const AddBar = ({ onAdd }) => {
  return (
    <div className="add-container">
      <div className="add-left">
        <Input id="inputItemName" addonBefore="Name:"/>
        <Input id="inputItemPrice" addonBefore="Price:"/>
        <Input id="inputItemCreator" addonBefore="Creator:"/>
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
