function idGenerator(digit){
  // Randomly generate an integer from 1 to 10^digit.
  return (Math.floor(Math.random() * Math.pow(10, digit)) + 1);
}

/**
 * Return: Boolean. Decide whether the item matches the search.
 * @param {*} item 
 * @param {*} composedObj 
 */
function searchResult(item, composedObj){
  let valid = false;
  for (let key of Object.keys(composedObj)){
    if (item[key] === composedObj[key]){
      valid = true;
    }
  }
  return valid;
}

/**
 * 
 * @param {*} state 
 * @param {*} bool  Boolean
 */
function setVisible(state, bool){
  let newState = state;
  // let prod = newState.products.values();
  // for (let item of Object.values(newState.products)){
  //   item.visible = bool;
  // }

  for (let i = 0; i < newState.products.length; i++){
    newState.products[i].visible = bool;
  }
  
  return newState;
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
        category: "AAA",
        visible: true
      },
      { key: "2",
        name: 'antd', 
        id: 2, 
        createTime: new Date().toLocaleTimeString(),
        creator: "B",
        price: 0,
        category: "AAA",
        visible: true
      },
    ],
  },

  reducers: {
    delete(state, { payload: id }) {
      let result = state.products.filter(item => item.id !== id);
      return Object.assign({}, state, {products: result});
    },

    addNewItem(state, { payload: newItem}) {
      const newId = idGenerator(4);
      const newItemWithId = { ...newItem, id: newId, key: newId.toString()};
      const nextData = state.products.concat(newItemWithId);

      return Object.assign({}, state, { products: nextData });

      // const newResult = Object.assign({}, {...state}, { products: nextData });
      // state.products = newResult;
      // return newResult;
    },

    editItem(state, {payload: editedItem}){
      return Object.assign({}, state, {products: editedItem});
    },

    searchItem(state, {payload: composedObj}){
      // TODO: 记到再写正则表达判断！！！
      // let regx = new RegExp(keyWord); 
      // let result = state.products.filter(item => regx.test(item.name));
      let result = setVisible(state, false);
      result = result.products.map(item => {
        item.visible = searchResult(item, composedObj);
        return item;
      })

      return Object.assign({}, state, {products: result});
    },

    cancelSearch(state){
      let newState = setVisible(state, true);
      return Object.assign({}, newState);
    },
  },
};