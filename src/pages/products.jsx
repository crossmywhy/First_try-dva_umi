import { connect } from 'umi';
// import ProductList from '@/components/ProductList';
import ProductList from '../components/product-list/ProductList';
import React, { Component } from 'react';
import { Table, Select, Button, Form, Input } from 'antd';

import SearchBar from '../components/search/search-bar.js';
import AddBar from '../components/add/add-bar.js';

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

  return (
    <div>
      <h2>List of Products</h2>
      {/* <Button type="primary" href='/..'>Go Back</Button>         */}
      <SearchBar 
        onSearch={handleSearch}
        offSearch={handleCancelSearch}
      /> 

      <br></br>

      <AddBar 
        onAdd={handleAddNew}
      />

      {/* <Input.Group compact>
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
      </Input.Group> */}

      <br></br>

      <ProductList 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        products={products} 
      />
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