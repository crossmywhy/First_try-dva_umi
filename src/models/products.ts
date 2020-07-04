export default {
  namespace: 'products',
  state: [
    { name: 'dva', 
    id: 'dva',
    createTime: new Date().toLocaleTimeString(),
    creator: "A",
    price: 0,
    category: "AAA" },
    { name: 'antd', 
    id: 'antd', 
    createTime: new Date().toLocaleTimeString(),
    creator: "B",
    price: 0,
    category: "AAA" },
  ],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};