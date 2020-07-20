import React from 'react';
import { Input, Button, Divider, Form, Space } from "antd";
import "./search-bar.less";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

/**
 * Compose three input values into an Object
 * @param {*} doc 
 */
function composeInput(doc) {
  let result  = new Object();
  result.name = doc.getElementById()("itemName").value;
  result.price = doc.getElementById("itemPrice").value;
  result.creator = doc.getElementById("itemCreator").value;
  return result;
}

// function resetInput(){
//   let temp = document.getElementById("itemName");
//   temp.value = "";
//   temp = document.getElementById("itemPrice");
//   temp.value = "";
//   temp = document.getElementById("itemCreator");
//   temp.value = "";
// }


const layout = {
  // labelCol: {
  //   span: 8,
  // },
  // wrapperCol: {
  //   span: 16,
  // },
  // labelRow: {
  //   span: 8,
  // },
  // // wrapperRow: {
  // //   span: 2,
  // // },
};
const tailLayout = {
  // wrapperCol: {
  //   offset: 8,
  //   span: 16,
  // },
};

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
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Space>
          {/* Using Space to keep left and right horizontal align. 
          (It doesn't work for editing css format.) */}
          <div className="search-left">
            <Form.Item
              name="name"
              // label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input addonBefore="Name:"/>
            </Form.Item>
            <Form.Item
              name="price"
              // label="Price"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input addonBefore="Price:"/>
            </Form.Item>
            <Form.Item
              name="creator"
              // label="Creator"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input addonBefore="Creator:"/>
            </Form.Item>
          </div>
          {/* <Divider type="vertical" /> */}
          
          <Form.Item {...tailLayout}>
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