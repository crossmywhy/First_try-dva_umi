import { connect } from 'umi';
// import ProductList from '@/components/ProductList';
import ProductList from '../components/ProductList';
import React, { Component } from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import OpenModal from '../components/OpenModal';

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
  // debugger;
  return (
    <div>
      <h2>List of Products</h2>
      <Button type="primary" href='/..'>Go Back</Button>        
      {/* <OpenModal buttonName="Add new" title="New item"/> */}

      <br></br><br></br>

      <Input.Group compact>
        <Input id="itemName" style={{ width: '15%' }} addonBefore="Name:"/>
        <Input id="itemPrice" style={{ width: '15%' }} addonBefore="Price:"/>
        <Input id="itemCreator" style={{ width: '15%' }} addonBefore="Creator:"/>
        <Button onClick={() => handleAddNew({
          name: document.getElementById("itemName").value, 
          // id: 'newItem',
          createTime: new Date().toLocaleTimeString(),
          creator: document.getElementById("itemCreator").value,
          price: document.getElementById("itemPrice").value,
          category: "AAA"
        })} > Add Item </Button>
      </Input.Group>

      {/* <input id="data" type="text" name="name" />
      <input type="submit" value="测试"  onclick="test()"/> */}

      <br></br>

      <ProductList onEdit={handleEdit} onDelete={handleDelete} products={products} />
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