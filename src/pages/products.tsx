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
  debugger;
  function handleAddNew(newItem) {
    dispatch({
      type: `${namespace}/addNewItem`,
      payload: newItem,
    });
  }
  debugger;
  return (
    <div>
      <h2>List of Products</h2>
      <Button type="primary" href='/..'>Go Back</Button>        
      {/* <OpenModal buttonName="Add new" title="New item"/> */}

      <div>
        <Button onClick={() => handleAddNew({
          name: 'newItem', 
          id: 'newItem',
          createTime: new Date().toLocaleTimeString(),
          creator: "A",
          price: 0,
          category: "AAA"
        })} > New Item </Button>
      </div>

      <ProductList onDelete={handleDelete} products={products} />
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