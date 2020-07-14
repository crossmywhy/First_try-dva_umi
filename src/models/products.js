function idGenerator(digit){
  // Randomly generate an integer from 1 to 10^digit.
  return (Math.floor(Math.random() * Math.pow(10, digit)) + 1);
}

export default {
  namespace: 'products',
  state: {
    products: [
      { key: "1",
        name: 'dva', 
        id: 1,
        createTime: new Date().toLocaleTimeString(),
        creator: "A",
        price: 0,
        category: "AAA" 
      },
      { key: "2",
        name: 'antd', 
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
      let result = state.products.filter(item => item.id !== id);
      return Object.assign({}, {products: result});
    },

    addNewItem(state, { payload: newItem}) {
      const newId = idGenerator(4);
      const newItemWithId = { ...newItem, id: idGenerator(4), key: newId.toString()};
      const nextData = state.products.concat(newItemWithId);
      return Object.assign({}, {...state}, { products: nextData });
    },

    editItem(state, {payload: editedItem}){
      // !!!!!!!!!!!
      state.products = editedItem;
      // !!!!!!!!!!!
      return Object.assign({}, {products: editedItem});
    },
  },
};