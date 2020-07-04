import { connect } from 'umi';
// import ProductList from '@/components/ProductList';
import ProductList from '../components/ProductList';
import React from 'react';
import { Button } from 'antd';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <Button type="primary" href='/..'>Go Back</Button>
      <ProductList onDelete={handleDelete} products={products} />
      <Button type="primary" href='/..'>Go Back</Button>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);