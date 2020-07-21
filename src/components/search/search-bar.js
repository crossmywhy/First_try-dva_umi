import React from 'react';
import { Input, Button, Divider, Form, Space, DatePicker } from "antd";
import "./search-bar.less";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

// /**
//  * Compose three input values into an Object
//  * @param {*} doc 
//  */
// function composeInput(doc) {
//   let result  = new Object();
//   result.name = doc.getElementById()("itemName").value;
//   result.price = doc.getElementById("itemPrice").value;
//   result.creator = doc.getElementById("itemCreator").value;
//   return result;
// }

const { RangePicker } = DatePicker;


// const layout = {
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

const SearchBar = ({ onSearch, offSearch }) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    // console.log(values);
    onSearch(values);
  };

  const onReset = () => {
    offSearch();
    form.resetFields();
  };

  return (
    <div className="search-container">
      <Form 
      // {...layout} 
        form={form} 
        name="control-hooks" 
        onFinish={onFinish}>
        <Space>
          {/* Using Space to keep left and right horizontal align. 
          (It doesn't work for editing css format.) */}
          <div className="search-left">
            <Form.Item
              name="id"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input addonBefore="ID:"/>
            </Form.Item>
            <Form.Item
              name="place"
              // label="Price"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input addonBefore="Place:"/>
            </Form.Item>
            <Form.Item
              name="date"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <RangePicker/>
              {/* <Input addonBefore="Date Range:"/> */}
            </Form.Item>
          </div>
          {/* <Divider type="vertical" /> */}
          
          <Form.Item 
            // {...tailLayout}
            >
            <div className="search-right">
              <Button 
                type="primary" 
                htmlType="submit"
                icon={<SearchOutlined />}
                // onClick={() => onSearch(composeInput(document))}
              >
                Search
              </Button>
              {/* <Divider type="vertical" /> */}
              <Button 
                htmlType="button" 
                icon={<CloseOutlined />}
                onClick={onReset}
                // onClick={function(){
                //   onReset; 
                //   offSearch();
                // }}
              >
                Reset
              </Button>
            </div>
          </Form.Item>
        </Space> 
      </Form>
    </div>
    
  );
}







// const SearchBar = ({ onSearch, offSearch }) => {
//   return (
//       <div className="search-container">
//         <div className="search-left">
//           <Input
//             id="itemName"
//             addonBefore="Name:"
//             placeholder="Please Input Name"
//           />
//           <Input
//             id="itemPrice"
//             addonBefore="Price:"
//             placeholder="Please Input Price"
//           />
//           <Input
//             id="itemCreator"
//             addonBefore="Creator:"
//             placeholder="Please Input Creator"
//           />
//         </div>
//         <div className="search-right">
//           <Button 
//               type="primary" 
//               icon={<SearchOutlined />}
//               // loading
//               onClick={() => onSearch(composeInput(document))}
//           >
//             Search
//           </Button>
//           <Divider type="vertical" />
//           <Button 
//               type="primary" 
//               icon={<CloseOutlined />}
//               onClick={offSearch}              
//           >
//             Clear Search
//           </Button>
//         </div>
//       </div>
//     );
// };

export default SearchBar;