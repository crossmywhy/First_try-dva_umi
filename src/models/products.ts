export default {
  namespace: 'products',
  state: [
    { name: 'dva', 
      id: 1,
      createTime: new Date().toLocaleTimeString(),
      creator: "A",
      price: 0,
      category: "AAA" },
    { name: 'antd', 
      id: 2, 
      createTime: new Date().toLocaleTimeString(),
      creator: "B",
      price: 0,
      category: "AAA" },
  ],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },

    addNewItem(state, { payload: newItem}) {
      const newItemWithId = { ...newItem, id: 'TODO'};
      const nextData = state.concat(newItemWithId);
      return {
        data: nextData,
      };
    }
  },
};