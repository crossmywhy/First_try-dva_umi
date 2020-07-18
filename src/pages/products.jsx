import { connect } from 'umi';
// import ProductList from '@/components/ProductList';
import ProductList from '../components/product-list/ProductList';
import React, { Component } from 'react';
import { Table, Select, Button, Form, Input } from 'antd';

import SearchBar from '../components/search/search-bar.js';

const namespace = 'products';

// const mapStateToProps = (state) => {
//   const productList = state[namespace].data;
//   return {
//     productList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClickAdd: (newItem: any) => {
//       // const action = {
//       //   type: `${namespace}/addNewItem`,
//       //   payload: newItem,
//       // };
//       // dispatch(action);

//       dispatch({
//         type: `${namespace}/addNewItem`,
//         payload: newItem,
//       });
//     },
//   };
// };





const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: `${namespace}/delete`,
      payload: id,
    });
  }
  // debugger;
  function handleAddNew(newItem) {
    // Only add item when inputs is not empty.
    let validInput = newItem.name && newItem.price && newItem.creator
    if (validInput){
      dispatch({
        type: `${namespace}/addNewItem`,
        payload: newItem,
      });
    }
  }

  function handleEdit(editedItem) {
    dispatch({
      type: `${namespace}/editItem`,
      payload: editedItem,
    });
  }

  function handleSearch(composedObj) {
    dispatch({
      type: `${namespace}/searchItem`,
      payload: composedObj,
    });
  }

  function handleCancelSearch() {
    dispatch({
      type: `${namespace}/cancelSearch`,
      // payload: "",
    });
  }

  // function handleChange(editedItem) {
  //   dispatch({
  //     type: `${namespace}/editItem`,
  //     payload: editedItem,
  //   });
  // }
  // debugger;
  return (
    <div>
      <h2>List of Products</h2>
      {/* <Button type="primary" href='/..'>Go Back</Button>         */}

      {/* <br></br>      <br></br> */}

      {/* <Select
        showSearch
        value={products.state}
        style={{ width: '30%' }}
        onSearch={handleSearch}
        onChange={handleChange}
      >
        
      </Select> */}
      <SearchBar 
        onSearch={handleSearch}
        // onChange={handleChange}
        offSearch={handleCancelSearch}
        // products={products}
      /> 

      <br></br>      <br></br>

      <Input.Group compact>
        <Input id="inputItemName" style={{ width: '15%' }} addonBefore="Name:"/>
        <Input id="inputItemPrice" style={{ width: '15%' }} addonBefore="Price:"/>
        <Input id="inputItemCreator" style={{ width: '15%' }} addonBefore="Creator:"/>
        <Button onClick={() => handleAddNew({
          name: document.getElementById("inputItemName").value, 
          // id: 'newItem',
          createTime: new Date().toLocaleTimeString(),
          creator: document.getElementById("inputItemCreator").value,
          price: document.getElementById("inputItemPrice").value,
          category: "AAA",
          visible: true
        })} > Add Item </Button>
      </Input.Group>

      {/* <input id="data" type="text" name="name" />
      <input type="submit" value="测试"  onclick="test()"/> */}

      {/* <br></br> */}

      <ProductList 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        products={products} />
      <Button type="primary" href='/..'>Go Back</Button>
    </div>
  );
};

export default connect( ({ products }) => {
  return ({
    products,
  });
} )(Products);
// "{ products }"大括号代表数组解构，把products中的数据解构出来