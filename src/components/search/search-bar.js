import { Input, Button, Divider } from "antd";
import "./search-bar.less";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

/**
 * Compose three input values into an Object
 * @param {*} doc 
 */
function composeInput(doc) {
  let result  = new Object();
  result.name = doc.getElementById("itemName").value;
  result.price = doc.getElementById("itemPrice").value;
  result.creator = doc.getElementById("itemCreator").value;
  return result;
}

// function resetInput(){
//   let temp = document.getElementById("itemName");
//   // temp.setAttribute("itemName", "");
//   temp.value = "";
// }

const SearchBar = ({ onSearch, offSearch }) => {
  return (
      <div className="search-container">
        <div className="search-left">
          <Input
            id="itemName"
            addonBefore="Name:"
            placeholder="Please Input Name"
          />
          <Input
            id="itemPrice"
            addonBefore="Price:"
            placeholder="Please Input Price"
          />
          <Input
            id="itemCreator"
            addonBefore="Creator:"
            placeholder="Please Input Creator"
          />
        </div>
        <div className="search-right">
          <Button 
              type="primary" 
              icon={<SearchOutlined />}
              // loading
              onClick={() => onSearch(composeInput(document))}
          >
            Search
          </Button>
          <Divider type="vertical" />
          <Button 
              type="primary" 
              icon={<CloseOutlined />}
              onClick={offSearch}
              // onClick={[offSearch, SearchBar.resetFields()]}
              // onClick={offSearch, resetInput()}
              
          >
            Clear Search
          </Button>
        </div>
      </div>
    );
};

export default SearchBar;