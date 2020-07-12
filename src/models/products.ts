export default {
  namespace: 'products',
  state: {
    products: [
      { name: 'dva', 
        id: 1,
        createTime: new Date().toLocaleTimeString(),
        creator: "A",
        price: 0,
        category: "AAA" 
      },
      { name: 'antd', 
        id: 2, 
        createTime: new Date().toLocaleTimeString(),
        creator: "B",
        price: 0,
        category: "AAA" 
      },
    ],
  },

  reducers: {
    delete(state, { payload: id }) {
      // return state.filter(item => item.id !== id);
      let result = state.products.filter(item => item.id !== id);
      return Object.assign({}, {products: result});
    },

    addNewItem(state, { payload: newItem}) {
      const newItemWithId = { ...newItem, id: 'TODO'};

      // const nextData = state.concat(newItemWithId);
      // return {
      //   data: nextData,
      // };

      const nextData = state.products.concat(newItemWithId);
      return Object.assign({}, {...state}, { products: nextData });
    }
  },
};