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
      <SearchBar 
        onSearch={handleSearch}
        offSearch={handleCancelSearch}
      /> 

      <br></br>

      <AddBar 
        onAdd={handleAddNew}
      />

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